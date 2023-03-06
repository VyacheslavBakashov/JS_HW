class Good {
    constructor(id, name, description, price, sizes = [], available = false) {
        this.id = +id;
        this.name = name;
        this.description = description;
        this.sizes  = sizes;
        this.price = +price;
        this.available = available;
    };

    setAvailable(val) {
        this.available = val;
    };
};

class GoodsList {
    #goods;

    constructor(filter, sortPrice = false, sortDir = false) {
        this.filter = filter === undefined ? /./i : filter;
        this.sortPrice = sortPrice;
        this.sortDir  = sortDir;
        this.#goods = [];      
    };

    get list() {
        let res = this.#goods.filter(good => good.available && this.filter.test(good.name));

        if (this.sortPrice) {
            if (this.sortDir) {
                res.sort((num1, num2) => num1.price - num2.price)
            } else {
                res.sort((num1, num2) => num2.price - num1.price)
            };
        };
        return res
    };

    add(item) {
        this.#goods.push(item)
    };

    remove(id) {
        let index = this.#goods.findIndex(item => item.id === +id);

        if (index !== -1) {
            this.#goods.splice(index, 1)
        };
    };
};


class BasketGood extends Good {
    constructor(good, amount) {
        super(good.id, good.name, good.description, good.price, good.sizes, good.available);
        this.amount = amount;
    };
};


class Basket {
    constructor(goods = []) {
        this.goods = goods
    };

    get totalAmount() {
        return this.goods.reduce((total, good) => total + good.amount, 0);
    };

    get totalSum() {
        return this.goods.reduce((total, good) => total + good.amount * good.price, 0);
    };

    clear() {
        this.goods.length = 0
    };

    add(good, amount) {
        let index = this.goods.findIndex(item => item.id === good.id);

        if (index === -1) {
            // let new_ = new BasketGood(good, amount);
            this.goods.push( new BasketGood(good, amount) );
        } else {
            this.goods[index].amount += amount;
        };
    };

    remove(good, amount) {
        let index = this.goods.findIndex(item => item.id === good.id);

        if (index !== -1) {
            this.goods[index].amount -= amount

            if (this.goods[index].amount <= 0) {
                this.goods.splice(index, 1)
            };
        };
    };

    removeUnavailable() {
        this.goods = this.goods.filter(item => item.available);
    };
};


function main_program() {
    let goods = [
        new Good(5, 'Брюки', 'черные', 2000, [48, 50, 52], true),
        new Good(1, 'Кроссовки', 'белые', 3500, [39, 42, 43],  true),
        new Good(3, 'Рубашка', 'с коротким рукавом', 1500, [42, 46], true),
        new Good(2, 'Пальто', 'шерстяное', 8500, [48, 50], true),
        new Good(4, 'Майка', 'зелёная', 1000, [42, 50], true),
    ];
    let goodsList = new GoodsList();
    let basket = new Basket();

    for (let item of goods) {
        goodsList.add(item)
    };

    goodsList.sortPrice = true;
    goodsList.sortDir = false;

    console.log('1_______________________________________');
    console.log(goodsList.list);

    console.log('\n2_______________________________________');
    goodsList.filter = /па/i;
    console.log(goodsList.list);
    goodsList.filter = /./i;

    console.log('\n3_______________________________________');
    goods[0].setAvailable(false);
    goodsList.remove(1);
    console.log(goodsList.list);
    
    console.log('\n4_______________________________________');   
    basket.add(goodsList.list[0], 1);
    basket.add(goodsList.list[0], 1);
    basket.add(goodsList.list[1], 3);
    console.log(basket.goods);

    console.log('\n5_______________________________________');  
    basket.remove(basket.goods[0], 1);
    console.log(basket.goods);
    
    console.log('\n6_______________________________________');
    basket.add(goodsList.list[2], 1); 
    basket.goods[0].setAvailable(false);
    basket.removeUnavailable();
    console.log(basket.goods);

    console.log('\n6_______________________________________');
    console.log(basket.totalAmount)
    console.log(basket.totalSum)

};

main_program()


