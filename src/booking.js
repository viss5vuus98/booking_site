const steps = document.querySelectorAll('.step');
const page_1 = document.querySelector('#page1');
const page_2 = document.querySelector('#page2');
const page_3 = document.querySelector('#page3');

page_1.addEventListener('submit', (e) => {
  e.preventDefault();
  setCurrentPage(2)
})
page_2.addEventListener('submit', (e) => {
  e.preventDefault();
  setCurrentPage(3)
})

function setCurrentPage(page) {
  switch(page) {
    case 1:
      steps[0].classList.toggle('active');
      steps[1].classList.toggle('done');
      steps[2].classList.toggle('done');   
      page_1.parentNode.parentNode.classList.toggle('d-block');
      page_1.parentNode.parentNode.classList.toggle('d-none');
      page_3.classList.toggle('d-block');
      page_3.classList.toggle('d-none');      
      break;
    case 2:
      steps[0].classList.toggle('done');
      steps[0].classList.toggle('active');
      steps[1].classList.toggle('active');      
      page_1.parentNode.parentNode.classList.toggle('d-block');
      page_1.parentNode.parentNode.classList.toggle('d-none');      
      page_2.parentNode.parentNode.classList.toggle('d-block');
      page_2.parentNode.parentNode.classList.toggle('d-none');
      break;
    case 3:
      steps[1].classList.toggle('active');
      steps[1].classList.toggle('done');
      steps[2].classList.toggle('done');         
      page_2.parentNode.parentNode.classList.toggle('d-block');
      page_2.parentNode.parentNode.classList.toggle('d-none');      
      page_3.classList.toggle('d-block');
      page_3.classList.toggle('d-none');
      window.setTimeout((() => {setCurrentPage(1)}), 3000)
      break;
    default:
      steps[0].classList.toggle('active');
      steps[1].classList.toggle('done');
      steps[2].classList.toggle('done');       
      page_1.parentNode.parentNode.classList.toggle('d-block');
      page_1.parentNode.parentNode.classList.toggle('d-none');
      break;            
  }
}


