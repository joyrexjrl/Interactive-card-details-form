const cardFrontNumber = document.querySelector(".card-front-number");
const cardFrontName = document.querySelector(".card-front-name");
const cardFrontExpDate = document.querySelector(".card-front-exp-date");

const formName = document.querySelector(".form-name");
const formCardNumber = document.querySelector(".form-card-number");
const formMonthExp = document.querySelector(".form-month-exp");
const formYearExp = document.querySelector(".form-year-exp");
const formCvc = document.querySelector(".form-cvc-code");

const nameError = document.querySelector(".name-error");
const numberError = document.querySelector(".number-error");
const monthError = document.querySelector(".month-error");
const yearError = document.querySelector(".year-error");
const cvcError = document.querySelector(".cvc-error");

const errorText = document.querySelector(".error-text");

function clearInputs(){
    formName.value = '';
    formCardNumber.value = '';
    formMonthExp.value = '';
    formYearExp.value = '';
    formCvc.value = '';
}