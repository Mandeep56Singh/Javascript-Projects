export {onload};

 

function onload() {
   
   // to select all the children of a "hero-heading"
  
 let t = gsap.timeline( {defaults : {ease: "SlowMo.easeOut"}});
 t.to ( 
   "#span-heading", 
   {
     y:'0%',
     stagger: 0.2,
     duration: 0.7,
     delay:1
     
   } 
 );
 gsap.from(".img-container img", {
   duration:1,
   scale:0,
   ease:'elastic.out(1,1)',
   delay:2
 })
 t.to(
   ".shopNow-btn button",
   {
      x:"0%",
      duration:0.2,
      
   }
 )

//  animating overlay 



}