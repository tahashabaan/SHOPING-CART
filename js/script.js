let proPage=document.querySelector(".pro-page");
// let numPro=document.querySelector(".num-pro");
// console.log(numPro);
// data project
let data=   
 [
   {
     "id":1,
    "imgUrl":"img/choccolate_cake.jpg",
     "title":"choccolate cake",
     "price":33
  },
  {
    "id":3,
    "imgUrl":"img/green_shoe.jpg",
     "title":"green shoe",
     "price":200
  },
  {
    "id":4,
    "imgUrl":"img/hamburger.jpg",
     "title":"hamburger",
     "price":100
  },
  {
    "id":5,
    "imgUrl":"img/pink_shoe.jpg",
     "title":"pink shoe",
     "price":34
  },
  {
    "id":6,
    "imgUrl":"img/shirt.jpg",
     "title":"shirt",
     "price":445
  },
  {
    "id":7,
    "imgUrl":"img/strawberry_cake.jpg",
     "title":"strawberry cake",
     "price":445
  },
 
];
// localstorage
function saveStorage()
{
  localStorage.setItem("product",JSON.stringify(data));
}
saveStorage();
// show product
  function disPro(data)
  {
   let tabel='';
   let contentPro=document.querySelector(".row");
    data.forEach(item => {
     tabel+=
     `<div class="col">
      <img src="${item.imgUrl}" alt="hoccolate_cake">
      <div class="card-content">
       <h3 class="card-title">${item.title}</h3>
       <p class="card-price">${item.price}$</p>
       <button class="btn" onclick="addToCart(${item.id})">add to cart</button>
      </div><!-- card-content -->
      </div><!-- ./col -->`
   });
   contentPro.innerHTML=tabel;
  }
  disPro(data);
  // condition open cart
  proPage.addEventListener("click",openCart);
  function openCart()
  {
      if(dataCart.length>=1)
        window.location="product.html";

  }
 function numPro()
  {
    let numPro=document.querySelector(".num-pro");
     if(dataCart.length>=1) numPro.innerHTML=dataCart.length;
     else   numPro.style.display="none";
  }
  numPro();
