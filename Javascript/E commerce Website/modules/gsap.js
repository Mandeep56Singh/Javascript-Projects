function gsapAnimate () {

      gsapHero();

}

function gsapHero() {


    // animating LoadingOverlay 
    
    gsap.to('LoadOverlay',2, {
        delay:1,
        top:"-100%",
        ease:Expo.easeInOut,
    })
    let t = gsap.timeline( {defaults : {ease: "SlowMo.easeOut"}});

    t.to ( 
      "#span-heading", 
      {
        y:'0%',
        stagger: 0.2,
        duration: 0.7,
        
      } 
    );
    t.to(
      ".shopNow-btn button",
      {
         x:"0%",
         duration:0.2,
         
      }
    )
}