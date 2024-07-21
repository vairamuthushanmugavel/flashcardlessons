import section1 from "./Lessons/section1.js";
import section2 from "./Lessons/section2.js";


const sections = { section1, section2 }

/**
 * identifier elements
 */

const sectionEle = document.querySelector('.sectiondropdown');
const unitEle = document.querySelector('.unitdropdown');
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

sectionEle.addEventListener('change',function(){
    let options = '';
    let selectedSection = sections[sectionEle.value];
    let unitsList = Object.keys(selectedSection);
    for(let unit of unitsList){
        options += `<option>${unit}</option>`
    }
    unitEle.innerHTML = options;
})



function getWord() {
    cardEle.classList.remove('card--rotate');
    let selectedSection = sections[sectionEle.value];
    let selectedUnit = selectedSection[unitEle.value];

    let keys = Object.keys(selectedUnit);
    let randomKeyId = Math.floor(Math.random() * (keys.length - 1));
    let randomKey = keys[randomKeyId]

    let randomValue = selectedUnit[randomKey];

    cardFront.textContent = toggle.checked ? randomKey : randomValue;
    cardBack.textContent =  toggle.checked ? randomValue : randomKey;



}

document.addEventListener('keydown', function(event){
    let key = event.key;
    let keyCode = event.keyCode;

    if(key === 'ArrowRight' || key === 'ArrowLeft'){
        getWord();
    }
    if(keyCode === 32){
        cardEle.classList.toggle('card--rotate');
    }
})

function setUp() {

    /**
     * populate drop down.
     */

    let options = '<option>--<option>';
    for (let key in sections) {
        options += `<option>${key}</options>`
    }
    sectionEle.innerHTML = options
}

setUp();