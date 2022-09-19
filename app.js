// dom elements

const time = document.getElementById("time"),
greeting = document.querySelector("#greeting"),
name = document.querySelector("#name"),
focus = document.querySelector("#focus");


// Options
const showAmPm = true
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

//   hour = hour % 12 || 12;

  // Output Time

  time.innerHTML = `${addZero(hour)}:${addZero(min)}:${addZero(sec)} ${showAmPm ? amPm : ""}`;

  setTimeout(showTime, 1000);
}

// set background and greeting

function setBgGreet() {
    let today = new Date()
    hour = today.getHours()
    if(hour<12) {
        document.body.style.backgroundImage = `url("./img/morning.jpg")`
        greeting.textContent = "Good Morning"
        document.body.style.backgroundPosition = "center"
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
        document.body.style.color = "white";



    }else if(hour<18) {
        document.body.style.backgroundImage = `url("./img/afternoon.jpg")`;
        greeting.textContent = "Good Afternoon";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }else {
        document.body.style.background = `url("./img/night.jpg")`;
        greeting.textContent = "Good Night";
        document.body.style.color = "white"
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
        document.body.style.backgroundSize = "cover";
    }
}
// GetName
function getName() {
    if(localStorage.getItem("name") ===null) {
        name.textContent = `[Enter Name]`
    }else {
        name.textContent = localStorage.getItem("name")
    }
}
// Get Focus
function getFocus () {
    if(localStorage.getItem("focus") === null) {
        focus.textContent = `[Enter Focus]`
    }else {
        focus.textContent = localStorage.getItem("focus")
    }
}

// setname
function setName(e) {
   if(e.type=== "keypress") {
        if(e.which ===13 || e.keyCode=="13") {
            localStorage.setItem("name", e.target.textContent)
            name.blur()
        }
   }else {
    localStorage.setItem("name", e.target.textContent)
   }
}

// getName
function setFocus(e) {
    if(e.type ==="keypress") {
        if(e.which ==13 || e.keyCode ==13) {
            localStorage.setItem("focus", e.target.textContent)
            focus.blur()
        }
    }else {
        localStorage.setItem("focus", e.target.textContent)
    }
}


document.querySelector("#name").addEventListener("keypress", setName)
document.querySelector("#name").addEventListener("blur", setName)
document.querySelector("#focus").addEventListener("keypress", setFocus)
document.querySelector("#focus").addEventListener("blur", setFocus)

  // Run
  showTime();
setBgGreet()
getName()
getFocus()
setName()
setFocus()



