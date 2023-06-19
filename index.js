const mainPage = document.querySelector('.mainPage');
const userCheck = document.querySelector('.userCheck');
const questionPage = document.querySelector('.questionPage');
const startBtn = document.querySelector('.startBtn');
startBtn.addEventListener('click', () => {
  userCheck.classList.add('show-page');
  mainPage.classList.remove('show-page');
});

// USER CHECK FORM
const ageSlide = document.querySelector('.age-slide .option');
const ageDropdownBtn = document.querySelector('.age-slide #dropdownBtn');
console.log(ageDropdownBtn);
ageDropdownBtn.addEventListener('click', () => {
  if (ageSlide.getBoundingClientRect().height === 0) {
    ageSlide.style.height = '112px';
  } else {
    ageSlide.style.height = 0;
  }
});

const ageAnswer = ageSlide.querySelectorAll('span');
ageAnswer.forEach((answer) => {
  answer.addEventListener('click', () => {
    console.log(answer.innerText);
  });
});

const eduSlide = document.querySelector('.edu-slide .option');
const eduDropdownBtn = document.querySelector('.edu-slide #dropdownBtn');
eduDropdownBtn.addEventListener('click', () => {
  if (eduSlide.getBoundingClientRect().height === 0) {
    eduSlide.style.height = '112px';
  } else {
    eduSlide.style.height = 0;
  }
});

const eduAnswer = eduSlide.querySelectorAll('span');
eduAnswer.forEach((answer) => {
  answer.addEventListener('click', () => {
    console.log(answer.innerText);
  });
});

const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', () => {});
