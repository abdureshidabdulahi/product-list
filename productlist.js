let addToCart = function(){

     let button = document.querySelector('.image1 button');
     button.addEventListener('click', ()=>{
          if(!button.classList.contains('buttons')){
               let order = 1;
               button.classList.add('buttons')
               document.querySelector('.add').innerHTML = order
          }
         
     })
}
addToCart();
let order = 1;
let incrementFunction = function(){
     
     order++
      document.querySelector('.add').innerHTML = order

} 
document.querySelector('.plus').addEventListener('click', incrementFunction)
let decrementFunction = function(){
     if(order>0){
          order--
     }
     document.querySelector('.add').innerHTML = order;
     

}
document.querySelector('.minus').addEventListener('click', decrementFunction)




 