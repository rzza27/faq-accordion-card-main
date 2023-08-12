const faqs = document.querySelectorAll('.faq');
const question = document.querySelectorAll('.question');
const answer = document.querySelectorAll('.answer');
const arrow = document.querySelectorAll('.arrow');

faqs.forEach((faq, index) => {
  faq.addEventListener('click', () => {
    question[index].classList.toggle('bold');
    answer[index].classList.toggle('answer--active');
    answer[index].classList.toggle('hidden');
    arrow[index].classList.toggle('arrow--active');
  });
});

