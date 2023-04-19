/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

let button = document.getElementById('btn');
let text = document.getElementById('btn-text');
let textLoad = document.getElementById('btn-load')
let spin = document.getElementById('spinner-border');

function loading() {
    spin.classList.toggle('spinner-border');
    textLoad.classList.toggle('payment-confirmation__btn-load-active');
    text.classList.toggle('payment-confirmation__btn-text-none');

}

button.addEventListener('click', loading);

