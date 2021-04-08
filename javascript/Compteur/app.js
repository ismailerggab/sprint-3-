let toInt = -span.innerText;
console.log(typeof(toInt))

add.addEventListener('click', () => {
    toInt = toInt + 1
    span.innerText = toInt;
})

hayad.addEventListener('click', () => {
    toInt = toInt - 1
    span.innerText = toInt;
})
console.log(hayad)

reset.addEventListener('click', () => {
    toInt = 0
    span.innerText = toInt;
})
console.log(reset)
