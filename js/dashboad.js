let dashboard = document.querySelector('.dashboad_sold');
let top_product = document.querySelector('.top_product');
let table = document.querySelector('table');

function loadSaveProductData() {
    let getStorage = JSON.parse(localStorage.getItem('productData'));
    proData = getStorage != null ? getStorage : proData;
    // console.log(proData);
}

function laodgetProductDara() {
    let storage_total = JSON.parse(localStorage.getItem('dataHistory'));
    prodcutData = storage_total != null ? storage_total : prodcutData;
    // console.log(prodcutData);
}
function loadNCategoriesData() {
    let getCategories = JSON.parse(localStorage.getItem('nCategories'));
    let category_span = document.querySelector('.span1');
    category_span.textContent = getCategories;

}
loadNCategoriesData()

function display_data() {
    let list = 1;
    for (prodcut of proData) {
        //list_product
        let tbody = document.createElement('tbody');
        let tr1 = document.createElement('tr');
        let th = document.createElement('td')
        th.textContent = list;

        // add_dat from localstorage
        let td_data1 = document.createElement('td');
        td_data1.textContent = prodcut.name;
        let add_categary = document.createElement('td');
        add_categary.textContent = prodcut.categories;
        let add_price = document.createElement('td');
        add_price.textContent = prodcut.price + '$';

        //......list_product......
        table.appendChild(tbody)
        tbody.appendChild(tr1);
        tr1.appendChild(th);

        //...add_data from localstorage...
        tr1.appendChild(td_data1);
        tr1.appendChild(add_categary);
        tr1.appendChild(add_price);
        list++;
    }
    let sum = 0
    for (let pro of prodcutData) {
        let i = 0;
        let income_span = document.querySelector('.income');
        let total = income_span.textContent;
        sumTotal = parseInt(total) + parseInt(pro.total);
        income_span.textContent = sumTotal + '$';
        if (income_span.pro) {
            i++
        }
    }
}
function display_inStock() {
    let inStock_span = document.querySelector('.instock');
    let instockNum = 0;
    for (stock of proData) {
        instockNum += parseInt(stock.nbStock)
        inStock_span.textContent = instockNum;
    }
}

loadSaveProductData();
laodgetProductDara()
display_data();
display_inStock()

// ...............search.................
let search = document.querySelector('#seach');
let trHis = document.querySelectorAll('tbody tr');
search.addEventListener('keyup', (e) => {
    let searchCha = e.target.value;
    for (trs of trHis) {
        let wordTr = trs.children[1].textContent;
        if (wordTr.indexOf(searchCha) !== -1) {
            trs.style.display = 'table-row';
        } else {
            trs.style.display = 'none'
        }

    }
})