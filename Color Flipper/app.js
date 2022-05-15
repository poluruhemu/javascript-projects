const colors = ["green", "red","rgba(133,122,200)","#f15025"];
// get element references from the dom
const btn = document.getElementById('btn');
const color = document.querySelector(".color");
// adding event listener to button
btn.addEventListener('click', function(){
    // get random number between 0 - 3 colors array
    const randomNumber = Math.floor(getRandomNumber());
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});
// Generating a random number using math
function getRandomNumber(){
    return Math.random() * colors.length;
}