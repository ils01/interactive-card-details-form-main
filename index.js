const thankYou = document.querySelector(".thank-you");
const mainContent = document.querySelector(".main-content");
const form = document.querySelector("form");
const confirm = form.querySelector(".btn");

confirm.addEventListener("click", function () {
  let checkBlankRes = checkBlank();
  let checkNameRes = checkName();
  let checkCardNumberRes = checkCardNumber();
  let checkExpMonthRes = checkExpMonth();
  let checkExpYearRes = checkExpYear();
  let checkCVCRes = checkCVC();
  if (
    checkBlankRes &&
    checkNameRes &&
    checkCardNumberRes &&
    checkCardNumberRes &&
    checkExpMonthRes &&
    checkExpYearRes &&
    checkCVCRes
  ) {
    mainContent.style.display = "none";
    thankYou.style.display = "grid";
  }
  // console.log(checkBlank());
  // console.log(checkName());
  // console.log(checkCardNumber());
  // console.log(checkExpMonth());
  // console.log(checkExpYear());
  // console.log(checkCVC());

  function checkBlank() {
    let flag = false;
    const inputs = form.querySelectorAll("input");
    inputs.forEach((input) => {
      const notification = form.querySelector(`#${input.id} + .notification`);
      if (!input.value) {
        input.setCustomValidity(" ");
        notification.textContent = "Can't be blank";
        flag = false;
      } else {
        input.setCustomValidity("");
        notification.textContent = "";
        flag = true;
      }
    });
    return flag;
  }
  function checkName() {
    const nameElt = document.getElementById("name");
    const name = nameElt.value;
    const notification = document.querySelector("#name + .notification");
    if (name.length > 0 && name.length < 6) {
      nameElt.setCustomValidity(" ");
      notification.textContent = "Name is too short (at least 6 characters)";
      return false;
    }
    return true;
  }
  function checkCardNumber() {
    const cardNumberElt = document.getElementById("card-num");
    const cardNumber = cardNumberElt.value;
    const notification = document.querySelector("#card-num + .notification");
    if (cardNumber.match(/[^0-9]/)) {
      cardNumberElt.setCustomValidity(" ");
      notification.textContent = "Wrong format, numbers only";
      return false;
    } else if (cardNumber.length > 0 && cardNumber.length < 16) {
      cardNumberElt.setCustomValidity(" ");
      notification.textContent = "At least 16 characters";
      return false;
    }
    return true;
  }
  function checkExpMonth() {
    const monthElt = document.getElementById("exp-month");
    const month = Number(monthElt.value);
    const notification = document.querySelector("#exp-month + .notification");
    if (month != 0 && (month < 1 || month > 12)) {
      monthElt.setCustomValidity(" ");
      notification.textContent = "Wrong month";
      return false;
    }
    if (month != 0 && month < 10) {
      monthElt.value = `0${month}`;
    }
    return true;
  }
  function checkExpYear() {
    const yearElt = document.getElementById("exp-year");
    const year = Number(yearElt.value);
    const notification = document.querySelector("#exp-year + .notification");
    let currYear = new Date().getFullYear().toString();
    if (
      year != 0 &&
      (year < Number(currYear.substring(currYear.length - 2)) ||
        year > ((Number(currYear) % 100) + 20) % 100)
    ) {
      yearElt.setCustomValidity(" ");
      notification.textContent = "Wrong year";
      return false;
    }
    if (yearElt.value != "" && year < 10) {
      yearElt.value = `0${year}`;
    }
    return true;
  }
  function checkCVC() {
    const cvcElt = document.getElementById("cvc");
    const cvc = Number(cvcElt.value);
    const notification = document.querySelector("#cvc + .notification");
    if (cvc != 0 && (cvc < 100 || cvc > 999)) {
      cvcElt.setCustomValidity(" ");
      notification.textContent = "Wrong format";
      return false;
    }
    return true;
  }
});
