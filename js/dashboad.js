let dashboard = document.querySelector('.dashboad_sold');
let top_product = document.querySelector('.top_product');
let table = document.querySelector('table');

function loadSaveProductData() {
    let getStorage = JSON.parse(localStorage.getItem('productData'));
    proData = getStorage != null ? getStorage : proData;
    console.log(proData);
}

function laodgetProductDara(){
    let storage_total = JSON.parse(localStorage.getItem('dataHistory'));
    prodcutData = storage_total != null? storage_total : prodcutData;
    console.log(prodcutData);
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
        
        //..........amount.......
        let th_amount = document.createElement('th');
        th_amount.textContent = prodcutData.customerName;

        //list_product
        table.appendChild(tbody)
        tbody.appendChild(tr1);
        tr1.appendChild(th);

        //add_data from localstorage
        tr1.appendChild(td_data1);
        tr1.appendChild(add_categary);
        tr1.appendChild(add_price);
        list ++;
        //.....amount.....
        tr1.appendChild(th_amount);
        console.log(tr1);
    }

    for(pro of prodcutData){
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
        
        //..........amount.......
        let th_amount = document.createElement('th');
        th_amount.textContent = pro.total;

        //list_product
        table.appendChild(tbody)
        tbody.appendChild(tr1);
        tr1.appendChild(th);

        //add_data from localstorage
        tr1.appendChild(td_data1);
        tr1.appendChild(add_categary);
        tr1.appendChild(add_price);
        list ++;
        //.....amount.....
        tr1.appendChild(th_amount);
        console.log(tr1);
    }
    
}

function display_card(){
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
        let category_span = document.querySelector('.span1');
        category_span.textContent = category;
    }
}

loadSaveProductData();
laodgetProductDara()
display_data();
display_card();
