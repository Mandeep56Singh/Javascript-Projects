export function menuMobileView() {

 const menuButton = document.querySelector(
    ".menu-button"
    );
    const menu = document.querySelector(".nav ul");




 menuButton.addEventListener("click", () => {
    
 console.log("button is clicked");

    
 });
document.querySelector(".close-button").addEventListener("click", () => {
    gsap.to(menu, {
        "--lf":"-100%",
        ease: "ease.inOut",
    })
})
  
}
