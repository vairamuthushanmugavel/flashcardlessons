import section2 from "./Lessons/section2.js";


const sections = { section2 }

/**
 * identifier elements
 */

const sectionEle = document.querySelector('.sectiondropdown');
const toggle = document.querySelector('.toggle');
const cardEle = document.querySelector('.card');
const prevBtn = document.querySelector('.prevBtn');
const nextBtn = document.querySelector('.nextBtn');
const cardFront = document.querySelector('.card--front');
const cardBack = document.querySelector('.card--back');

/**
 * added click event to card click event.
 */

cardEle.addEventListener('click', function () {
    cardEle.classList.toggle('card--rotate');
})

prevBtn.addEventListener('click', function () {
    getWord();
})

nextBtn.addEventListener('click', function () {
    getWord();
})



function getWord() {
    let selectedSection = sections[sectionEle.value];
    let unitsList = Object.keys(selectedSection);
    let randomUnitId = Math.floor(Math.random() * (unitsList.length - 1));
    let selectedUnit = selectedSection[unitsList[randomUnitId]];

    let keys = Object.keys(selectedUnit);
    let randomKeyId = Math.floor(Math.random() * (keys.length - 1));
    let randomKey = keys[randomKeyId]

    let randomValue = selectedUnit[randomKey];

    cardFront.textContent = toggle.checked ? randomKey : randomValue;
    cardBack.textContent =  toggle.checked ? randomValue : randomKey;



}

function setUp() {

    /**
     * populate drop down.
     */

    let options = '';
    for (let key in sections) {
        options += `<option>${key}</options>`
    }
    sectionEle.innerHTML = options
}

setUp();