import obj from "../JSON/limitedDeal.json" assert { type: "json" };
export function loaderForLimitedDeals() {
  let i = 0;
  const deals_container = document.querySelector(".deals-container");

  for (let i = 0; i < obj.length; i++) {
    createLimitedDealProduct();

    function createLimitedDealProduct() {
      let deals = document.createElement("div");
      deals.className = "deal";
      deals.id = `deal${i}`;
      const dealsHtmlStirng = `
      <div class="price">
           <p>$${obj[i].price.original}</p>
           <p>$${obj[i].price.discount}</p>
        </div>
      <div class="ProductImage">
        <div class="image">
           <img src= "${obj[i].image}" alt="bagImage"
              height = "${obj[i].height}" width = "${obj[i].width}">
        </div>
        
     </div>
     <div class="time-stock">
        <div class="timeRemain">
           <h2>Deals Ends in </h2>
           <div class="time">
              <div class="timeleft">
                 <input type="text" name="" id="days">
                 <label for="days">days</label>
              </div>
              <div class="timeleft">
                 <input type="text" name="" id="hours">
                 <label for="hours">hours</label>
              </div>
              <div class="timeleft">
                 <input type="text" name="" id="minutes">
                 <label for="minutes">min</label>
              </div>
              <div class="timeleft">
                 <input type="text" name="" id="seconds">
                 <label for="seconds">sec</label>
              </div>
           </div>
        </div>
        <div class="stockLeft">
           <h4> Only ${obj[i].stock}  Stock left !  </h4>
        </div>
        <div class="shopNow-Btn">
           <button> shop now </button>
        </div>
     </div>
     </div>`;

      deals.innerHTML = dealsHtmlStirng;
      deals_container.appendChild(deals);

      //  change color According to product

      const deal = document.querySelector(`#deal${i}`);
      // deal.style.backgroundImage = `url(${obj[i].color})`;
      const inputs = deal.querySelectorAll("input");

      // to disable all the inputing for input
      for (let input of inputs) {
        input.disabled = true;
      }

      function countDown() {
        const now = new Date();

        let endDate = new Date();
        endDate.setDate(now.getDate() + obj[i].salesDays);

        endDate = endDate.toISOString().slice(0, 10);

        const end = new Date(endDate);
        const diff = (end - now) / 1000;

        if (diff < 0) {
          const parent = document.querySelector(".timeRemain");
          parent.classList.remove("time");
          parent.classList.add("timeExpired");

          const htmlString = `
          <h1 class = "expiredHeading"> This deals has ended </h1>
          `;
          const timeExpired = document.querySelector(".timeExpired");
          timeExpired.innerHTML = htmlString;
        }

        inputs[0].value = Math.floor(diff / 3600 / 24);
        inputs[1].value = Math.floor(diff / 3600) % 24;
        inputs[2].value = Math.floor(diff / 60) % 60;
        inputs[3].value = Math.floor(diff) % 60;
      }

      setInterval(countDown, 1000);
    }
  }

  const slider = document.querySelector(".deals-container");
  const heading = document.querySelectorAll(".limited-timeDeals .heading h1");
  const deals = gsap.utils.toArray(".deal");
  const circles = gsap.utils.toArray(".limited-timeDeals .price");

  gsap.registerPlugin(ScrollTrigger, { performance: true });
  let tl = gsap.timeline({
    defaults: {
      ease: "none",
    },
    scrollTrigger: {
      trigger: ".limited-timeDeals ",
      pin: true,
      scrub: 2,
      end: () => "+=" + slider.offsetWidth,
    },
  });

  tl.to(slider, {
    xPercent: -63,
  });


    tl.
       from(deals[0].querySelector(".price"), {
         x:"-100%",
         y:"-100%",
         opacity: 0,
         scrollTrigger: {
          trigger: ".limited-timeDeals .deal",
          start: "top bottom",
          end: "center center",
          scrub: 1,
        },
       });

     
       console.log(`Slider's Width : ${slider.offsetWidth}px`);
       
      for (let i = 0; i < deals.length; i++) {
        const left = deals[i].getBoundingClientRect().left;
        console.log(`width of deals${i} : ${deals[i].offsetWidth}px and extra space is ${window.getComputedStyle(deals[i]).marginLeft } and left is ${left}  and top`);
      }


    




  // let scrollTween = gsap.to(deals, {
  //   xPercent: -100 * (deals.length - 1),
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".limited-timeDeals ",
  //     pin: true,
  //     scrub: 2,

  //     end: "+=4000",
  //   },
  // });

 
  gsap.to(heading, {
    y: "0%",
    delay: 0.5,
    scrollTrigger: {
      trigger: ".limited-timeDeals .heading h1",
      start: "top 80%",
      end: "bottom 80%",
      scrub: 1,
    },
  });

  const price = document.querySelectorAll(".limited-timeDeals .price");
}
