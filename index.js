let buttonChecked = document.querySelectorAll("[name='SelectAddress']");
// let disableRemove = document.querySelectorAll("[type='text']");
let disableRemove = document.querySelectorAll("[type='text']");
let selectButtonDisable = document.querySelectorAll("[name='SelectHouse']");
let buyButtonDisable = document.querySelectorAll("[name='SelectBuy']");
buttonChecked.forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelector(".opacity").classList.remove("opacity");
    disableRemove.forEach((disabled) => {
      disabled.removeAttribute("disabled");
    });
    selectButtonDisable.forEach((disabled) => {
      disabled.removeAttribute("disabled");
    });
    buyButtonDisable.forEach((disabled) => {
      disabled.removeAttribute("disabled");
    });
  });
});

let submitBtn = document.querySelector("#submitBtn");
let textarea = document.querySelector("#freeform");

if (submitBtn !== null) {
  submitBtn.addEventListener("click", () => {
    console.log(document.querySelector("#freeform"));
    textarea.value = "";
    alert("We 'appreciate' your feedback");
  });
}

let buyBtnChecked = document.querySelector("[name='SelectBuy']");

if (buyBtnChecked !== null) {
  buyBtnChecked.addEventListener("click", () => {
    alert("Its free!!");
  });
}
