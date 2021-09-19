const sides = document.querySelectorAll('.side-input');
const calculateBtn = document.querySelector('#calculate-area-btn');
const outputEl = document.querySelector('.output');

function calculateAreaOfTriangle(base, height) {
    const areaOfTriangle = (base*base + height*height)*0.5;
    return areaOfTriangle;
} 

function calculateAreaOfTriangle() {

    const areaOfTriangle = calculateAreaOfTriangle(Number(sides[0].value), Number(sides[1].value));
    const area = areaOfTriangle;
    outputEl.innerText = "The area of triangle is " + area;
}

calculateBtn.addEventListener('click', calculateAreaOfTriangle);