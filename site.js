console.log('Hi')

const hours = new Date().getHours() // get the current hour

const isMorning = hours >= 4 && hours < 12 // is it morning?
const isAfternoon = hours >= 12 && hours < 17 // is it afternoon?
const isEvening = hours >= 17 || hours < 4 // is it evening?

if (isMorning) {
    document.querySelector('#welcome h2').textContent = 'Good Morning!'
} else if (isAfternoon) {
    document.querySelector('#welcome h2').textContent = 'Good Afernoon!'
} else if (isEvening) {
    document.querySelector('#welcome h2').textContent = 'Good Evening!'
}
