 
let button = document.querySelectorAll('button');
 let orderTwo  = 1;
 let orderOne = 1;
 let orderThree = 1;

 let buttonOneFunc = function(){
 button[0].addEventListener('click', ()=>{
     if(!button[0].classList.contains('buttons')){
          button[0].classList.add('buttons');
          document.querySelector('.add-one').innerHTML = orderOne
     }
 })
 }
 buttonOneFunc();
 
 document.querySelector('.plus-one').addEventListener('click', ()=>{
    
     function increment(){
          orderOne++ ;
          document.querySelector('.add-one').innerHTML = orderOne
      }
      increment();
 })

 document.querySelector('.minus-one').addEventListener('click', ()=>{
     // let orderOne = 1;
     function decrement(){
          if(orderOne > 0){
               orderOne-- ;
               document.querySelector('.add-one').innerHTML = orderOne
          }
          
      }
      decrement();
 })


//  ==============button2===========================

let buttonTwoFunc = function(){
     button[1].addEventListener('click', ()=>{
         if(!button[1].classList.contains('buttons')){
              button[1].classList.add('buttons');
              document.querySelector('.add-two').innerHTML = orderTwo
         }
     })
     }
     buttonTwoFunc();
    
     document.querySelector('.plus-two').addEventListener('click', ()=>{
         function incrementBtnTwo(){
          orderTwo++ ;
              document.querySelector('.add-two').innerHTML = orderTwo
          }
          incrementBtnTwo();
     })
    
     document.querySelector('.minus-two').addEventListener('click', ()=>{
         function decrementBtnTwo(){
              if(orderTwo > 0){
               orderTwo-- ;
                   document.querySelector('.add-two').innerHTML = orderTwo
              }
              
          }
          decrementBtnTwo();
     })
     
     // ==============button3=======================
     let buttonThreeFunc = function(){
          button[2].addEventListener('click', ()=>{
              if(!button[2].classList.contains('buttons')){
                   button[2].classList.add('buttons');
                   document.querySelector('.add-three').innerHTML = orderThree
              }
          })
          }
          buttonThreeFunc();
         
          document.querySelector('.plus-three').addEventListener('click', ()=>{
              function incrementBtnThree(){
               orderThree++ ;
                   document.querySelector('.add-three').innerHTML = orderThree
               }
               incrementBtnThree();
          })
         
          document.querySelector('.minus-three').addEventListener('click', ()=>{
              function decrementBtnThree(){
                   if(orderThree > 0){
                    orderThree-- ;
                        document.querySelector('.add-three').innerHTML = orderThree
                   }
                   
               }
               decrementBtnThree();
          });