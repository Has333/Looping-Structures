//* Loop through 20 real values and calculate their sum using the following instructions: while(), for...of, forEach(), do...While().

function RandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//! SOLUTION 1)
function whileLoop(){
  const values = new Array(20).fill(0).map(() => {return RandomInt(10, 50)});
  let index = 0;
  let total = 0;

  while(index < values.length){
    total += values[index];
    index++;
  }
  console.log(`\nValues: ${values}\nTotal: ${total}\nMethod: while`);
}

//! SOLUTION 2)
function forOfLoop(){
  const values = new Array(20).fill(0).map(() => {return RandomInt(10, 50)});
  let total = 0;

  for(const value of values){
    total += value;
  }
  console.log(`\nValues: ${values}\nTotal: ${total}\nMethod: forOf`);
}

//! SOLUTION 3)
function forEachLoop(){
  const values = new Array(20).fill(0).map(() => {return RandomInt(10, 50)});
  let total = 0;

  values.forEach((value) => {
    total += value;
  });
  console.log(`\nValues: ${values}\nTotal: ${total}\nMethod: forEach`);
}

//! SOLUTION 4)
function doWhileLoop(){
  const values = new Array(20).fill(0).map(() => {return RandomInt(10, 50)});
  let index = 0;
  let total = 0;

  do {
    total += values[index];
    index++;
  } while (index < values.length);
  console.log(`\nValues: ${values}\nTotal: ${total}\nMethod: doWhile`);
}

whileLoop();forOfLoop();forEachLoop();doWhileLoop();



