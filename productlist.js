 
let button = document.querySelectorAll('button');
 let orderTwo  = 1;
 let orderOne = 1;
 let orderThree = 1;
 let orderFour = 1;
 let orderFive = 1;
 let orderSix = 1;
 let orderSeven = 1;
 let orderEight = 1;
 let orderNine = 1;

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

          // ===================buton4=======================

          let buttonFourFunc = function(){
               button[3].addEventListener('click', ()=>{
                   if(!button[3].classList.contains('buttons')){
                        button[3].classList.add('buttons');
                        document.querySelector('.add-four').innerHTML = orderFour
                   }
               })
               }
               buttonFourFunc();
              
               document.querySelector('.plus-four').addEventListener('click', ()=>{
                   function incrementBtnFour(){
                    orderFour++ ;
                        document.querySelector('.add-four').innerHTML = orderFour
                    }
                    incrementBtnFour();
               })
              
               document.querySelector('.minus-four').addEventListener('click', ()=>{
                   function decrementBtnFour(){
                        if(orderFour > 0){
                         orderFour-- ;
                             document.querySelector('.add-four').innerHTML = orderFour
                        }
                        
                    }
                    decrementBtnFour();
               });

               // =================button5=======================
               let buttonFiveFunc = function(){
                    button[4].addEventListener('click', ()=>{
                        if(!button[4].classList.contains('buttons')){
                             button[4].classList.add('buttons');
                             document.querySelector('.add-five').innerHTML = orderFive
                        }
                    })
                    }
                    buttonFiveFunc();
                   
                    document.querySelector('.plus-five').addEventListener('click', ()=>{
                        function incrementBtnFive(){
                         orderFive++ ;
                             document.querySelector('.add-five').innerHTML = orderFive
                         }
                         incrementBtnFive();
                    })
                   
                    document.querySelector('.minus-five').addEventListener('click', ()=>{
                        function decrementBtnFive(){
                             if(orderFive > 0){
                              orderFive-- ;
                                  document.querySelector('.add-five').innerHTML = orderFive
                             }
                             
                         }
                         decrementBtnFive();
                    });
// ======================button6===========================

let buttonSixFunc = function(){
    button[5].addEventListener('click', ()=>{
        if(!button[5].classList.contains('buttons')){
             button[5].classList.add('buttons');
             document.querySelector('.add-six').innerHTML = orderSix
        }
    })
    }
    buttonSixFunc();
   
    document.querySelector('.plus-six').addEventListener('click', ()=>{
        function incrementBtnSix(){
         orderSix++ ;
             document.querySelector('.add-six').innerHTML = orderSix
         }
         incrementBtnSix();
    })
   
    document.querySelector('.minus-six').addEventListener('click', ()=>{
        function decrementBtnSix(){
             if(orderSix > 0){
              orderSix-- ;
                  document.querySelector('.add-six').innerHTML = orderSix
             }
             
         }
         decrementBtnSix();
    });

// ==============button7=======================


let buttonSevenFunc = function(){
    button[6].addEventListener('click', ()=>{
        if(!button[6].classList.contains('buttons')){
             button[6].classList.add('buttons');
             document.querySelector('.add-seven').innerHTML = orderSeven
        }
    })
    }
    buttonSevenFunc();
   
    document.querySelector('.plus-seven').addEventListener('click', ()=>{
        function incrementBtnSeven(){
         orderSeven++ ;
             document.querySelector('.add-seven').innerHTML = orderSeven
         }
         incrementBtnSeven();
    })
   
    document.querySelector('.minus-seven').addEventListener('click', ()=>{
        function decrementBtnSeven(){
             if(orderSeven > 0){
              orderSeven-- ;
                  document.querySelector('.add-seven').innerHTML = orderSeven
             }
             
         }
         decrementBtnSeven();
    });

    // ================button8==================

    let buttonEightFunc = function(){
        button[7].addEventListener('click', ()=>{
            if(!button[7].classList.contains('buttons')){
                 button[7].classList.add('buttons');
                 document.querySelector('.add-eight').innerHTML = orderEight
            }
        })
        }
        buttonEightFunc();
       
        document.querySelector('.plus-eight').addEventListener('click', ()=>{
            function incrementBtnEight(){
             orderEight++ ;
                 document.querySelector('.add-eight').innerHTML = orderEight
             }
             incrementBtnEight();
        })
       
        document.querySelector('.minus-eight').addEventListener('click', ()=>{
            function decrementBtnEight(){
                 if(orderEight > 0){
                  orderEight-- ;
                      document.querySelector('.add-eight').innerHTML = orderEight
                 }
                 
             }
             decrementBtnEight();
        });

        // ===============button9==================

        let buttonNineFunc = function(){
            button[8].addEventListener('click', ()=>{
                if(!button[8].classList.contains('buttons')){
                     button[8].classList.add('buttons');
                     document.querySelector('.add-nine').innerHTML = orderNine
                }
            })
            }
            buttonNineFunc();
           
            document.querySelector('.plus-nine').addEventListener('click', ()=>{
                function incrementBtnNine(){
                 orderNine++ ;
                     document.querySelector('.add-nine').innerHTML = orderNine
                 }
                 incrementBtnNine();
            })
           
            document.querySelector('.minus-nine').addEventListener('click', ()=>{
                function decrementBtnNine(){
                     if(orderNine > 0){
                      orderNine-- ;
                          document.querySelector('.add-nine').innerHTML = orderNine
                     }
                     
                 }
                 decrementBtnNine();
            });