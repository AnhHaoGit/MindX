number = document.getElementById("number")
startButton = document.getElementById("start")
pauseButton = document.getElementById("pause")
continueButton = document.getElementById("continue")
clearButton = document.getElementById("clear")
pauseButton.disabled = true
continueButton.disabled = true
clearButton.disabled = true


count = 0
let interval;
startButton.addEventListener("click", function () {
    startButton.disabled = true
    pauseButton.disabled = false
    continueButton.disabled = true
    clearButton.disabled = false
    interval = setInterval(function () {
        count = count + 1
        number.innerHTML = `<h1>${count}</h1>`
    }, 1000)
})

pauseButton.addEventListener('click', function () {
    clearInterval(interval)
    pauseButton.disabled = true
    continueButton.disabled = false
})

continueButton.addEventListener('click', function () {
    pauseButton.disabled = false
    continueButton.disabled = true
    interval = setInterval(function () {
        count = count + 1
        number.innerHTML = `<h1>${count}</h1>`

    }, 1000)
})

clearButton.addEventListener("click", function () {
    clearInterval(interval)
    number.innerHTML = `<h1>0</h1>`
    startButton.disabled = false
    pauseButton.disabled = true
    continueButton.disabled = true
    clearButton.disabled = true
    count = 0
})


