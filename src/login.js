const form = document.querySelector('#login')
const account = document.querySelector('#account')
const password = document.querySelector('#password')

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if(account.value.length <= 0 || password.value.length <= 0){
    e.target.classList.add('was-validated')
    return
  }
      e.target.classList.remove('was-validated')
})

