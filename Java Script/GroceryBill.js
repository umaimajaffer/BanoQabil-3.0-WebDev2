//GROCERY BILL
const calculate = () => {
const items = [
      { name: 'quinoaQty', price: 5 },
    { name: 'lentilsQty', price: 4 },
      { name: 'organicChickenQty', price: 10 },
      { name: 'almondMilkQty', price: 6 },
      { name: 'avocadoQty', price: 3 }
    ];
  
    let total = 0;
  
    items.forEach(item => {
      const qty = document.querySelector(`input[name="${item.name}"]`).value;
       total += qty * item.price;
  });
  
    document.querySelector("#total").innerHTML = `$${total.toFixed(2)}`;
  };
  
  document.querySelector("button").addEventListener("click", calculate);
