const hrs = document.querySelector("#hrs");
const min = document.querySelector("#min");
const sec = document.querySelector("#sec");

function upDateeachSeconds() {}

setInterval(() => {
  const currentTime = new Date();
  hrs.innerHTML = currentTime.getHours();
  min.innerHTML = currentTime.getMinutes();
  sec.innerHTML = currentTime.getSeconds();
}, 1000);
