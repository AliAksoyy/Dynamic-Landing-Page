// dom elements

const time = document.getElementById("time"),
greeting = document.querySelector("#greeting"),
name = document.querySelector("#name"),
focus = document.querySelector("#focus");

// show Time

function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();


    // add zero

// if(sec<10) {
//     sec = `${0}${sec}`
// }else {
//     sec
// }
// if(min<10) {
//     min = `${0}${min}`
// }else {
//     min
// }
// if(hour<10) {
//     hour = `${0}${hour}`
// }else {
//     hour
// }

// alternatif zero add

function addZero(n) {
    return (parseInt(n,10) <10 ? "0": "") + n
}

  // Set AM or PM

  const amPm = hour >= 12 ? "PM" : "AM";

  // 12 Format

  hour = hour % 12 || 12;

  // Output Time

  time.innerHTML = `${hour}:${addZero(min)}:${addZero(sec)}`;

  setTimeout(showTime, 1000);
}

// set background and greeting



// Run
showTime()
