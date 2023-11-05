const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");


let keyword = ""; // photo to be searched
let page = 1;
const accessKey = "ZqTkgTQD0YKfLOlOle10z3uNDRCiHtQVYRJJEf8CKXo";


async function searchImages(){
 keyword = searchBox.value;
 const requestURL = `https://api.unsplash.com/search/photos?page=${keyword}&query=${keyword}&client_id=${accessKey}&per_page=12`;

 const request = new Request(requestURL);
 const response = await fetch(request);
 const images = await response.json();

  const results = images.results;

  // Problem : if we have loaded more pages , means we are not at page 1 , then search for new images , the new images will be loaded at current page which is not 1 , so we have previous result above and new result under previous

  //solution : To solve this problem  we will use a check if page is 1 , now this will happen if we are calling searchImages() for second times which would be due to showmore button 
  if(page === 1){
searchResult.innerHTML = "";
  }
  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;
    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;

    // to access the link in new tab
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);

  })

  // To show more images
  if(keyword !== "" ){
  showMoreBtn.style.display = "block";
  } 
  else if(keyword === "") {
    const warning = "Please Enter a keyword!";
   searchBox.placeholder = warning;
   searchBox.placeholder.style.color = "Red";
    
  }
}

// adding eventListener
searchForm.addEventListener("submit",(e) => {
    e.preventDefault();
    page = 1;
    searchImages();
});

// To add show more images functionality
showMoreBtn.addEventListener("click",()=>{

    // Increase pages , so new images can be loaded
    page++;
    // now call function for page++(next page)
    searchImages();
})
