var t = gsap.timeline();
 gsap.to("section .bg", {
    scale:1.5,
    scrollTrigger: {
        trigger:"section bg",
        scroller:"body",
        start:"top ",
     
        scrub:1
    },

 })
 gsap.to("section .man", {
    scale:0.5,
    
    scrollTrigger: {
        trigger:"section man",
        scroller:"body",
        start:"top ",
       
        scrub:1
    },
 })


gsap.to(" section .left", {
   
    x:-800,
    duration:1,
    opacity:0.5,
    scrollTrigger: {
        trigger:"section .left",
        scroller:"body",
        start:"top ",
       
        scrub:1
    },
    
    
})
gsap.to(" section .right", {
   
    x:800,
    duration:1,
    opacity:0.5,
    scrollTrigger: {
        trigger:"section .right",
        scroller:"body",
        start:"top",

        scrub:2
        
    },
    
})
gsap.to(".cloud-left", {
    x:200,
    scrollTrigger: {
        trigger:".cloud-left",
        scroller:"body",
        start:"top",

        scrub:1,
    },
})
gsap.to(".cloud-right", {
    x:-200,
    scrollTrigger: {
        trigger:".cloud-right",
        scroller:"body",
        start:"top",
     
        scrub:1,
    },
})
gsap.to("#text", {
    y:300,
    
    scrollTrigger: {
        trigger:"#text",
        scroller:"body",
        start:"top",
        scrub:2,

    }


})