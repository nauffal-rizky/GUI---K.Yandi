const mainPage = document.querySelector('.mainPage');
const questionPage = document.querySelector('.questionPage');
const startBtn = document.querySelector('.startBtn');
startBtn.addEventListener('click', () => {
  questionPage.classList.add('show-page');
  mainPage.classList.remove('show-page');
});
