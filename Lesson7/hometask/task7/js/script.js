//  Дано масив цін. Змінити цей масив так, що на ціни товарів, які більші за 1000 грн. дати 30% знижки.

function getDiscountGreater_1000(array) {
   const discount_30 = 0.7
   array.forEach((element, index, array) => {
      if (element > 1000) array[index] *= discount_30
   });
   return array
}

let pricesList = [500, 1200, 1500, 840, 450, 2000, 900]
console.log(pricesList);

pricesList = getDiscountGreater_1000(pricesList)
console.log(pricesList);

