/// Homepage JavaScript File

import '../styles/home-page.scss'

// This is the function, which replaces classes of the elemets and change the appearance of the button element.

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

