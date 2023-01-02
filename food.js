//Changing like for grills
const grillsLike=document.getElementById('grills-like');
grillsLike.addEventListener('click',()=>{
    grillsLike.classList.toggle('like')
});

//Changing price for grills
const grillPrice=20;
const grillQuantitySelector=document.getElementById('grills-qty');

grillQuantitySelector.addEventListener('change',()=>{
    const grillQty=grillQuantitySelector.value;
    const totalGrillPrice=grillPrice*grillQty;
    const displayGrillTotalPrice=document.getElementById('grills-price');
    displayGrillTotalPrice.innerHTML=totalGrillPrice;
})

