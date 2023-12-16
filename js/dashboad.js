let dashboard = document.querySelector('.dashboad_sold');
let top_product = document.querySelector('.top_product');
let table = document.querySelector('table');
// let thead = document.querySelector('thead');

function loadSaveProductData() {
    let getStorage = JSON.parse(localStorage.getItem('productData'));
    proData = getStorage != null ? getStorage : proData;
    // console.log(proData);
}

function display_data(){
    let list = 1;
    for(prodcut of proData){

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
        add_price.textContent = prodcut.price +'$';

        //list_product
        table.appendChild(tbody)
        tbody.appendChild(tr1);
        tr1.appendChild(th);

        //add_data from localstorage
        tr1.appendChild(td_data1);
        tr1.appendChild(add_categary);
        tr1.appendChild(add_price);
        list ++;
    }
}

function display_card(){
    let inStock = document.querySelector('.inStock2');
    
    console.log(inStock);
    let stock = 0;
    let category = 0;
    for(let prodcut of proData){
        if(prodcut.categories == 'fruit'){
            category++;
        }
        if(prodcut.categories == 'Drink'){
            category ++;
        }
        if(prodcut.categories == 'Foods'){
            category ++;
        }
        if(prodcut.categories==prodcut.categories){
            category = stock;
        }
        stock ++;
        let inStock_span = document.querySelector('span');
        inStock_span.textContent = stock;
        

    }
    let category_span = document.createElement('span');
    category_span.textContent = category;
    inStock.appendChild(category_span);
    
}

loadSaveProductData();
display_data();
display_card();
