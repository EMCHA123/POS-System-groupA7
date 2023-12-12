let addProIcons = document.querySelector('.addProIcon');
let createProPage = document.querySelector('.createProPage');
let addToCartPage = document.querySelector('.addToCart-side')
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
}

function show(element){
    element.style.display = 'block';
}
function hide(element){
    element.style.display = 'none';
}

function dispalyProCard() {
    hide(createProPage)
    i = 0;
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
loadSaveProductData()
dispalyProCard()

function createPro() {
    show(createProPage)

    let divCreateCard = document.createElement('div');
    divCreateCard.classList.add('divCreateCart');

    let creProTitle = document.createElement('h2');
    creProTitle.textContent = 'Create new Product';

    let titleNamePro = document.createElement('span');
    titleNamePro.textContent = 'Name:';
    let inputNamePro = document.createElement('input');
    inputNamePro.type = 'text';

    let titleCetegoriesPro = document.createElement('span');
    titleCetegoriesPro.textContent = 'Categories:';
    let inputCetegoriesPro = document.createElement('input');
    inputCetegoriesPro.type = 'text';

    let titleProNbStock = document.createElement('span');
    titleProNbStock.textContent = 'Stock:';
    let proNbStock = document.createElement('input');
    proNbStock.type = 'number';

    let titleproNbPrice = document.createElement('span');
    titleproNbPrice.textContent = 'price:';
    let proNbPrice = document.createElement('input');
    proNbPrice.type = 'number';

    let inputImage = document.createElement('input');
    inputImage.type = 'file';

    
    let btnSpanCr = document.createElement('span');
    let btnCancel = document.createElement('button');
    btnCancel.id = 'btnCancel';
    btnCancel.textContent = 'Cancele';
    btnCancel.addEventListener('click', ()=>{
        console.log(inputNamePro.value)
    });
    let btnCreate = document.createElement('button');
    btnCreate.id = 'btnCreate';
    btnCreate.textContent = 'Create';

    titleNamePro.appendChild(inputNamePro);
    titleCetegoriesPro.appendChild(inputCetegoriesPro);
    titleProNbStock.appendChild(proNbStock);
    titleproNbPrice.appendChild(proNbPrice);
    btnSpanCr.appendChild(btnCancel);
    btnSpanCr.appendChild(btnCreate);
    divCreateCard.appendChild(creProTitle);
    divCreateCard.appendChild(titleNamePro);
    divCreateCard.appendChild(titleCetegoriesPro);
    divCreateCard.appendChild(titleProNbStock);
    divCreateCard.appendChild(titleproNbPrice);
    divCreateCard.appendChild(inputImage);
    divCreateCard.appendChild(btnSpanCr);
    createProPage.appendChild(divCreateCard);
}

function disPlayAddToCart(e){
    let getData = productData;
    console.log(getData[e.target.id])
    let displayData = getData[e.target.id];

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

