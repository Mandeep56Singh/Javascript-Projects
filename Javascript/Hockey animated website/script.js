
let cursor = document.querySelector(".cursor");
let blur = document.querySelector(".cursor-blur");
document.addEventListener("mousemove",function(value){
  cursor.style.left = value.x + "px";
  cursor.style.top = value.y   + "px"
  blur.style.left = value.x - 130 + "px";
  blur.style.top = value.y - 130 + "px";
})



gsap.to("header", {
  backgroundColor: "#000",
  height : "100px",
  duration: 0.5,
   scrollTrigger: {
    trigger:"header",
    scroller:"body",
    // markers : true,
    start: "top -10%",
    end: "top -11%",
    scrub : 2
   }
})
gsap.to(".scroller", {
   backgroundColor : "#000",
   scrollTrigger: {
    trigger: ".hero",
    scroller:"body",
    // markers:true,
    start: "top -25%",
    end: "top -70% ",
    scrub:2
   }
})
// gsap.to(".aboutUs" ,{
//   backgroundColor: "#000",
//   scrollTrigger: {
//     trigger:".scroller",
//     scroller:"body",
//     start:"top -15%",
//     end:"top -10%",
//     scrub:2
//   }
// })
