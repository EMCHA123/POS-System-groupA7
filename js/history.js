function loadSaveProductData() {
    productData = JSON.parse(localStorage.getItem('productData'));
    
}
loadSaveProductData()

let table = document.createElement("table");

let tbody = document.createElement('tbody');
table.appendChild(tbody);

let historyTitle = document.createElement('h2');
historyTitle.classList='historyH2';
historyTitle.textContent= 'History';
tbody.appendChild(historyTitle);

// Create a table row
let row = document.createElement("tr");
row.className='row1'
tbody.appendChild(row);

// Create table headers
let header1 = document.createElement("th");
header1.textContent = "ID";
row.appendChild(header1);

let header2 = document.createElement("th");
header2.textContent = "Costomer Name";
row.appendChild(header2);

let header3 = document.createElement("th");
header3.textContent = "product Name";
row.appendChild(header3);

let header4 = document.createElement("th");
header4.textContent = "Category";
row.appendChild(header4);

let header5 = document.createElement("th");
header5.textContent = "Quantity";
row.appendChild(header5);

let header6 = document.createElement("th");
header6.textContent = "Gross Price";
row.appendChild(header6);

function sailed() {

    // Create data rows
    let dataRow1 = document.createElement("tr");
    tbody.appendChild(dataRow1);
    let data1 = document.createElement("td");
    data1.textContent = "id";
    dataRow1.appendChild(data1);

    let data2 = document.createElement("td");
    data2.textContent = "Costomer Name";
    dataRow1.appendChild(data2);

    let data3 = document.createElement("td");
    data3.textContent = "product Name";
    dataRow1.appendChild(data3);

    let data4 = document.createElement("td");
    data4.textContent = "friut";
    dataRow1.appendChild(data4);

    let data5 = document.createElement("td");
    data5.textContent = "1";
    dataRow1.appendChild(data5);

    let data6 = document.createElement("td");
    data6.textContent = "5$";
    dataRow1.appendChild(data6);
}
let addtable = document.createElement('div');
addtable.textContent = 'add';
addtable.addEventListener('click', sailed)
row.appendChild(addtable);

let content = document.querySelector('.content');
content.appendChild(table);