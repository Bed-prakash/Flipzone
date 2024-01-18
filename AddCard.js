var cartCount =Number(sessionStorage.getItem("index"));
if (cartCount==null) {
  cartCount=0;
}else{
  document.getElementById("cart-count").innerText = cartCount;
}
function upload(){
var index =Number(sessionStorage.getItem("index"));
console.log(index);
for (let i = 1; i <= index; i++) {
var id =Number(sessionStorage.getItem(`id${i}`));
var title =    sessionStorage.getItem(`title${i}`);
var dPrice =   sessionStorage.getItem(`dPrice${i}`);
var aPrice =   sessionStorage.getItem(`aPrice${i}`);
var image =    sessionStorage.getItem(`image${i}`);
const tr = document.createElement('tr');
tr.innerHTML=`<tr>
<th class="id">${i}</th>
<th class="id">${id}</th>
<th>${title}</th>
<th class="price aPrice">${aPrice}</th>
<th class="price discount">10%</th>
<th class="price dPrice">${dPrice}</th>
<th class="imgTh imgcon"><img id="img" src="${image}" alt="Card Image"> <button id="cardButton" onclick="buyCart(${id})">Buy</button></th>
</tr>`;
document.body.appendChild(tr);
}
}

function buyCart(id){
    console.log(id);
sessionStorage.setItem("idCard",id);
window.location.href="Buy2.html";
}





