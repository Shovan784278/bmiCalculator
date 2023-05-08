const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const calculateBtn = document.getElementById("calculateBtn");
const bmiResult = document.getElementById("bmiResult");
const compass = document.getElementById("compass");
const level = document.getElementById("level");

calculateBtn.addEventListener("click", function () {
  const weight = weightInput.value;
  const heightFeet = heightInput.value;
  const heightMeters = heightFeet * 0.3048; // convert feet to meters
  const bmi = weight / (heightMeters * heightMeters);
  bmiResult.textContent = "Your BMI is " + bmi.toFixed(2);
  

  let bmiStatus = "";
  if (bmi < 18.5) {
    bmiStatus = "Underweight";
  } else if (bmi >= 18.5 && bmi < 25) {
    bmiStatus = "Normal weight";
  } else if (bmi >= 25 && bmi < 30) {
    bmiStatus = "Overweight";
  } else if (bmi >= 30 && bmi < 35) {
    bmiStatus = "Obese Class I";
  } else if (bmi >= 35 && bmi < 40) {
    bmiStatus = "Obese Class II";
  } else {
    bmiStatus = "Obese Class III";
  }
  
bmiResult.textContent += " (" + bmiStatus + ")";
  
  

});

