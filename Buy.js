var cartCount =Number(sessionStorage.getItem("index"));
if (cartCount==null) {
  cartCount=0;
}else{
  document.getElementById("cart-count").innerText = cartCount;
}
let gComponent;
var idCard=Number(sessionStorage.getItem("idCard"));
var input=true;
fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(products => {
    const value= products.filter((product)=>{
      return product.id==sessionStorage.getItem("idBuy");
    })
    console.log("Props ",products);
    if (idCard==0) {
        displayProducts1(value);
    input=false;
  }    
});
function displayProducts1(products) {
   const productCard = document.createElement('div');
    productCard.innerHTML = `
    <div id="img">
      <img src="${products[0].image}" alt="temp">    
  </div>
  <div id="text">
      <p id="discription"><b><u> Description</u> : </b> ${(products[0].description).toFixed(300)}.</p>
      <p><b><u>Title</u> : </b> ${products[0].title}</p>
      <p class="p">Actual Price : <del>${(products[0].price)*80}</del>Rs</p>
      <p class="p">Discount : 10%</p>
      <p class="p">Discounted Price : ${((products[0].price)-(products[0].price)*0.10).toFixed(2)*80}Rs</p>
      <div id="buttonCon">
          <button onClick="buySuccessfull(${products[0].id})" >Buy</button>
      </div>
    </div>
    `;
    document.getElementById("div").appendChild(productCard);
    
    localStorage.clear();
}
var indexBuy =Number(sessionStorage.getItem("indexBuy"));
if (indexBuy==null) {
  indexBuy=0;
}
function buySuccessfull(id){
  if (idCard==0) {
    indexBuy++;
  }
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(product => {
    var products= product.filter((product1)=>{
      return product1.id==sessionStorage.getItem("idBuy");
    })
 
 
  sessionStorage.setItem("indexBuy",indexBuy);
  sessionStorage.setItem(`idBuy${indexBuy}`,    products[0].id);
  sessionStorage.setItem(`titleBuy${indexBuy}`, products[0].title);
  sessionStorage.setItem(`aPriceBuy${indexBuy}`,(products[0].price)*80);
  sessionStorage.setItem(`dPriceBuy${indexBuy}`,((products[0].price)-(products[0].price)*0.10).toFixed(2)*80);
  sessionStorage.setItem(`imageBuy${indexBuy}`, products[0].image);
  window.location.href="finalBuy.html";
  });
}

console.log("idCard ",idCard);
var indexBuy =Number(sessionStorage.getItem("indexBuy"));
if (idCard!=0 && input==true) {
  if (indexBuy==null) {
    indexBuy=0;
  }
  var pro;
  indexBuy++;
  fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(products => {
          var pro= products.filter((product)=>{
            return product.id==idCard; 
          })

    const productCard1 = document.createElement('div');
     productCard1.innerHTML = `
     <div id="img">
       <img src="${pro[0].image}" alt="temp">    
   </div>
   <div id="text">
     <p id="discription"><b><u> Description</u> : </b> ${pro[0].description}</p>
     <p><b><u>Title</u> : </b> ${pro[0].title}</p>
     <p class="p">Actual Price : <del>${(pro[0].price)*80}</del>Rs</p>
     <p class="p">Discount : 10%</p>
     <p class="p">Discounted Price : ${((pro[0].price)-(pro[0].price)*0.10).toFixed(2)*80}Rs</p>
     <div id="buttonCon">
         <button onClick="buySucc(${pro[0].id})" >Buy</button>
     </div>
   </div>
   `;
   document.getElementById("div").appendChild(productCard1);
  });
}
function buySucc(id){
  fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(product => {
    var pro= product.filter((product1)=>{
      return product1.id==id;
    })
    sessionStorage.setItem("indexBuy",indexBuy);
    sessionStorage.setItem(`idBuy${indexBuy}`,    pro[0].id);
    sessionStorage.setItem(`titleBuy${indexBuy}`, pro[0].title);
    sessionStorage.setItem(`aPriceBuy${indexBuy}`,(pro[0].price)*80);
    sessionStorage.setItem(`dPriceBuy${indexBuy}`,((pro[0].price)-(pro[0].price)*0.10).toFixed(2)*80);
    sessionStorage.setItem(`imageBuy${indexBuy}`, pro[0].image);
    window.location.href="finalBuy.html"
    sessionStorage.setItem("idCard",0);
  })
}


