function celciusToFahrenheit (num) {
  return 9/5 * num + 32
}
function celciusToKelvin (num) {
  return 273 + num
}
function celciusToReamur (num) {
  return 4/5 * num
}
const celcius = 70
const p1 = document.querySelectorAll('p')
const spanF = p1[0].querySelector('span')
const spanK = p1[1].querySelector('span')
const spanR = p1[2].querySelector('span')
spanF.textContent = celciusToFahrenheit(celcius)
spanK.textContent = celciusToKelvin(celcius)
spanR.textContent = celciusToReamur(celcius)
// p1.textContent += celciusToFahrenheit(70)
// const p2 = document.getElementsByTagName('p').item(1)
// p2.textContent += celciusToKelvin(70)
// const p3 = document.getElementsByTagName('p').item(2)
// p3.textContent += celciusToReamur(70)