//* Create an algorithm that reads a collection of 15 values, one at a time, followed by a code of 1 or 2. The value represents the amount of guinea-pigs used in one of each 15 experiments made, and codes 1 - 2 represents respectively rabbits and rats. Show in the end, the total amount of guinea-pigs used, the total amount of rabbits, rats, and their percentual.

function RandomInt(min, max){
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const experiments = new Array(15).fill(0).map(() => {return {code: RandomInt(1, 2), value: RandomInt(1, 10)}});

function ratio(partial, total){return (partial / total * 100).toFixed(2)}

let totalRabbits = 0;
let totalRats    = 0;
let totalGuinea  = 0;

function calculateGuinea(){
  for (let i = 0; i < experiments.length; i++){
    if (experiments[i].code == 1) totalRabbits += experiments[i].value;
    if (experiments[i].code == 2) totalRats    += experiments[i].value; 
  } totalGuinea = totalRabbits + totalRats;

  console.log(`
  Rabbits: ${totalRabbits} (${ratio(totalRabbits, totalGuinea)}%)
  Rats:    ${totalRats} (${ratio(totalRats, totalGuinea)}%)
  Total:   ${totalGuinea}
  `);
}

calculateGuinea();


