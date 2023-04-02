/// Homepage JavaScript File
/// Here we import all the JavaScript files we need for our homepage.

import '../styles/home-page.scss'

let button = document.getElementById('btn');
let text = document.getElementById('btn-text');
let textLoad = document.getElementById('btn-load')
let spin = document.getElementById('spinner-border');

function loading() {
    spin.classList.add('spinner-border');
    textLoad.classList.toggle('home-page_content-container_payment-confirmation_btn-load-active');
    text.classList.toggle('home-page_content-container_payment-confirmation_btn-text-none');

}

button.addEventListener('click', loading);

