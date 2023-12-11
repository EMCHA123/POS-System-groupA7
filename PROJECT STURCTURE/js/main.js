let addProIcons = document.querySelector('.addProIcon');
let createProPage = document.querySelector('.createProPage');
addProIcons.addEventListener('click', createPro);

let proData = [
    { name: 'Gold Wall Clock', nbStock: 10, price: 20 },
    { name: 'Deco Accessory', nbStock: 10, price: 3 },
    { name: 'Flowering Cactus', nbStock: 10, price: 24 },
    { name: 'Modern Chair', nbStock: 10, price: 5 },
    { name: 'Wall Clock', nbStock: 10, price: 4 },
    { name: 'All in one citrus upholstery cleaner', nbStock: 10, price: 3 },
];

function saveProductData(){
    localStorage.setItem('productData', JSON.stringify(proData));
};
saveProductData()
function loadSaveProductData(){
    productData = JSON.parse(localStorage.getItem('productData'));
    console.log(productData)
}

function show(element){
    element.style.display = 'block';
}

function hide(element){
    element.style.display = 'none';
}

function dispalyProCard() {
    hide(createProPage)
    let cardSide = document.querySelector('.cardSide');
    for (dataPro of productData) {
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
        pricePro.textContent = dataPro.price;

        let spanBtn = document.createElement('span');
        spanBtn.id = 'spanBtn';
        btnAddToCart = document.createElement('button');
        btnAddToCart.id = 'btnAddToCart';
        btnAddToCart.textContent = 'Add to cart';
        spanStockPro.appendChild(stockPro);
        spanPricePro.appendChild(pricePro);
        spanBtn.appendChild(btnAddToCart);
        card.appendChild(namePro);
        card.appendChild(spanStockPro);
        card.appendChild(spanPricePro);
        card.appendChild(spanBtn);

        cardSide.appendChild(card);
    }
}
loadSaveProductData()
dispalyProCard()


function createPro() {
    show(createProPage)
    let spancreProTitle = document.createElement('span');
    // spancreProTitle.textContent = 'Create new Product';
    let creProTitle = document.createElement('h2');
    creProTitle.textContent = 'Create new Product';

    let spanNamePro = document.createElement('span');
    spanNamePro.classList.add = 'Categories inputCP';
    let titleNamePro = document.createElement('p');
    titleNamePro.textContent = 'Name:';
    let inputNamePro = document.createElement('input');
    inputNamePro.type = 'text';

    let spanCategories = document.createElement('span');
    spanCategories.classList.add = 'Categories inputCP';
    let titleCetegoriesPro = document.createElement('p');
    titleCetegoriesPro.textContent = 'Categories:';
    let inputCetegoriesPro = document.createElement('input');
    inputCetegoriesPro.type = 'text';

    let spanProNbStock = document.createElement('span');
    spanProNbStock.classList.add = 'ProNbStock inputCP';
    let titleProNbStock = document.createElement('p');
    titleProNbStock.textContent = 'Stock:';
    let proNbStock = document.createElement('input');
    proNbStock.type = 'number';

    let spanproNbPrice = document.createElement('span');
    spanproNbPrice.classList.add = 'proNbPrice inputCP';
    let titleproNbPrice = document.createElement('p');
    titleproNbPrice.textContent = 'price:';
    let proNbPrice = document.createElement('input');
    proNbPrice.type = 'number';

    let btnSpan = document.createElement('span');
    btnSpan.classList.add = 'btnSpan inputCP';
    let btnCancel = document.createElement('button');
    btnCancel.id = 'btnCancel';
    btnCancel.textContent = 'Cancele';
    let btnCreate = document.createElement('button');
    btnCreate.id = 'btnCreate';
    btnCreate.textContent = 'Create';

    spancreProTitle.appendChild(creProTitle)
    spanNamePro.appendChild(titleNamePro);
    spanNamePro.appendChild(inputNamePro);
    spanCategories.appendChild(titleCetegoriesPro);
    spanCategories.appendChild(inputCetegoriesPro);
    spanProNbStock.appendChild(titleProNbStock);
    spanProNbStock.appendChild(proNbStock);
    spanproNbPrice.appendChild(titleproNbPrice);
    spanproNbPrice.appendChild(proNbPrice);
    btnSpan.appendChild(btnCancel);
    btnSpan.appendChild(btnCreate);
    createProPage.appendChild(spancreProTitle);
    createProPage.appendChild(spanNamePro);
    createProPage.appendChild(spanCategories);
    createProPage.appendChild(spanProNbStock);
    createProPage.appendChild(spanproNbPrice);
    createProPage.appendChild(btnSpan);
}

