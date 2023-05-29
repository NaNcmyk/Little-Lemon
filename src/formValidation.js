// function taken from "create a registration form" exercise of week 1 of Meta Advance React course
const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

const isFormValid = (form) => {
    return (
      form.firstName &&
      form.lastName &&
      validateEmail(form.email) &&
      form.time &&
      form.isTermsChecked
    );
};

const isInputValid = (input) => input.length > 0;

export {isFormValid, isInputValid, validateEmail};