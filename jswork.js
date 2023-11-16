// plus=document.getElementById("plus");
// h1=document.getElementsByTagName("h1")
// console.log(h1)
// h6=document.querySelectorAll("h6")
// console.log(h6)


// plus.addEventListener("click", function plus(params) {
    // var x=h1[0].innerHTML
    // console.log(x)
       
            
            // y=Number(x)+1
            // console.log(y)       

            // h1[0].innerHTML=y
            // console.log(y) 
        
            
    //         var z=h6[0].innerHTML
    //             L=Number(z)
    //             console.log(L)
    //       var T=L*y
    //       console.log(T)
    
// })

// moin=document.getElementById("moin");

// moin.addEventListener("click", function plus(params) {
//     var x=h1[0].innerHTML
//     console.log(x)
         
            
//             y=Number(x)-1
//             console.log(y) 
//             if(y>=0) {    

//             h1[0].innerHTML=y
//             console.log(y) 
          
//             var z=h6[0].innerHTML
//             L=Number(z)
//             console.log(L)
//            var T=L*y
//           console.log(T)
          
           
          
       
//         } 
        
// })
//   btn2=document.getElementById("btn2")
//   btn=document.getElementById("btn") 
//   btn.addEventListener("click", function SO() {
//     var O=h6[0].innerHTML
      
//       c=O*h1[0].innerHTML
//         console.log(c)
//         btn2.innerHTML=c
        
       
       
    
//  })







// plus2=document.getElementById("plus2");
// h2=document.getElementsByTagName("h2")
// console.log(h2)

// plus2.addEventListener("click", function plus(params) {
//     var A=h2[0].innerHTML
//     console.log(A)
       
            
//             B=Number(A)+1
//             console.log(B)       

//             h2[0].innerHTML=B
//             console.log(B) 
        
//             var z=h6[0].innerHTML
//             L=Number(z)
//             console.log(L)
//           var I=L*B
//           console.log(I)
        
    
// })

// moin2=document.getElementById("moin2");

// moin2.addEventListener("click", function plus(params) {
//     var A=h2[0].innerHTML
//     console.log(A)
       
            
//             B=Number(A)-1
//             console.log(B)       
//            if(B>=0){
//             h2[0].innerHTML=B
//             console.log(B) 
//         } 
//         var z=h6[0].innerHTML
//         L=Number(z)
//          console.log(L)
//          var I=L*B
//           console.log(I)
        
// })


// plus3=document.getElementById("plus3");
// h3=document.getElementsByTagName("h3")
// console.log(h3)

// plus3.addEventListener("click", function plus(params) {
//     var C=h3[0].innerHTML
//     console.log(C)
       
            
//             D=Number(C)+1
//             console.log(D)       

//             h3[0].innerHTML=D
//             console.log(D) 
        
//             var z=h6[0].innerHTML
//             L=Number(z)
//             console.log(L)
//           var J=L*D
//           console.log(J)
     
    
// })
// moin3=document.getElementById("moin3");

// moin3.addEventListener("click", function plus(params) {
//     var C=h3[0].innerHTML
//     console.log(C)
       
            
//             D=Number(C)-1
//             console.log(D)       
//           if(D>=0){
//             h3[0].innerHTML=D
//             console.log(D)
//         }
//         var z=h6[0].innerHTML
//         L=Number(z)
//         console.log(L)
//        var J=L*D
//        console.log(J)
// })


        
       
       
    







// LOVE=document.querySelectorAll(".LOVE")
// console.log(LOVE)
// console.log(LOVE[0])
// LOVE[0].addEventListener("click", function LOVE(){


  
// })
// // h6=document.querySelectorAll("h6")
// // var z=h6[0].innerHTML
// //     L=Number(z)
// //     console.log(L)
    
   
         

//V2
function plus(event){
console.log(event.target.parentNode.parentNode.parentNode.querySelector("h1"))
 var x=event.target.parentNode.parentNode.parentNode.querySelector("h1").innerHTML
   console.log(x)
   y=Number(x)+1
   console.log(y)       

   event.target.parentNode.parentNode.parentNode.querySelector("h1").innerHTML=y
   console.log(y)  
  console.log(event.target.parentNode.parentNode.parentNode.querySelector("h2"))
  var z=event.target.parentNode.parentNode.parentNode.querySelector("h2").innerHTML
  console.log(z)
  w=Number(z)*y
  console.log(w)
  console.log(event.target.parentNode.parentNode.parentNode.querySelector("h3"))
  event.target.parentNode.parentNode.parentNode.querySelector("h3").innerHTML=w
  console.log(event.target.parentNode.querySelector("h4"))

 S()
  
}
function moin(event){
  console.log(event.target.parentNode.parentNode.parentNode.querySelector("h1"))
   var x=event.target.parentNode.parentNode.parentNode.querySelector("h1").innerHTML
     console.log(x)
     
     y=Number(x)-1
     console.log(y) 
     if(y>=1){
     event.target.parentNode.parentNode.parentNode.querySelector("h1").innerHTML=y
     console.log(y) }      
     console.log(event.target.parentNode.parentNode.parentNode.querySelector("h2"))
  var z=event.target.parentNode.parentNode.parentNode.querySelector("h2").innerHTML
  console.log(z)
  w=Number(z)*y
  console.log(w)
  console.log(event.target.parentNode.parentNode.parentNode.querySelector("h3"))
  event.target.parentNode.parentNode.parentNode.querySelector("h3").innerHTML=w
  S()
  }
  

TO=document.getElementsByClassName("TO")
console.log(TO)

S()
function S() {
  var s=0
  console.log(TO)    
  for (let i = 0; i < TO.length; i++) {
       s=s+Number(TO[i].innerHTML)
       console.log(Number(TO[i].innerHTML))
       console.log(s)   
       TOT=document.getElementById('TOT')
       console.log(TOT)
       TOT.innerHTML=s
       }
    
    
      
    
  }


  
    function LOVE(event) {
      var a=event.target.style.color
      console.log(a)
      if(event.target.style.color=='red'){
        event.target.style.color='gray'}
        else{
          event.target.style.color='red'

        }
      }

      
    