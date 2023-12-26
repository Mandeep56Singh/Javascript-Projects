
let display = document.querySelector('[input]');
let buttons = document.querySelectorAll('button');

// To make array from buttons
let buttonsArray = Array.from(buttons);

let string = '';

buttonsArray.forEach( (btn) => {
   btn.addEventListener('click', (e) =>  {
    

    // Making real button press effect 
    btn.style.boxShadow = '-0.9px -0.9px 0px  #ffffff33,0.9px 0.9px 0px #000000';
    setTimeout( () => {
     btn.style.boxShadow = '-2px -2px 3px  #ffffff33,2px 2px 3px #000000';
    },100);

    string = display.value;
    let lastChar = string.charAt(string.length - 1);
    

    // DEL functionality
    if(e.target.innerHTML == "DEL") {
        string = string.substring(0,string.length - 1);
        display.value = string;
    }
    // AC functionality
    else if (e.target.innerHTML == "AC") {
        string = '';
        display.value = string;
    }

    else if (e.target.innerHTML == '=' ) {
        
        string = eval(string);
        display.value = string;
    }
 
    // when user just press  number
   
      else {
    // for displaying in display
    string += e.target.innerHTML;
    display.value = string;
      }
    
      
   });
});


