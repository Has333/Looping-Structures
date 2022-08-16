//* The program must stop running whenever the user inputs the value 0, otherwise it must keep registering orders, and at the end, it should present the user with the total order cost. The algorithm must read the code of the item acquired by the customer and the amount. It doesn't have to show the product and it's value, only the total cost.

//! obs. Code has to be ran on a browser console.

/*
 _________________________________________
| Code | Product | Unit Pricing (R$)     |
 -----------------------------------------
| 100  | Hotdog       | R$ 1,70          |
------------------------------------------
| 101 |  Bauru        | R$ 2,30          |
------------------------------------------
| 102 |  Bauru&Eggs   | R$ 2,60          |
------------------------------------------
| 103 |  Burger       | R$ 2,40          |
------------------------------------------
| 104 |  Cheeseburger | R$ 2,50          |
------------------------------------------
| 105 |  Soda         | R$ 1,00          |
------------------------------------------
*/

const products = [
  { code: 100, price: 1.7 },
  { code: 101, price: 2.3 },
  { code: 102, price: 2.6 },
  { code: 103, price: 2.4 },
  { code: 104, price: 2.5 },
  { code: 105, price: 1.0 },
];

function makeOrder(){
  let orderTotalCost = 0;
  let hasMoreProducts = true;

  while(hasMoreProducts){
    const inputCode = Number(prompt("Insert a product code, or 0 to finish ordering."));
    const validCode = products.some((product) => product.code == inputCode);
    const product = products.find((product) => product.code == inputCode);

    if(inputCode == 0){
      console.log(`The order will be R$ ${orderTotalCost}.`);
      hasMoreProducts = false;
      return;
    }
    
    if(!validCode){
      continue;
    }

    const productAmount = Number(prompt("How many?"));
    orderTotalCost += product.price * productAmount;
  }
}

makeOrder();
