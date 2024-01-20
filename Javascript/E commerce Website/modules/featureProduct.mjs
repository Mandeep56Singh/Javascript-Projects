
export async function displayFeatureProduct() {



  const requestURL = "https://fakestoreapi.com/products";
  const request = new Request(requestURL);
  const response = await fetch(request);
  const data = await response.json();

  const productSection = document.querySelector(".products");

  // just for testing
  console.log(data);


  //  api names for products sucks , hence we create array to name products
  const productNames = [
    "Fjallraven Backpack",
    "Mens Slim T-Shirts",
    "Mens Cotton Jacket",
    "Mens Slim Fit",
    "Silver Dragon Bracelet",
    "Gold Diamond Ring",
    "Rose Gold Earrings",
    'Pierced Owl Rose Gold Double',
    "WD 2TB Hard Drive",
    "SanDisk 1TB SSD",
    "Silicon Power 256GB SSD",
    "WD 4TB Gaming Drive",
    "Acer 21.5-inch IPS Monitor",
    "Samsung 49-Inch Curved Monitor",
    "Women's Snowboard Jacket",
    "Women's Moto Jacket",
    "Rain Jacket Women Raincoats",
    "MBJ Women's Boat Neck",
    "Opna Women's Moisture-Wicking",
    "DANVOUY Women's Casual Tee",
  ];


  const setPropertyValue = function setter(i, ProperyValue) {
    // using  productNames for shorter names 
    if (ProperyValue === "title") {
      return productNames[i];
    }

    // To Prepend the dollar sign in price
    else if (ProperyValue === "price") {
      return "$" + data[i].price;
    }


    // Assigning ratings is challenging due to nested objects in the "rating" property of the JSON objects, making it complex to pass as a parameter and resulting in undefined values.hence do the under

    else if (ProperyValue === "rating") {
      return data[i].rating.rate;
    }
    else if (ProperyValue === "image") {
      return data[i].image;
    }


  }
  
  // function to make stars
  const stars = function(product,i,rate)  {    

   const starContainer = document.createElement("div");
   starContainer.className = "rating";
   starContainer.id = "rating" + (i+1);

   const stars = document.createElement("div");
   stars.className = "starContainer";
   stars.id = "star" + (i+1);


  // creating grey stars 
 let totalRate = Math.round(rate * 2) / 2;
  for(let i = 0 ; i < 5; i++) {
    
    const star = document.createElement("i");
    star.id = "bx" + (i+1);

    if(totalRate  >= 1 ) {
    star.className = "bx bxs-star";
    star.style.color = "yellow";
    
    }
    else if ( totalRate > 0 && totalRate < 1){
     
      // select that value which is nearest , eg 0.7 nearest to 0.5 ,0.8 nearest to 1
      
      if(totalRate <= 0.25) {
        star.className = "bx bxs-star";
        // star.style.color = "grey";
      }
      else if ( totalRate <= 0.5) {
        star.className = "bx bxs-star-half";
        star.style.color = "yellow";
      }
      else if ( totalRate >= 0.75) {
        star.className = "bx bxs-star";
        star.style.color = "yellow"
      }


  

    }
    else {
     
      star.className = "bx bxs-star";
      star.style.color = "grey";
    }
    totalRate = totalRate - 1;
    
    stars.appendChild(star);
  }
  totalRate = null;


 



  



  

  starContainer.appendChild(stars);
  product.appendChild(starContainer);
  productSection.appendChild(product);


  }


 
  function CreateProductProperties(product, i, element, className, id, subElement, subElementProperty, ProperyValue,) {
    let Element = document.createElement(element);

    Element.className = className;
    Element.id = id + (i+1);

    let SubElement = document.createElement(subElement);

    SubElement[String(subElementProperty)]
      = setPropertyValue(i, ProperyValue);

    Element.appendChild(SubElement);
    product.appendChild(Element);
    productSection.appendChild(product);
  }

  for (let i = 0; i < data.length; i++) {

    //  create wrapper for product
    let product = document.createElement("div");

    //set attributes 
    product.id = "product" + (i + 1);
    product.className = "product";

 
    // images
    CreateProductProperties(product, i, "div", "image", "img", "img", "src", "image");


    // title
    // api names are too long , hence we will use array for that 
    CreateProductProperties(product, i, "div", "title", "title", "p", "innerText", "title");


    // rating

    stars(product,i,data[i].rating.rate);
    console.log(stars);

    // price 
    CreateProductProperties(product, i, "div", "pricing", "productPrice", "h4", "innerText", "price");


  }
 
}