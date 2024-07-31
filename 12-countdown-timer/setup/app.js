const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// catching the variables
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");



// let tempDate = new Date();
// let tempYear = tempDate.getFullYear();
// let tempMonth = tempDate.getMonth();
// let tempDay = tempDate.getDate();

let futureDate = new Date(2024, 9, 24, 12, .00, .00);
// let futureDate = new Date();


// const futureDate = new Date(tempYear, tempMonth, tempDay + 10, 12, 0, 0);
const year = futureDate.getFullYear();
let month = futureDate.getMonth(); // we used "let" here because this would only give a number between 0 and 11 and it needs to be converted to the value of the corresponding month;
const weekday = weekdays[futureDate.getDay()]; // Trying to get the weekday in worsds
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();

month = months[month];

const date = futureDate.getDate(); // This presents the date in number format



giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month} ${year} by ${hours}:${mins}am`;

// so in order to do the countdown,we get the time in between the two periods by subtracting the time of the present from the future.

// Future time in ms
const futureTime = futureDate.getTime(); // thte getTime() function would always return the time in milliseconds.
// console.log(futureTime);

function getRemainingTime() {
  const today = new Date().getTime();
  // console.log(today);


  const t = futureTime - today;
  // console.log(t);
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1day = 24hr


  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;

  // calculate all values
  let days = Math.floor(t / oneDay);
  // days = Math.floor(days);
  // console.log(days);
  let hours = Math.floor((t % oneDay) / oneHour);
  let minutes = Math.floor((t % oneHour) / oneMinute);
  let seconds = Math.floor((t % oneMinute) / 1000);


  // set values array
  const values = [days, hours, minutes, seconds];

  function format(item) {
    if (item < 10) {
      return item= `0${item}`
    }
    return item;
  }

  items.forEach((item, index) => {
    item.innerHTML = values[index];
  });

  if (t < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class = "expired">Sorry, this giveaway has expired</h4>`
  }
}

// countdown;
let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();