let dashboard = document.querySelector('.dashboad_sold');
let top_product = document.querySelector('.top_product');

let create_card = document.createElement('div');
create_card.classList = 'card card1';
let inStock = document.createElement('div');
inStock.classList = 'inStock';
let creat_span = document.createElement('span');
creat_span.textContent = '100';
let creat_p = document.createElement('p');
creat_p.textContent = 'InStock'


top_product.appendChild(create_card);
create_card.appendChild(inStock);
inStock.appendChild(creat_span);
inStock.appendChild(creat_p);
console.log(top_product);