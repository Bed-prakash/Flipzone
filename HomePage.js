var dataArray;
function load(){
// Function to fetch product data from the API
fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(products => {
        dataArray =products;
        displayProducts(products);
      });

      
// Function to display products in the dashboard

function displayProducts(products) {
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.innerHTML = `
    <div id="oneSetCont">
      <img src="${product.image}" alt="">
      <p>${product.title}</p>
      <p class="p">Actual Price <del>${((product.price)*80).toFixed(0)}</del>Rs</p>
      <p class="p">Discount 10%</p>
      <p class="p">Discounted Price  ${(80*((product.price)-(product.price)*0.10)).toFixed(0)}Rs</p>
      <div id="buttonCon">
          <button onclick="buyProduct(${product.id})">Buy</button>
          <button  onclick="addToCart(${product.id})" >add</button>
      </div>
    </div>
      
    `;
    document.body.appendChild(productCard);
    
  });
}
}
//when try to buy some product
function buyProduct(id){
  window.location.href="./Buy2.html";
  sessionStorage.setItem("idBuy",id);
}


// Function to update the cart count
// id,dPrice,aPrice,title,image
var cartCount =Number(sessionStorage.getItem("index"));
if (cartCount==null) {
  cartCount=0;
}else{
  document.getElementById("cart-count").innerText = cartCount;
}
function addToCart(id) {
  cartCount++;
  document.getElementById("cart-count").innerText = cartCount;
  const addValue= dataArray.filter((product)=>{
    return product.id==id;
})
var id=addValue[0].id;
const dPrice =(80*((addValue[0].price)-(addValue[0].price)*0.10)).toFixed(0);
const aPrice= ((addValue[0].price)*80).toFixed(0);
const title=addValue[0].title;
const image= addValue[0].image;
sessionStorage.setItem(`id${cartCount}`,id);
sessionStorage.setItem(`title${cartCount}`,title);
sessionStorage.setItem(`aPrice${cartCount}`,aPrice);
sessionStorage.setItem(`dPrice${cartCount}`,dPrice);
sessionStorage.setItem(`image${cartCount}`,image);
sessionStorage.setItem("index",cartCount);

localStorage.clear();
}


