let dashboard = document.querySelector('.dashboad_sold');
let top_product = document.querySelector('.top_product');

let data=[
    {name : 'Instock',inStock : 100,},
    {name : 'Categary',inStock : 3,},
    {name : 'Sold out',inStock : 200,},
    {name : 'Income',inStock : 1400,}
];

function loadSaveProductData() {
    let getStorage = JSON.parse(localStorage.getItem('productData'));
    proData = getStorage != null ? getStorage : proData;
    console.log(proData);
}

function display_data(){

}

function display_card(){
    for(prodcut of data){
        let create_card = document.createElement('div');
        create_card.classList = 'card card1';
        let inStock = document.createElement('div');
        inStock.classList = 'inStock';
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
display_card()
