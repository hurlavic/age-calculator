let dayInput = document.querySelector("#day");
let monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");
let form = document.querySelector(".form");
let errorContent = document.querySelector(".error");
// let button = document.querySelector("button")

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;

  if (day === "" || month === "" || year === "") {
    errorContent.textContent = "Field(s) can't be blank";
    dayInput.style.border = "1px solid red";
    monthInput.style.border = "1px solid red";
    yearInput.style.border = "1px solid red";

    if (day) {
      dayInput.style.border = "";
    }
    if (month) {
      monthInput.style.border = "";
    }
    if (year) {
      yearInput.style.border = "";
    }
  } else if (isNaN(day) || isNaN(month) || isNaN(year)) {
    errorContent.textContent = "Please enter numbers only";
  } else if (day > 31) {
    errorContent.textContent = "Enter a valid date";
    dayInput.style.border = "1px solid red";
    if (day) {
      dayInput.style.border = "";
    }
  } else if (month > 12) {
    errorContent.textContent = "Enter a valid month";
    monthInput.style.border = "1px solid red";
    if (month) {
      monthInput.style.border = "";
    }
  }
});
