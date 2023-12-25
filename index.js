let menu = document.querySelector('.hamburger')
// menu.addEventListener('click', show)

// function show() {
//     console.log('why')
// }

menu.addEventListener('click', () => {
    // console.log('check in')
    document.querySelector('.navigation').classList.toggle('active')
})




let intro = document.querySelector ('#intro')

intro.addEventListener ('click', introduction);

function introduction() {
    document.querySelector('#intro-attribute').classList.toggle('active')
}

let text = document.querySelector ('#text')

text.addEventListener ('click', textFormat);

function textFormat() {
    document.querySelector('#text-formatting').classList.toggle('active')
}

let image = document.querySelector ('#images')

image.addEventListener ('click', imageAttribute);

function imageAttribute() {
    document.querySelector('#image-attribute').classList.toggle('active')
}

let anchorMe = document.querySelector ('#anchor')

anchorMe.addEventListener ('click', anchorAttribute);

function anchorAttribute() {
    document.querySelector('#anchor-attr').classList.toggle('active')
}

let listMe = document.querySelector ('#list')
list.addEventListener ('click', listAttribute);
function listAttribute() {
    document.querySelector('#list-attribute').classList.toggle('active')
}

let frameMe = document.querySelector ('#frame')
frameMe.addEventListener ('click', frameAttributes);
function frameAttributes() {
    document.querySelector('#frame-attributes').classList.toggle('active')
}

let tableMe = document.querySelector ('#table')
tableMe.addEventListener ('click', tableAttributes);
function tableAttributes() {
    document.querySelector('#table-attributes').classList.toggle('active')
}

let formMe = document.querySelector ('#form')
formMe.addEventListener ('click', formAttributes);
function formAttributes() {
    document.querySelector('#form-attributes').classList.toggle('active')
}




// menu.addEventListener('click', () => {
//     console.log('Menu clicked!');
// })

// menu.addEventListener('click', () => {
//     // Code to be executed when the menu is clicked
//     console.log('Menu clicked');
//     console.log('yusuf')
//     // Add your code here
// })






