function loadSaveProductData(){
    productData = JSON.parse(localStorage.getItem('productData'));
    console.log(productData)
}
loadSaveProductData()