let addProIcons = document.querySelector('.addProIcon');
let createProPage = document.querySelector('.createPro');

addProIcons.addEventListener('click', createPro);

function createPro(){

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
    createProPage.appendChild(creProTitle);
    createProPage.appendChild(spanNamePro);
    createProPage.appendChild(spanCategories);
    createProPage.appendChild(spanProNbStock);
    createProPage.appendChild(spanproNbPrice);
    createProPage.appendChild(btnSpan);
}
