import {displayFeatureProduct} from './modules/featureProduct.mjs';

import { onload } from './modules/hero.mjs';
// displayFeatureProduct();

import { loaderForLimitedDeals } from './modules/limitedDeal.mjs';
loaderForLimitedDeals();

onload();



gsap.to('.LoadOverlay',2, {
    // delay:0.5,
    top:"-150%",
    ease:Expo.easeInOut,
})




