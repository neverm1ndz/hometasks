//  Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
// за весь рік;
// у першій половині року;
// у другій половині року;
// за літо;
// за ІІ квартал;
// за парні місяці (з парними номерами);
// за місяці, які є початковими у сезоні (весна, літо, осінь, зима).

const paymentList = [600, 870, 640, 530, 940, 1200, 430, 860, 1320, 764, 932, 550]

function getPaymentForPeriod(paymentList, startMonth, endMonth) {
   let paymentSum = 0
   for (let i = startMonth - 1; i < endMonth; i++) {
      paymentSum += paymentList[i]
   }
   return paymentSum
}

function getPaymentForEvenMonths(monthsNumber) {
   let paymentSum = 0
   for (let i = 1; i < monthsNumber.length; i++) {
      if (i % 2 !== 0)
         paymentSum += monthsNumber[i]
   }
   return paymentSum
}

function getPaymentForAnyMonths(monthsNumber, ...numbers) {
   let paymentSum = 0
   for (let i = 0; i < numbers.length; i++) {
      paymentSum += monthsNumber[numbers[i] - 1]
   }
   return paymentSum
}

const paymentForYear = getPaymentForPeriod(paymentList, 1, 12)
const paymentForFirstHalf = getPaymentForPeriod(paymentList, 1, 6)
const paymentForSecondHalf = getPaymentForPeriod(paymentList, 7, 12)
const paymentForSummer = getPaymentForPeriod(paymentList, 6, 8)
const paymentForSecondSeason = getPaymentForPeriod(paymentList, 3, 5)
const paymentForEvenMonths = getPaymentForEvenMonths(paymentList)
const paymentForAnyMonths = getPaymentForAnyMonths(paymentList, 3, 6, 9, 12)

document.write(`
Сумарна кількість грошей за рік - ${paymentForYear}<br>
Сумарна кількість грошей за першу половину року - ${paymentForFirstHalf}<br>
Сумарна кількість грошей за другу половину року - ${paymentForSecondHalf}<br>
Сумарна кількість грошей за літо - ${paymentForSummer}<br>
Сумарна кількість грошей за II квартал - ${paymentForSecondSeason}<br>
Сумарна кількість грошей за парні місяці - ${paymentForEvenMonths}<br>
Сумарна кількість грошей за початкові місяці у сезоні - ${paymentForAnyMonths}
<br>
`)