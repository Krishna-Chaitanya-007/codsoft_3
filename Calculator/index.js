if(document.getElementById("display").value === " ") document.getElementById("display").value = " 0 ";
function inputDisplay(e){ 
  const display = document.getElementById("display");
  const val = e.target.value;

  if(val === "C") {
    display.value = "";
  } else if(val === "="){
    display.value = eval(display.value); // no extra space
  } else {
    display.value += val; // append without spaces
  }
}

const colorPicker = document.getElementById("calc-color");
const calculator = document.getElementById("calculator");

colorPicker.addEventListener("input", (e) => {
  calculator.style.backgroundColor = e.target.value; 
});
