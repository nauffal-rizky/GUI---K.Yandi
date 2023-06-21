// PERSONAL DATA
let students = [];

const mainPage = document.querySelector('.mainPage');
const userCheck = document.querySelector('.userCheck');
const startBtn = document.querySelector('.startBtn');
startBtn.addEventListener('click', () => {
  userCheck.classList.add('show-page');
  mainPage.classList.remove('show-page');
});

// USER CHECK FORM
const ageSlide = document.querySelector('.age-slide');
const ageOption = ageSlide.querySelector('.option');
const ageDropdownBtn = document.querySelector('.age-slide #dropdownBtn');
ageDropdownBtn.addEventListener('click', () => {
  if (ageOption.getBoundingClientRect().height === 0) {
    ageOption.style.height = '112px';
  } else {
    ageOption.style.height = 0;
  }
});

// age answer
const ageAnswer = ageOption.querySelectorAll('span');
ageAnswer.forEach((answer) => {
  answer.addEventListener('click', () => {
    const answerValue = answer.innerText;
    console.log(answerValue);

    const showAnswer = document.createElement('div');
    showAnswer.innerHTML = `
      <i class="fa-solid fa-circle-xmark cancelBtn"></i>
      <span id="ageAnswer" >${answerValue}</span>
    `;

    const titleContain = ageSlide.querySelector('.title-contain');
    if (!ageSlide.classList.contains('show-answer')) {
      ageSlide.classList.add('show-answer');

      titleContain.appendChild(showAnswer);
      ageOption.style.height = 0;

      const cancelBtn = showAnswer.querySelector('.cancelBtn');
      cancelBtn.addEventListener('click', () => {
        ageSlide.classList.remove('show-answer');
        titleContain.removeChild(showAnswer);
        ageOption.style.height = 0;
      });
    }
  });
});

const eduSlide = document.querySelector('.edu-slide');
const eduOption = eduSlide.querySelector('.option');
const eduDropdownBtn = document.querySelector('.edu-slide #dropdownBtn');
eduDropdownBtn.addEventListener('click', () => {
  if (eduOption.getBoundingClientRect().height === 0) {
    eduOption.style.height = '112px';
  } else {
    eduOption.style.height = 0;
  }
});

// education answer
const eduAnswer = eduOption.querySelectorAll('span');
eduAnswer.forEach((answer) => {
  answer.addEventListener('click', () => {
    const showAnswer = document.createElement('div');
    showAnswer.innerHTML = `
      <i class="fa-solid fa-circle-xmark cancelBtn"></i>
      <span id="eduAnswer" >${answer.innerText}</span>
    `;

    const titleContain = eduSlide.querySelector('.title-contain');
    if (!eduSlide.classList.contains('show-answer')) {
      eduSlide.classList.add('show-answer');

      titleContain.appendChild(showAnswer);
      eduOption.style.height = 0;

      const cancelBtn = showAnswer.querySelector('.cancelBtn');
      cancelBtn.addEventListener('click', () => {
        eduSlide.classList.remove('show-answer');
        titleContain.removeChild(showAnswer);
        eduOption.style.height = 0;
      });
    }
  });
});

const submitBtn = document.querySelector('.submitBtn');
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('ageAnswer').value;
  const edu = document.getElementById('eduAnswer').value;

  students.push();
});
