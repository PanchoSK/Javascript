console.log("Hello from JavaScript!")

let onePhonePrice = 119.95
let totalQuantityPhones = 30
let taxRate = 5

let totalPhonesValueWithoutTax = onePhonePrice * totalQuantityPhones
console.log(totalPhonesValueWithoutTax)

let taxForPhones = totalPhonesValueWithoutTax * taxRate / 100
console.log(taxForPhones)


let phonesPriceWithTax = totalPhonesValueWithoutTax + taxForPhones
console.log(phonesPriceWithTax)