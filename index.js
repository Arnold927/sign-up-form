/*function validateFirstName (){
let name1 = document.getElementById('#firstName').placeholder
let regExp1= /^[a-zA-Z]/g

if(!regExp1.test(name1)) {
  alert('Please enter a valid first name')
  document.getElementById('#firstName').focus()
  return false
} else{
  alert('Valid name given')
  return true
}
}

const NAME_REGEX = /^[a-zA-Z\\xC0-\\uFFFF]+([ \\-']{0,1}[a-zA-Z\\xC0-\\uFFFF]+){0,2}[.]{0,1}$/

const isValidName = (name) => NAME_REGEX.test(name)*/

let submit = document.getElementById('claim')
submit.addEventListener('click', validate)

function validate(e) {
  e.preventDefault();

  const firstNameField = document.getElementById('firstName')
  let valid = true;

  if(!firstNameField.value) {
    const nameError = document.getElementById('nameError')
    nameError.classList.add('visible')
    firstNameField.classList.add('invalid')
    nameError.setAttribute('aria-hidden', false)
    nameError.setAttribute('aria-invalid', true)
  } 
  return valid;
}
/*
let Submit= document.getElementById('claim')
Submit.addEventListener('click', validate)

function validate(f) {
  f.preventDefault();

  let lastNameField = document.getElementById('lastName')
  let Valid = true

  if(!lastNameField.value) {
    let nameErrors = document.getElementById('nameError1');
    nameErrors.classList.add('visible')
    lastNameField.classList.add('invalid')
    nameErrors.setAttribute('aria-hidden', false)
    nameErrors.setAttribute('aria-hidden', true)
  }
  return valid
}*/
/*let nameField = document.querySelector('.inputField')
nameField.addEventListener('input', () => {
  nameField.setCustomValidity('')
  nameField.checkValidity();
  console.log(nameField.checkValidity())
})

nameField.addEventListener('invalid', () => {
  nameField.setCustomValidity('Please fill in your First Name')
})*/