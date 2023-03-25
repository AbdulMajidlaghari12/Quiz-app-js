const questionDisplay = document.querySelector('#Question');
const input1 = document.querySelector('#input1');
const input2 = document.querySelector('#input2');
const input3 = document.querySelector('#input3');
const input4 = document.querySelector('#input4');
const nextBtn = document.querySelector('#next');
const time = document.querySelector('time');
const countquiz = document.querySelector('#countquiz');
const progress = document.querySelector('progress');
const inputs = document.querySelector('.qustion-answer-section');

const questions = [
  {
    numb: 1,
    question: 'What does HTML stand for?',
    answer: 'Hyper Text Markup Language',
    options: [
      'Hyper Text Preprocessor',
      'Hyper Text Markup Language',
      'Hyper Text Multiple Language',
      'Hyper Tool Multi Language',
    ],
  },
  {
    numb: 2,
    question: 'What does CSS stand for?',
    answer: 'Cascading Style Sheet',
    options: [
      'Common Style Sheet',
      'Colorful Style Sheet',
      'Computer Style Sheet',
      'Cascading Style Sheet',
    ],
  },
  {
    numb: 3,
    question: 'What does PHP stand for?',
    answer: 'Hypertext Preprocessor',
    options: [
      'Hypertext Preprocessor',
      'Hypertext Programming',
      'Hypertext Preprogramming',
      'Hometext Preprocessor',
    ],
  },
  {
    numb: 4,
    question: 'What does SQL stand for?',
    answer: 'Structured Query Language',
    options: [
      'Stylish Question Language',
      'Stylesheet Query Language',
      'Statement Question Language',
      'Structured Query Language',
    ],
  },
  {
    numb: 5,
    question: 'What does XML stand for?',
    answer: 'eXtensible Markup Language',
    options: [
      'eXtensible Markup Language',
      'eXecutable Multiple Language',
      'eXTra Multi-Program Language',
      'eXamine Multiple Language',
    ],
  },
];

let timer = 16;
let questionIndex = 0;
const questionCount = questions.length;

function timerfunc() {
  timer--;
  if (questionIndex >= questionCount) {
    clearInterval(intervalid);
  } else if (timer === 0) {
    timer = 15;
      loadQuiz();
       resetClasses()
  }
  time.textContent = timer;
}

const intervalid = setInterval(timerfunc, 1000);

function loadQuiz() {
    timer = 16;
  const question = questions[questionIndex];
  questionDisplay.textContent = `${question.numb}) ${question.question}`;
  [input1, input2, input3, input4].forEach((input, index) => {
    input.value = question.options[index];
  });
  countquiz.textContent = `${question.numb} of ${questionCount} Question`;
  progress.max = questionCount;
  progress.value = question.numb;
  questionIndex++;
}loadQuiz();

function checkAnswer(event)
{
    console.log(event)
}

nextBtn.addEventListener('click', () =>
{
    resetClasses()
    loadQuiz()
});
inputs.addEventListener('click', (Event) =>
{
   
    if (Event.target.classList.contains('input')) {
        
        if (Event.target.value.includes(questions[questionIndex - 1].answer)) {
            Event.target.classList.add('correct')
        } else {
             Event.target.classList.add('In__correct')
        }
    }
})


function resetClasses()
{
    const input = document.querySelectorAll('input');
    input.forEach(Element =>
    {
        Element.classList.remove('correct')
        Element.classList.remove('In__correct')
    })
}

