 
let button = document.querySelectorAll('button');
let imageOne = document.querySelector('.imageone')
let imageTwo = document.querySelector('.imagetwo');
let imageThree = document.querySelector('.imagethree');
let imagefour = document.querySelector('.imagefour');
let imageFive = document.querySelector('.imagefive');
let imageSix = document.querySelector('.imagesix');
let imageSeven = document.querySelector('.imageseven');
let imageEight = document.querySelector('.imageeight');
let imageNine = document.querySelector('.imagenine');
 let orderTwo  = 1;
 let orderOne = 1;
 let orderThree = 1;
 let orderFour = 1;
 let orderFive = 1;
 let orderSix = 1;
 let orderSeven = 1;
 let orderEight = 1;
 let orderNine = 1;
 let total = document.querySelectorAll('.total');
 let sum = 0;
 let totalItem = document.querySelector('.total-item')

 let buttonOneFunc = function(){
 button[0].addEventListener('click', ()=>{
     if(!button[0].classList.contains('buttons')){
          button[0].classList.add('buttons');
          imageOne.classList.add('image-1');
       
     }
     document.querySelector('.add-one').innerHTML = orderOne
 })
 document.querySelector('.plus-one').addEventListener('click', ()=>{
   
    function increment(){
         orderOne++ ;
        
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
 }
 buttonOneFunc();

//  ==============button2===========================

let buttonTwoFunc = function(){
     button[1].addEventListener('click', ()=>{
         if(!button[1].classList.contains('buttons')){
              button[1].classList.add('buttons');
              imageTwo.classList.add('image-2');
         }
         document.querySelector('.add-two').innerHTML = orderTwo
     })
     document.querySelector('.plus-two').addEventListener('click', ()=>{
        function incrementBtnTwo(){
         orderTwo++ ;
             
         }
         incrementBtnTwo();
    })
    document.querySelector('.minus-two').addEventListener('click', ()=>{
        function decrementBtnTwo(){
             if(orderTwo > 0){

              orderTwo-- ;
                  
             }
             
         }
         decrementBtnTwo();
    })
     }
     buttonTwoFunc();
    
    
    
     
     
     // ==============button3=======================
     let buttonThreeFunc = function(){
          button[2].addEventListener('click', ()=>{
              if(!button[2].classList.contains('buttons')){
                   button[2].classList.add('buttons');
                   imageThree.classList.add('image-3');
 
              }
              document.querySelector('.add-three').innerHTML = orderThree
          })
          document.querySelector('.plus-three').addEventListener('click', ()=>{
            function incrementBtnThree(){
             orderThree++ ;
                 
             }
             incrementBtnThree();
        })
        document.querySelector('.minus-three').addEventListener('click', ()=>{
            function decrementBtnThree(){
                 if(orderThree > 0){
                  orderThree-- ;
                    
                 }
                 
             }
             decrementBtnThree();
        });
          }
          buttonThreeFunc();
         
         
         
         

          // ===================buton4=======================

          let buttonFourFunc = function(){
               button[3].addEventListener('click', ()=>{
                   if(!button[3].classList.contains('buttons')){
                        button[3].classList.add('buttons');
                        imagefour.classList.add('image-4');
                   }
                   document.querySelector('.add-four').innerHTML = orderFour
               })
               document.querySelector('.plus-four').addEventListener('click', ()=>{
                function incrementBtnFour(){
                 orderFour++ ;
                    
                 }
                 incrementBtnFour();
            })
            document.querySelector('.minus-four').addEventListener('click', ()=>{
                function decrementBtnFour(){
                     if(orderFour > 0){
                      orderFour-- ;
                        
                     }
                     
                 }
                 decrementBtnFour();
            });
               }
               buttonFourFunc();
              
              
              
              

               // =================button5=======================
               let buttonFiveFunc = function(){
                    button[4].addEventListener('click', ()=>{
                        if(!button[4].classList.contains('buttons')){
                             button[4].classList.add('buttons');
                             imageFive.classList.add('image-5');
                             
                        }
                        document.querySelector('.add-five').innerHTML = orderFive
                    })
                    document.querySelector('.plus-five').addEventListener('click', ()=>{
                        function incrementBtnFive(){
                         orderFive++ ;
                           
                         }
                         incrementBtnFive();
                    })
                    document.querySelector('.minus-five').addEventListener('click', ()=>{
                        function decrementBtnFive(){
                             if(orderFive > 0){
                              orderFive-- ;
                                  
                             }
                             
                         }
                         decrementBtnFive();
                    });
                    }
                    buttonFiveFunc();
                   
                    
                   
                   
// ======================button6===========================

let buttonSixFunc = function(){
    button[5].addEventListener('click', ()=>{
        if(!button[5].classList.contains('buttons')){
             button[5].classList.add('buttons');
             imageSix.classList.add('image-6');
              
        }
        document.querySelector('.add-six').innerHTML = orderSix
    })
    document.querySelector('.plus-six').addEventListener('click', ()=>{
        function incrementBtnSix(){
         orderSix++ ;
            
         }
         incrementBtnSix();
    })
    document.querySelector('.minus-six').addEventListener('click', ()=>{
        function decrementBtnSix(){
             if(orderSix > 0){
              orderSix-- ;
                 
             }
             
         }
         decrementBtnSix();
    });
    }
    buttonSixFunc();
   
   
   
    

// ==============button7=======================


let buttonSevenFunc = function(){
    button[6].addEventListener('click', ()=>{
        if(!button[6].classList.contains('buttons')){
             button[6].classList.add('buttons');
             imageSeven.classList.add('image-7');
             
        }
        document.querySelector('.add-seven').innerHTML = orderSeven
    })
    document.querySelector('.plus-seven').addEventListener('click', ()=>{
        function incrementBtnSeven(){
         orderSeven++ ;
            
         }
         incrementBtnSeven();
    })
    document.querySelector('.minus-seven').addEventListener('click', ()=>{
        function decrementBtnSeven(){
             if(orderSeven > 0){
              orderSeven-- ;
               
             }
             
         }
         decrementBtnSeven();
    });
    }
    buttonSevenFunc();
   
   
   
   

    // ================button8==================

    let buttonEightFunc = function(){
        button[7].addEventListener('click', ()=>{
            if(!button[7].classList.contains('buttons')){
                 button[7].classList.add('buttons');
                 imageEight.classList.add('image-8');
                  
            }
            document.querySelector('.add-eight').innerHTML = orderEight
        })
        document.querySelector('.plus-eight').addEventListener('click', ()=>{
            function incrementBtnEight(){
             orderEight++ ;
                
             }
             incrementBtnEight();
        })
        document.querySelector('.minus-eight').addEventListener('click', ()=>{
            function decrementBtnEight(){
                 if(orderEight > 0){
                  orderEight-- ;
                     
                 }
                 
             }
             decrementBtnEight();
        });

        }
        buttonEightFunc();
       
       
       
        
        // ===============button9==================

        let buttonNineFunc = function(){
            button[8].addEventListener('click', ()=>{
                if(!button[8].classList.contains('buttons')){
                     button[8].classList.add('buttons');
                     imageNine.classList.add('image-9');
                      
                }
                document.querySelector('.add-nine').innerHTML = orderNine
            })
            document.querySelector('.plus-nine').addEventListener('click', ()=>{
                function incrementBtnNine(){
                 orderNine++ ;
                     
                    
                 }
                 incrementBtnNine();
                 
            })
            document.querySelector('.minus-nine').addEventListener('click', ()=>{
                function decrementBtnNine(){
                     if(orderNine > 0){
                      orderNine-- ;
                          
                     }
                     
                 }
                 decrementBtnNine();
            });
            }
            buttonNineFunc();
           
           
           
           
            // ============end buttons==============

                
         