const initSlider = () => {
    const imageList = document.querySelector(".slider-wrapper .image-list");
    const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
    const sliderScrollbar = document.querySelector(".container .slider-scrollbar");
    const scrollbarThumb = sliderScrollbar.querySelector(".scrollbar-thumb");

    const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

     // Handle scrollbar thumb drag
    scrollbarThumb.addEventListener("mousedown", (e) => {

        // The below statement will give us the position in x-axis where we have press the mouse , This is the position when i initially clicked the scrollbar 
        const startX = e.clientX;

        // The position of scrollbarThumb form left of its parent i.e slider-scrollbar or left corner of thumb to parent
        const thumbPosition = scrollbarThumb.offsetLeft;

    //     Area left out of scrollbarThumb
        const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollbarThumb.offsetWidth;


        
        // Update thumb position on mouse move
        const handleMouseMove = (e) => {

            //  here ,  e.clinetX is the position of scrollbar after dragging  the scrollbar to new position and startX is the initiall click , i Have not released the scroller  but dragged it 
            const deltaX = e.clientX - startX;


            //after dragging the position of left corner of thumb
            const newThumbPosition = thumbPosition + deltaX;
            
            // Ensure the scrollbar thumb stays within bounds
            const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));

            // console.log(`${boundedPosition}  ${maxThumbPosition}  ${newThumbPosition}`);
            
            const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;
            
            scrollbarThumb.style.left = `${boundedPosition}px`;
            imageList.scrollLeft = scrollPosition;
        }
        // Remove event listeners on mouse up
        const handleMouseUp = () => {
            document.removeEventListener("mousemove", handleMouseMove);
            document.removeEventListener("mouseup", handleMouseUp);
        }
        // Add event listeners for drag interaction
        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    });

    

    // Functionality to scroll the images through buttons
    slideButtons.forEach(button =>  {
        button.addEventListener("click", () => {
            const direction = button.id === "prev-slide" ? -1 : 1;
            const scrollAmount = imageList.clientWidth * direction;
            imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
    });

      // Show or hide slide buttons based on scroll position
      const handleSlideButtons = () => {

        slideButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "flex";
        slideButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "flex";
    }

      // Update scrollbar thumb position based on image scroll
      const updateScrollThumbPosition = () => {
        const scrollPosition = imageList.scrollLeft;
        const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollbarThumb.offsetWidth);
        scrollbarThumb.style.left = `${thumbPosition}px`;
    }
    imageList.addEventListener("scroll", () => {
        handleSlideButtons();
        updateScrollThumbPosition();
    })

}

window.addEventListener("load",initSlider);