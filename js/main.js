let proData = [
    // { name: 'Gold Wall Clock', nbStock: 10, price: 20 },
    // { name: 'Deco Accessory', nbStock: 10, price: 3 },
    // { name: 'Flowering Cactus', nbStock: 10, price: 24 },
    // { name: 'Modern Chair', nbStock: 10, price: 5 },
    // { name: 'Wall Clock', nbStock: 10, price: 4 },
    // { name: 'All in one citrus upholstery cleaner', nbStock: 10, price: 3 },
];

let cardSide = document.querySelector('.cardSide');
let addProIcons = document.querySelector('.addProIcon');
let createProPage = document.querySelector('.createProPage');
let namePro = document.querySelector('#name');
let categoriesPro = document.querySelector('#categories');
let stockPro = document.querySelector('#stock');
let pricePro = document.querySelector('#price');
let btncancelCreatePage = document.querySelector('#btnCancel');
let btnCreateProPage = document.querySelector('#btnCreate');
let addToCartPage = document.querySelector('.addToCart-side');

function show(element) {
    element.style.display = 'block';
}
function hide(element) {
    element.style.display = 'none';
}

addProIcons.addEventListener('click', () => {
    show(createProPage);
});

btncancelCreatePage.addEventListener('click', ()=> {
    hide(createProPage);
});

function getDataFromCrePrPg(){
    storeData = {};
    storeData.name = namePro.value;
    storeData.categories = categoriesPro.value;
    storeData.nbStock = stockPro.value;
    storeData.price = pricePro.value;
    proData.push(storeData);
    console.log(proData);
    saveProductData();
    location.reload();
}

btnCreateProPage.addEventListener('click', ()=> { 
    getDataFromCrePrPg();
    namePro.value = '';
    categoriesPro.value = '';
    stockPro.value = '';
    pricePro.value = '';
    hide(createProPage);
})

function saveProductData() {
    localStorage.setItem('productData', JSON.stringify(proData));
};
function loadSaveProductData() {
    let getStorage = JSON.parse(localStorage.getItem('productData'));
    proData = getStorage != null ? getStorage : proData;
}

function dispalyProCard() {
    hide(createProPage)
    i = 0;
    for (let dataPro of proData) {
        let card = document.createElement('div');
        card.classList.add('card');

        let namePro = document.createElement('h2');
        namePro.textContent = dataPro.name;

        let spanStockPro = document.createElement('span');
        spanStockPro.textContent = 'Stock:';
        let stockPro = document.createElement('span');
        stockPro.textContent = dataPro.nbStock;

        let spanPricePro = document.createElement('span');
        spanPricePro.textContent = 'Price:';
        let pricePro = document.createElement('span');
        pricePro.textContent = dataPro.price + '$';

        let spanBtn = document.createElement('span');
        spanBtn.id = 'spanBtn';
        btnAddToCart = document.createElement('button');
        btnAddToCart.id = i;
        console.log(btnAddToCart.id)
        btnAddToCart.textContent = 'Add to cart';
        btnAddToCart.addEventListener('click', disPlayAddToCart);

        spanStockPro.appendChild(stockPro);
        spanPricePro.appendChild(pricePro);
        spanBtn.appendChild(btnAddToCart);
        card.appendChild(namePro);
        card.appendChild(spanStockPro);
        card.appendChild(spanPricePro);
        card.appendChild(spanBtn);

        cardSide.appendChild(card);

        i++
    }
}

function disPlayAddToCart(e) {
    let boxAddToCart = document.querySelectorAll('.boxAddtoCart');
    let getData = proData;
    let isNotSameProduct = true;
    let displayData = getData[e.target.id];

    for (eachBox of boxAddToCart) {
        if (displayData.name === eachBox.children[0].children[0].textContent) {
            isNotSameProduct = false;

            let numOfStock = e.target.closest('.card').children[1].children[0].textContent;
            if (numOfStock > 0) {
                e.target.closest('.card').children[1].children[0].textContent = numOfStock - 1;

                let numOfQuantity = parseInt(eachBox.children[1].children[0].children[0].textContent);
                eachBox.children[1].children[0].children[0].textContent = numOfQuantity + 1

                let numPrice = e.target.closest('.card').children[2].children[0].textContent;
                let editNumPrice = numPrice.slice(0, numPrice.length - 1);
                eachBox.children[1].children[1].textContent = parseInt((editNumPrice) * (numOfQuantity + 1)) + '$';
                console.log(editNumPrice)
            }
        }
    }

    if (isNotSameProduct) {
        let numOfStock = e.target.closest('.card').children[1].children[0].textContent;
        e.target.closest('.card').children[1].children[0].textContent = numOfStock - 1;

        let boxAddToCart = document.createElement('div');
        boxAddToCart.classList.add('boxAddtoCart');

        let boxTop = document.createElement('div');
        boxTop.classList.add('boxTop');

        let boxTopTitle = document.createElement('h3');
        boxTopTitle.textContent = displayData.name;

        let deleteBoxImg = document.createElement('img');

        let boxBottom = document.createElement('div');
        boxBottom.classList.add('boxbottom');

        let spanQuantity = document.createElement('span');
        spanQuantity.textContent = 'Quantity: ';
        spanQuantity.classList.add('spanQuantity');

        let quantityNb = document.createElement('span');
        quantityNb.textContent = '1';
        let minusQuantityNb = document.createElement('p');
        minusQuantityNb.textContent = '-';
        let plusQuantityNb = document.createElement('p');
        plusQuantityNb.textContent = '+';

        let boxTotal = document.createElement('span');
        boxTotal.textContent = displayData.price + '$';


        spanQuantity.appendChild(quantityNb);
        spanQuantity.appendChild(minusQuantityNb);
        spanQuantity.appendChild(plusQuantityNb);
        boxTop.appendChild(boxTopTitle);
        boxTop.appendChild(deleteBoxImg);
        boxBottom.appendChild(spanQuantity);
        boxBottom.appendChild(boxTotal);

        boxAddToCart.appendChild(boxTop);
        boxAddToCart.appendChild(boxBottom);
        addToCartPage.appendChild(boxAddToCart);
    }

}

loadSaveProductData();
dispalyProCard();