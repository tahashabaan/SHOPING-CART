 let tempQuanVal; 
//  import {numPro} from "js/script.js";
//  let shoppingTitle=document.querySelector(".back-shopping-title");
let tbody=document.querySelector("tbody");
// console.log(grandPrice);
 let dataCart=localStorage.keyDataCart!=null?
 JSON.parse(localStorage.keyDataCart):[];
 function addToCart(id)
{
          let keyAdd=true;
          data.map((item)=>{
          if(item.id===id)
          { 
            let totalVal=item.price;
            /*
            انت عايز تعمل اي في حياتك ؟
            1عايز اشوف هل اليدي دا موجود ام لا
            2 بعد بنا علي زلك اضيف ام لا
            dataCart.filter((ele)=>{
              if(ele.id!==id)
              consol.log(id);
              else
                  consol.log("exist");

            });
            */
            console.log(keyAdd);
             if(keyAdd)
             {
              numPro();
              dataCart.push({...item,
                total:totalVal,
                quantity:tempQuanVal});
                localStorage.setItem("keyDataCart",JSON.stringify(dataCart));                
            }
             
          } 
           });
}
function disProInCart(items)
{
     let tabel='';
     items.forEach(element => {
          tabel+=
       `<tr>
       <td>
         <input type="checkbox" name="" id="check">
       </td>
       <td class="img">
         <img src="${element.imgUrl}"            
       alt="choccolate_cake"> 
       </td>
       <td class="title">${element.title}</td>
       <td class="price">${element.price}$</td>
       <td class="quantity">
         <input type="number" value="1" onkeyup="totalPrice(${element.id})" name="" class="number">
       </td>
       <td class="total-price">${element.total}$</td>
       <td>
        <button class="btn-remove" onclick="removeItem(${element.id})">remove</button>
       </td>
       </tr>`
});
tbody.innerHTML=tabel;
}
disProInCart(dataCart);
function totalPrice(id)
{
     let quantity=document.getElementsByClassName("number");
     let totalPrice=document.querySelectorAll(".total-price");
     let indItem= dataCart.map((item)=>{
      return item.id;
     }).indexOf(id);
     if(indItem!=-1)
     {
          // to add in array called dataCart
       dataCart[indItem].total=dataCart[indItem].price*quantity[indItem].    value;
       tempQuanVal=quantity[indItem].value;
       totalPrice[indItem].innerHTML= dataCart[indItem].total +"$";
     //   localStorage.setItem("keyDataCart",JSON.stringify(dataCart));
       if(quantity[indItem].value=="" || quantity[indItem].value===1)
       {
        dataCart[indItem].total=dataCart[indItem].price;
        totalPrice[indItem].innerHTML= dataCart[indItem].total;
     //    localStorage.setItem("keyDataCart",JSON.stringify(dataCart));
       }
     }     
     }              
function removeItem(id)
{
     let indItem= dataCart.map((item)=>{
          return item.id;
         }).indexOf(id);
         if(indItem!==-1)
      {
          dataCart.splice(indItem,1);
          localStorage.keyDataCart=JSON.stringify(dataCart);
          disProInCart(dataCart);
          numPro();
           closeCart();
         }    
         if(localStorage.keyDataCart==null)  
           localStorage.removeItem("keyDataCart");
} 
function closeCart()
  {
    if(dataCart.length<1)
      window.location="index.html";
      console.log(dataCart.length);
  }
  closeCart();
function grandTotal()
 {
   let grandPrice=document.querySelector(".grand-price");
   let itemPri= dataCart.map((item)=>
  {
    return item.price;
  });
  let totalPri=itemPri.reduce((total,ele)=>{
       return total +ele;
  })
     grandPrice.innerHTML=totalPri+"$";
}
function numPro()
  {
    let numPro=document.querySelector(".num-pro");
    if(dataCart.length>=1)
      {numPro.innerHTML=dataCart.length;}
    else{ numPro.style.display="none";}
  }
 numPro();
$(document).ready(function(){

  $("")
});