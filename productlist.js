let addToCart = function(){

     let button = document.querySelector('.image1 button');
     button.addEventListener('click', ()=>{
          if(!button.classList.contains('buttons')){
               button.classList.add('buttons')
               document.querySelector('.add').innerHTML = '1'
          }
         
     })
}
addToCart();
document.querySelector('.plu-min').addEventListener('click', incrementFunction)
let incrementFunction = function(){
     let order = 1;
     order++
      document.querySelector('.add').innerHTML = 'order'

} 






// button.classList.toggle('buttons');
// button.classList.toggle('plu-min');
// add.classList.toggle('buttons');
// shopingCart.classList.toggle('buttons')