
import { menuMobileView } from './modules/header.mjs';
import { onload } from './modules/hero.mjs';
import { loaderForLimitedDeals } from './modules/limitedDeal.mjs';
import { effect } from './modules/categories.mjs';

menuMobileView();
loaderForLimitedDeals();

onload();
effect()
const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

gsap.to('.LoadOverlay',2, {
    // delay:0.5,
    top:"-150%",
    ease:Expo.easeInOut,
})




