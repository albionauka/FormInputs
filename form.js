
let outputName = document.getElementById('outputName');
let outputNumber = document.getElementById('outputNumber');
let outputPassword = document.getElementById('outputPassword');
let outputDate = document.getElementById('outputDate');

const formtosubmit = document.getElementById('form');
formtosubmit.addEventListener('submit', logSubmit);

function logSubmit(event) {
    event.preventDefault();
    console.log('event', event.target.name.value);
    outputName.innerHTML = event.target.name.value;
    outputNumber.innerHTML = event.target.number.value;
    outputPassword.innerHTML  = event.target.password.value;
    outputDate.innerHTML = event.target.date.value;


}
