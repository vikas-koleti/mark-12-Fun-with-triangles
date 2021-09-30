const sides = document.querySelectorAll('.side-input');
const hypotenuseBtn = document.querySelector('#hypotenuse-btn');
const hypotenuseOutput = document.querySelector('#hypotenuse-output');
function calculateSumOfSquares(a, b) {
    if (Number(sides[0].value) > 0 && Number(sides[1].value) > 0) {
        const sumOfSquares = a * a + b * b;
        return sumOfSquares;
    }else{
        output.innerText = "Lengths can't be negative."
    }
}

function calculateHypotenuse() {
	//c = sqrt(a^2 + b^2)
	const sumOfSquares = calculateSumOfSquares(sides[0].value, sides[1].value);
	console.log(sumOfSquares);
	const lengthOfHypotenuse = Math.sqrt(sumOfSquares);
	console.log(lengthOfHypotenuse);
	hypotenuseOutput.innerText = `The length of the hypotenuse is ${lengthOfHypotenuse} cm`;
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);