let dashboard = document.querySelector('.dashboad_sold');
let top_product = document.querySelector('.top_product');
let table = document.querySelector('table');
// let thead = document.querySelector('thead');

let data=[
    {name : 'Instock',inStock : 100,},
    {name : 'Categary',inStock : 3,},
    {name : 'Sold out',inStock : 200,},
    {name : 'Income',inStock : 1400,}
];

function loadSaveProductData() {
    let getStorage = JSON.parse(localStorage.getItem('productData'));
    proData = getStorage != null ? getStorage : proData;
    // console.log(proData);
}

function display_data(){

    for(prodcut of proData){

        //list_product
        let tbody = document.createElement('tbody');
        let tr1 = document.createElement('tr');
        let th = document.createElement('td')
        th.textContent = 1;
       
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
        
        console.log(table);
    }
}

function display_card(){
    for(prodcut of data){
        let create_card = document.createElement('div');
        create_card.classList = 'card card1';
        let inStock = document.createElement('div');
        inStock.classList = 'inStock';
        inStock.textContent = prodcut.nbStock;
        let creat_span = document.createElement('span');
        creat_span.textContent = prodcut.inStock;
        let creat_p = document.createElement('p');
        creat_p.textContent = prodcut.name;
    
    
        top_product.appendChild(create_card);
        create_card.appendChild(inStock);
        inStock.appendChild(creat_span);
        inStock.appendChild(creat_p);
        console.log(top_product);
    }
    
}

loadSaveProductData()
display_data()
display_card()
