const thankYou = document.querySelector(".thank-you");
const mainContent = document.querySelector(".main-content");
const form = document.querySelector("form");
const confirm = form.querySelector(".btn");

const imgName = document.querySelector(".lower__name");
const inputName = document.getElementById("name");

const imgCardNum = document.querySelector(".card--front__num");
const inputCardNum = document.getElementById("card-num");

const imgExpMonth = document.querySelector(".exp-month");
const inputExpMonth = document.getElementById("exp-month");

const imgExpYear = document.querySelector(".exp-year");
const inputExpYear = document.getElementById("exp-year");

const imgCVC = document.querySelector(".card--back__cvc");
const inputCVC = document.getElementById("cvc");

function updateLive(liveElt, defaultValue) {
  if (this.value) liveElt.textContent = this.value;
  else liveElt.textContent = defaultValue;
}

inputName.addEventListener(
  "input",
  updateLive.bind(inputName, imgName, "Jane Appleseed")
);

inputCardNum.addEventListener(
  "input",
  updateLive.bind(inputCardNum, imgCardNum, "0000 0000 0000 0000")
);

inputExpMonth.addEventListener(
  "input",
  updateLive.bind(inputExpMonth, imgExpMonth, "00")
);

inputExpYear.addEventListener(
  "input",
  updateLive.bind(inputExpYear, imgExpYear, "00")
);

inputCVC.addEventListener("input", updateLive.bind(inputCVC, imgCVC, "000"));

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
    const name = inputName.value;
    const notification = document.querySelector("#name + .notification");
    if (name.length > 0 && name.length < 6) {
      inputName.setCustomValidity(" ");
      notification.textContent = "Name is too short (at least 6 characters)";
      return false;
    }
    return true;
  }
  function checkCardNumber() {
    const cardNumber = inputCardNum.value;
    const notification = document.querySelector("#card-num + .notification");
    if (cardNumber.match(/[^0-9]/)) {
      inputCardNum.setCustomValidity(" ");
      notification.textContent = "Wrong format, numbers only";
      return false;
    } else if (cardNumber.length > 0 && cardNumber.length < 16) {
      inputCardNum.setCustomValidity(" ");
      notification.textContent = "At least 16 characters";
      return false;
    }
    return true;
  }
  function checkExpMonth() {
    const month = Number(inputExpMonth.value);
    const notification = document.querySelector("#exp-month + .notification");
    if (month != 0 && (month < 1 || month > 12)) {
      inputExpMonth.setCustomValidity(" ");
      notification.textContent = "Wrong month";
      return false;
    }
    if (month != 0 && month < 10) {
      inputExpMonth.value = `0${month}`;
    }
    return true;
  }
  function checkExpYear() {
    const year = Number(inputExpYear.value);
    const notification = document.querySelector("#exp-year + .notification");
    let currYear = new Date().getFullYear().toString();
    if (
      year != 0 &&
      (year < Number(currYear.substring(currYear.length - 2)) ||
        year > ((Number(currYear) % 100) + 20) % 100)
    ) {
      inputExpYear.setCustomValidity(" ");
      notification.textContent = "Wrong year";
      return false;
    }
    if (inputExpYear.value != "" && year < 10) {
      inputExpYear.value = `0${year}`;
    }
    return true;
  }
  function checkCVC() {
    const cvc = Number(inputCVC.value);
    const notification = document.querySelector("#cvc + .notification");
    if (cvc != 0 && (cvc < 100 || cvc > 999)) {
      inputCVC.setCustomValidity(" ");
      notification.textContent = "Wrong format";
      return false;
    }
    return true;
  }
});
