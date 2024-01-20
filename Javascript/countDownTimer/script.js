const endDate = "16 January 2024 10:48 PM";

document.querySelector(".end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
console.log(inputs)

function clock () {

    const now = new Date();
    const end = new Date(endDate);
    const diff = (end - now)/1000;

    if(diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 /24);
    inputs[1].value = Math.floor(diff / 3600) % 24;
    inputs[2].value = Math.floor(diff/ 60) % 60;
    inputs[3].value = Math.floor(diff) % 60;
}


setInterval(
    clock
, 1000);