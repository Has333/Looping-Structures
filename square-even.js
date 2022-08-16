//* Create an algorithm that presents the square of each even number between 1 to 100.

function calculateEvenSquared(){
  let value      = 1;
  let maxValue   = 100;
  let multiplier = 2;
  
  for(value; value <= maxValue; value++){
    if(value % 2 == 0) console.log(`${value}²= ${Math.pow(value, multiplier)}`);
    else console.log(`${value}`);
}}

calculateEvenSquared();
