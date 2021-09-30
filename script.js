const angles = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const isTriangleOutput = document.querySelector('#is-triangle-output');

function calculateSumOfAngles() {
	const sumOfAngles =
		Number(angles[0].value) + Number(angles[1].value) + Number(angles[2].value);
	console.log(sumOfAngles);
	return sumOfAngles;
}

function isTriangle() {
	if (calculateSumOfAngles() === 180) {
		console.log('Yayy, the angles form a triangle');
		isTriangleOutput.innerText = 'Yayy, the angles form a triangle';
	} else {
		console.log('Oh Oh!, the angles do not form a triangle');
		isTriangleOutput.innerText = 'Oh Oh!, the angles do not form a triangle';
	}
}
isTriangleBtn.addEventListener('click', isTriangle);