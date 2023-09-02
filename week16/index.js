const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ageInput = document.getElementById('age');
const genderInput = document.querySelector('inputname="gender":checked');
const professionInput = document.getElementById('profession');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
const agreeInput = document.getElementById('agree');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  resetForm();

  if (!nameInput.validity.valid) {
    showError(nameInput, 'Имя должно содержать только буквы и пробелы, от 2 до 20 символов');
  }

  if (!emailInput.validity.valid) {
    showError(emailInput, 'Некорректный адрес электронной почты');
  }
  if (!ageInput.validity.valid) {
    showError(ageInput, 'Введите возраст');
  }

  if (!genderInput) {
    showError(genderInput, 'Выберите пол');
  }

  if (!professionInput.validity.valid) {
    showError(professionInput, 'Выберите профессию');
  }

  if (!passwordInput.validity.valid) {
    showError(passwordInput, 'Пароль должен быть не менее 8 символов и содержать как минимум одну заглавную букву, одну строчную букву и одну цифру');
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    showError(confirmPasswordInput, 'Пароли не совпадают');
  }
  if (!agreeInput.checked) {
    showError(agreeInput, 'Необходимо согласиться с обработкой данных');
  }

  if (form.checkValidity()) {
    console.log('Имя:', nameInput.value);
    console.log('Email:', emailInput.value);
    console.log('Возраст:', ageInput.value);
    console.log('Пол:', genderInput.value);
    console.log('Профессия:', professionInput.value);
    console.log('Пароль:', passwordInput.value);

    form.reset();
  }
});

function showError(input, message) {
  const errorMessage = document.getElementById(${input.id}-error);
  input.classList.add('error');
  errorMessage.textContent = message;
}

function resetForm() {
  const errorMessages = document.querySelectorAll('.error-message');
  const inputs = document.querySelectorAll('input, select');

  errorMessages.forEach(function(errorMessage) {
    errorMessage.textContent = '';
  });

  inputs.forEach(function(input) {
    input.classList.remove('error');
  });
}