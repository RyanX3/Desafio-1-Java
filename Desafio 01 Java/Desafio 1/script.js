let numberOne = prompt("Digite o primeiro número")
let numberTwo = prompt("Digite o segundo número")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

let sum = numberOne + numberTwo
let sub = numberOne - numberTwo
let div = (numberOne / numberTwo).toFixed(2)
let multi = numberOne * numberTwo
let restDiv = numberOne % numberTwo

alert(`Soma: ${sum}`)
alert(`Subtração: ${sub}`)
alert(`Divisão: ${div}`)
alert(`Multiplicação: ${multi}`)
alert(`Resto da divisão: ${restDiv}`)

if (sum % 2 == 0) {
  alert(`A soma dos dois números é par: ${sum}`)
} else {
  alert(`A soma dos dois números é impar: ${sum}`)
} if (numberOne == numberTwo) {
  alert("Os números inseridos são iguais.")
} else {
  alert("Os números inseridos são diferentes.")
}