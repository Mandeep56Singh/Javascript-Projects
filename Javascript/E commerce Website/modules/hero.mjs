export {onload};

function heroAnimation() {

    // four elements in hero page
    const first = document.querySelector(".hero-element1");

    const second = document.querySelector(".hero-element2");
    const third = document.querySelector(".hero-element3");
    const forth = document.querySelector(".hero-element4");

    const state = [true,false,false,false];
    const elements = [first,second,third,forth];
    setInterval (
    () =>  {
       for(let i = 0 ; i < state.length; i++) {
          if(state[i] ) {
           const target =  elements[i%state.length + 1];
           const previous = elements[i];
          
          }
       }
    },

    5000
    );


}

 function animate1 (){
  let elementContainer = document.querySelector('.hero-animation');
  let childArray = Array.from(elementContainer.querySelectorAll("*"));

   for(let i = 0; i < childArray.length; i++) {
   childArray[i].classList.add("transition");
   console.log(childArray[i]);

   }


   childArray[0].classList.toggle(`effect${1}-${1}`);
   childArray[1].classList.toggle(`effect${1}-${2}`);
   childArray[2].classList.toggle(`effect${1}-${3}`);
   childArray[3].classList.toggle(`effect${1}-${4}`);

  
}

function onload() {
   
   // to select all the children of a "hero-heading"
  
 let t = gsap.timeline();
 t.from ( 
   ".hero-headings #main-heading1,#main-heading2,#sub-heading", 
   {
     x:-50,
     opacity : 0,
     stagger: 0.2,
     
   } 
 );
 t.from(
   ".shopNow-btn",
   {
      x:-50,
      opacity:0,
      delay:0.2,
      
   }
 )

 t.call(animate1);

}