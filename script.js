const FirstName = document.querySelector("#first-name-input")
  , lastName = document.querySelector("#last-name-input")
  , emailInput = document.querySelector("#email-input")
  , passwordInput = document.querySelector("#password-input")
  , submitBtn = document.querySelector("#submit-btn");
function validateEmail(s) {
    var a = s.indexOf("@");
    var i = s.lastIndexOf(".");
    return a > 0 && i > a + 1 && i < s.length - 1
}
FirstName.onkeyup = ()=>{
    FirstName.classList.remove("is-valid"),
    FirstName.classList.remove("is-invalid")
};

lastName.onkeyup = ()=>{
    lastName.classList.remove("is-valid"),
    lastName.classList.remove("is-invalid")
};

emailInput.onkeyup = ()=>{
    emailInput.classList.remove("is-valid"),
    emailInput.classList.remove("is-invalid")
};

passwordInput.onkeyup = ()=>{
    passwordInput.classList.remove("is-valid"),
    passwordInput.classList.remove("is-invalid")
};

submitBtn.onclick = ()=>{
    isFirstNameOk = false;
    isLastNameOk = false;
    isEmailOk = false;
    isPasswordOk = false;
    if(""=== FirstName.value){
      FirstName.classList.add("is-invalid");
    }else{
      (FirstName.classList.add("is-valid"),isFirstNameOk = true);
    };
    if(""=== lastName.value){
      lastName.classList.add("is-invalid");
    }else{
      (lastName.classList.add("is-valid"),isLastNameOk = true);
    };
    if(false === validateEmail(emailInput.value)){
      emailInput.classList.add("is-invalid");
    }else{
      (emailInput.classList.add("is-valid"),isEmailOk = true);
    };
    if(passwordInput.value.length >= 6){
      (passwordInput.classList.add("is-valid"),isPasswordOk = !0);
    }else{
      passwordInput.classList.add("is-invalid");
    };
    isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk && alert("Registered successfully")
}
;

//nyan nyan nyan
