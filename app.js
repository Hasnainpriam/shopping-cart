function productNumber(isAdd,product,cost){
  const productInput=document.getElementById(product+'-number');
  let productNumberText=productInput.value;
  if(isAdd ==true){
    productNumberText=parseInt(productNumberText) + 1;  
   }
  else if(productInput.value > 0){
    productNumberText=parseInt(productNumberText) - 1;  
   }
   productInput.value = productNumberText;
   const quantity=document.getElementById(product+'-number').value;
   const price=parseInt(quantity) * cost;
   const productTotal=document.getElementById(product+'-total');
   productTotal.innerText=price;
  // console.log(caseTotalAmount);
}

function totalPart(){
  const phoneTotal=document.getElementById('phone-total').innerText;
  const caseTotal=document.getElementById('case-total').innerText;
  subTotal= parseInt(phoneTotal) + parseInt(caseTotal);
  const subTotalText=document.getElementById('sub-total');
  subTotalText.innerText=subTotal;
  const taxTotalText=document.getElementById('tax-total');
  taxTotal= subTotal/10;
  taxTotalText.innerText=taxTotal;
  const allTotalText=document.getElementById('all-total');
  allTotal= subTotal + taxTotal;
  allTotalText.innerText=allTotal;
}
document.getElementById('case-plus').addEventListener('click',function(){
   productNumber(true,'case',59);
   totalPart();
})
document.getElementById('case-minus').addEventListener('click',function(){
   productNumber(false,'case',59);
   totalPart();
})
document.getElementById('phone-plus').addEventListener('click',function(){
   productNumber(true,'phone',1219);
   totalPart();
})
document.getElementById('phone-minus').addEventListener('click',function(){
   productNumber(false,'phone',1219);
   totalPart();
})

