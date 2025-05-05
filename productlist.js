let addToCart = function(){
     let button = document.querySelector('.image1 button');
     button.addEventListener('click', ()=>{
          button.classList.toggle('buttons');
          button.classList.toggle('plu-min');
          add.classList.toggle('buttons');
          shopingCart.classList.toggle('buttons')



     })
}
addToCart();
