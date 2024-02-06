export {onload};

 

function onload() {
   
   // to select all the children of a "hero-heading"
  
 let t = gsap.timeline( {defaults : {ease: "SlowMo.easeOut"}});

 
 t.to(
   ".shopNow-btn button",
   {
      x:"0%",
      duration:0.2,
      
   }
 )







}