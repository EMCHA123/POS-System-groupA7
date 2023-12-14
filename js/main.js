let proData = [
    // { name: 'Gold Wall Clock', nbStock: 10, price: 20 },
    // { name: 'Deco Accessory', nbStock: 10, price: 3 },
    // { name: 'Flowering Cactus', nbStock: 10, price: 24 },
    // { name: 'Modern Chair', nbStock: 10, price: 5 },
    // { name: 'Wall Clock', nbStock: 10, price: 4 },
    // { name: 'All in one citrus upholstery cleaner', nbStock: 10, price: 3 },
];

const cardSide = document.querySelector('.cardSide');
const addProIcons = document.querySelector('.addProIcon');
const createProPage = document.querySelector('.createProPage');
const namePro = document.querySelector('#name');
const categoriesPro = document.querySelector('#categories');
const stockPro = document.querySelector('#stock');
const pricePro = document.querySelector('#price');
const btncancelCreatePage = document.querySelector('#btnCancel');
const btnCreateProPage = document.querySelector('#btnCreate');
const addToCartPage = document.querySelector('.addToCart-side');

// _______________________ShowPage_______________________
function show(element) {
    element.style.display = 'block';
}
// _______________________HidePage_______________________
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

// __________________ClickToCreateCardProduct__________________
btnCreateProPage.addEventListener('click', ()=> { 
    getDataFromCrePrPg();
    namePro.value = '';
    categoriesPro.value = '';
    stockPro.value = '';
    pricePro.value = '';
    hide(createProPage);
})

// _______________________________SaveCreatDataToLocalStorage___________________
function saveProductData() {
    localStorage.setItem('productData', JSON.stringify(proData));
};

// ___________________________LoadDataFromLocalStorage___________________
function loadSaveProductData() {
    let getStorage = JSON.parse(localStorage.getItem('productData'));
    proData = getStorage != null ? getStorage : proData;
}

// ________________________________DisplayCardProduct________________________
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

// _______________________________DisplayAddToCardBox________________________
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
                eachBox.children[1].children[1].textContent = (editNumPrice) * (numOfQuantity + 1) + '$';
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
        deleteBoxImg.src = 'img/deletImg.png';
        deleteBoxImg.addEventListener('click', deletAddToCart)

        let boxBottom = document.createElement('div');
        boxBottom.classList.add('boxbottom');

        let spanQuantity = document.createElement('span');
        spanQuantity.textContent = 'Quantity: ';
        spanQuantity.classList.add('spanQuantity');

        let quantityNb = document.createElement('span');
        quantityNb.textContent = '1';
        let minusQuantityNb = document.createElement('p');
        minusQuantityNb.textContent = '-';
        minusQuantityNb.addEventListener('click', minusQuanttNb);
        let plusQuantityNb = document.createElement('p');
        plusQuantityNb.textContent = '+';
        plusQuantityNb.addEventListener('click', plusQuanttNb)

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

// ___________________________MinuxQuantityAddToCartBox______________________________
function minusQuanttNb(e){
    let allCardInf = document.querySelectorAll('.card');
    let titleAddCart = e.target.closest('.boxAddtoCart').children[0].children[0].textContent;
    let numQuantt = e.target.parentElement.children[0].textContent;

    for (cardInf of allCardInf){
        let oriTitleCard = cardInf.children[0].textContent;
        if (oriTitleCard === titleAddCart){
            let oriPrice = cardInf.children[2].children[0].textContent;

            let stockNb = cardInf.children[1].children[0].textContent;
            let oriNumPrice = oriPrice.slice(0, oriPrice.length-1);

            let priceAddToCart = e.target.closest('.boxbottom').children[1].textContent;
            let prAddToCart = priceAddToCart.slice(0, priceAddToCart.length-1);
            if (numQuantt > 0){
                numQuantt -= 1
                e.target.parentElement.children[0].textContent = numQuantt;

                cardInf.children[1].children[0].textContent = parseInt(stockNb) + 1;

                e.target.closest('.boxbottom').children[1].textContent = prAddToCart - oriNumPrice + '$';
            }else{
                e.target.closest('.boxAddtoCart').remove();
            };
        }  
    }   
}

// ___________________________PlusQuantityAddToCartBox_________________________
function plusQuanttNb(e){
    let allCardInf = document.querySelectorAll('.card');
    let titleAddCart = e.target.closest('.boxAddtoCart').children[0].children[0].textContent;
    for (cardInf of allCardInf){
        let oriTitleCard = cardInf.children[0].textContent;
        let oriNbPrice = cardInf.children[2].children[0].textContent;
        let editOriNbPrice = oriNbPrice.slice(0, oriNbPrice.length-1)
        console.log(oriNbPrice)
        if (oriTitleCard === titleAddCart){
            
            let stockNbOri = cardInf.children[1].children[0].textContent;

            let numQuantt = e.target.parentElement.children[0].textContent;
            console.log(numQuantt)
            if (numQuantt < parseInt(stockNbOri + numQuantt)){

                let reNbqtt = parseInt(numQuantt);
                e.target.parentElement.children[0].textContent = reNbqtt + 1;
                
                e.target.closest('.boxbottom').children[1].textContent = editOriNbPrice * parseInt(numQuantt)+1 + '$';
                cardInf.children[1].children[0].textContent = stockNbOri -1;
            }
        }

    } 
}

// ____________________deleteAddToCartBox_______________________
function deletAddToCart(e){
    confirm('Do you want to delet>?');
    if (confirm = true){
        e.target.closest('.boxAddtoCart').remove();
    }
}


loadSaveProductData();
dispalyProCard();