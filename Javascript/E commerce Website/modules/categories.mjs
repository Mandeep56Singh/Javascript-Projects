export function effect() {

    const targets = [
        ".clothing h1",
        ".accessories h1",
        ".shoes h1",
        ".clothing .image",
        ".accessories .image",
        ".shoes .image",
    ];
    const triggers = [
        ".clothing ",
        ".accessories",
        ".shoes",
        ".clothing .image",
        ".accessories .image",
        ".shoes .image",
    ];
    const image = document.querySelectorAll(".categories .image ");
  
    gsap.to(".categories .heading h1",{
      
        scrollTrigger : {
            trigger: ".categories .heading-wrapper",
            start: "0% 50%",
            end:"300% 70%",
            // end:"start 50%",
            scrub:4,
            // scrub:true,
            markers: true,
           
        
        },
        width:"100%",   
       
    });

   
    for(let i = 0 ; i < targets.length; i++)
    {
    
        // for images
        if(i > 2){
            let img = targets[i] + "img";
            const tl = gsap.timeline({
                defaults:{
                    ease:"Power2.easeInOut",
                }
            })
         tl.to(targets[i], {
           
           scrollTrigger: { 
            trigger:triggers[i],
            start: "0% 50%",
            end:"--headingEnd",
            scrub:2,
            },
            "--width": "0",
           }).from(targets[i] + " img", {
        
           delay:0.5,
            scrollTrigger: { 
                trigger:triggers[i],
                start: "0% 50%",
                end: "--imageEnd",
                scrub:3,
                // markers: true,
            },
            // scale:1.5,
           })
        } 
        // headings
        else {
        gsap.to(targets[i],{
            scrollTrigger : {
                trigger : triggers[i],
                start:"top 50%",
                end:"100% 80%",
                scrub:3,
           
            },
            x : "0%",
            ease:"Power2.easeInOut",
        })
    }
    }
  
 
    
}
