let dayInput = document.querySelector("#day");
let monthInput = document.querySelector("#month");
let yearInput = document.querySelector("#year");
let form = document.querySelector(".form");
let errorContent = document.querySelector(".error");

form.addEventListener("submit", (e) => {
  const day = dayInput.value;
  const month = monthInput.value;
  const year = yearInput.value;
  e.preventDefault();

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
    return;
  } else if (isNaN(day) || isNaN(month) || isNaN(year)) {
    errorContent.textContent = "Please enter numbers only";
    return;
  } else if (day > 31) {
    errorContent.textContent = "Enter a valid date";
    dayInput.style.border = "1px solid red";
    return;
  } else if (month > 12) {
    errorContent.textContent = "Enter a valid month";
    monthInput.style.border = "1px solid red";
    return;
  } else {
    ageResult();
    return;
  }
});

function ageResult() {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
  const yearOutput = document.querySelector("#age-year");
  const monthsOutput = document.querySelector("#age-month");
  const daysOutput = document.querySelector("#age-day");
  const yearOfBirth = parseInt(yearInput.value);
  const monthOfBirth = parseInt(monthInput.value) - 1;
  const dayOfBirth = parseInt(dayInput.value);

  const birthDate = new Date(yearOfBirth, monthOfBirth, dayOfBirth);

  if (birthDate > currentDate) {
    errorContent.textContent = "Error, birth year can't be in the future";
    return;
  }

  let ageInYears = currentYear - yearOfBirth - 1;
  let ageInMonths = currentMonth - (monthOfBirth + 1) + 12;
  let ageInDays = currentDay - dayOfBirth;

  if (ageInDays < 0) {
    const lastMonthDays = new Date(yearOfBirth, monthOfBirth + 1, 0).getDate();
    ageInDays = lastMonthDays - dayOfBirth + currentDay;
    ageInMonths--;
  }

  if (ageInMonths >= 12) {
    ageInYears += Math.floor(ageInMonths / 12);
    ageInMonths = ageInMonths % 12;
  }

  yearOutput.textContent = ageInYears;
  monthsOutput.textContent = ageInMonths;
  daysOutput.textContent = ageInDays;

  errorContent.textContent = "";
  dayInput.style.border = "";
  monthInput.style.border = "";
  yearInput.style.border = "";
}
