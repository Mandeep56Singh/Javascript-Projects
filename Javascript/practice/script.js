gsap.registerPlugin(ScrollTrigger);
gsap.to(".square", {
    x : 700,
    duration:3,
    scrollTrigger: ".square-1",
})

// gsap.to(".square-1", {
//     x : -700,
//     duration:3,
//     scrollTrigger: {
//         trigger: ".square-1",
//         start:"top 30%",
//         // end:"center 20%",
//         end: () => `+=${document.querySelector(".square").offsetHeight}`,
//         markers: true,
//         toggleClass:"red"
//     }
// })


gsap.to(".square-1", {
    x: -300,
    duration:3,
    scrollTrigger : {
        trigger: ".square-1",
        start:"top 60%",
        end:"top 40%",
        // toggleActions: "play     none      none             none",
        //              onEnter  onLeave   onEnterBack      onLeaveBack
        markers: true,
        toggleActions : "restart pause resume reverse ",

    }
})
