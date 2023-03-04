
const catalog = [
    {
        id: 1,
        name: 'Кроссовки',
        description: 'белые',
        price: 3500,
        avilable: true,
    },
    {
        id: 2,
        name: 'Пальто',
        description: 'шерстяное',
        price: 8500,
        avilable: true,
    },
    {
        id: 3,
        name: 'Рубашка',
        description: 'с коротким рукавом',
        price: 1500,
        avilable: true,
    },
    {
        id: 4,
        name: 'Майка',
        description: 'зелёная',
        price: 1000,
        avilable: true,
    },
    {
        id: 5,
        name: 'Брюки',
        description: 'черные',
        price: 2000,
        avilable: true,
    },
];

const basket = [
    {
        goodID: 1,
        amount: 2,    
    },
    {
        goodID: 3,
        amount: 3,    
    },
];


function cleanBasket() {
    basket.splice(0, basket.length);
};


function checkAvailability(id) {
    let index =  catalog.findIndex(i => i.id === id);

    if (index === -1) {
        return 
    };

    return catalog[index].avilable
};



function addToBasket(id, am) {
    if (checkAvailability(id)) {
        let item, index
        item = {goodID: id, amount: am};
        index = basket.findIndex(i => i.goodID === id);
    
        if (index === -1) {
            basket.push(item);
        } else {
            basket[index].amount += am;
        };

    } else {
        console.log(`Товара c id=${id} нет на складе или в каталоге`)
    };

};

function deleteFromBasket(id){
    let index = basket.findIndex(i => i.goodID === id);
    basket.splice(index, 1);
};

function countCostAmount() {
    let totalCost = 0;
    let totalAmount = 0;
    let itemPrice, index, itemAmount
    for (let i = 0; i < basket.length; i++) {
        index = +basket[i].goodID;
        itemAmount = +basket[i].amount
        itemPrice = +catalog.find(item => item.id === index).price;
        totalCost += itemAmount * itemPrice;
        totalAmount += itemAmount
    };

    return {totalAmount: totalAmount, totalSumm: totalCost,}
};


cleanBasket();

addToBasket(3, 2);
addToBasket(4, 2);
addToBasket(4, 2);
deleteFromBasket(3);
addToBasket(7, 2);
console.log(basket);
addToBasket(1, 3);
addToBasket(2, 1);
console.log(basket);
console.log(countCostAmount())
