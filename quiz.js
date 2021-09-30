const quizForm = document.querySelector('.quiz-form');
const submitBtn = document.querySelector('#submit-btn');
const scoreDiv = document.querySelector('.output');

const correctAnswers = ['90°', 'right angled','one right angle','12, 16, 20','Equilateral triangle','100°','30°','a + b + c','no',];

function calculateScore(e) {
	e.preventDefault();
	const data = new FormData(quizForm);
	let index = 0,
		score = 0;
	for (let entry of data.values()) {
		if (entry === correctAnswers[index]) {
			score++;
		}
		index++;
	}
	scoreDiv.innerText = `Your score is ${score}`;
}

submitBtn.addEventListener('click', calculateScore);