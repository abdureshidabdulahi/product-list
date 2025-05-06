 
let button = document.querySelectorAll('button');

 let order  = 1;
 let buttonOneFunc = function(){
 button[0].addEventListener('click', ()=>{
     if(!button[0].classList.contains('buttons')){
          button[0].classList.add('buttons');
          document.querySelector('.add').innerHTML = order
     }
 })
 }
 buttonOneFunc();

 document.querySelector('.plus').addEventListener('click', ()=>{
     function increment(){
          order++ ;
          document.querySelector('.add').innerHTML = order
      }
      increment();
 })

 document.querySelector('.minus').addEventListener('click', ()=>{
     function decrement(){
          if(order > 0){
               order-- ;
               document.querySelector('.add').innerHTML = order
          }
          
      }
      decrement();
 })