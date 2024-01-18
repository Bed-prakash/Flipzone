var cartCount =Number(sessionStorage.getItem("index"));
if (cartCount==null) {
  cartCount=0;
}else{
  document.getElementById("cart-count").innerText = cartCount;
}


var totalPri=0
function upload(){
var index =Number(sessionStorage.getItem("indexBuy"));

for (let i = 1; i <= index; i++) {
var id =Number(sessionStorage.getItem(`idBuy${i}`));
var title =    sessionStorage.getItem(`titleBuy${i}`);
var dPrice =   sessionStorage.getItem(`dPriceBuy${i}`);
var aPrice =   sessionStorage.getItem(`aPriceBuy${i}`);
var image =    sessionStorage.getItem(`imageBuy${i}`);

setTimeout(()=>{
  totalPri=Number(dPrice)+Number(dPrice)
},2000)
const tr = document.createElement('tr');
tr.innerHTML=`<tr>
<th class="id">${i}</th>
<th class="id">${id}</th>
<th class="">${title}</th>
<th class="price aPrice">${aPrice}</th>
<th class="price discount">10%</th>
<th class="price dPrice">${dPrice}</th>
<th class="imgTh imgcon"><img id="img" src="${image}" alt="Card Image"><h3 class="textImg">Congrats, you bought this product 
   <img id="gip" src="./Assets/images/courts-courtstt.gif" alt="gift"></h3></th>
</tr>`;
document.body.appendChild(tr);

}
}

setTimeout(()=>{
  console.log(totalPri)
},5000)