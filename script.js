// Set the date we're counting down to
let countDownDate = new Date("Sept 8, 2020 15:43:25").getTime();

// Update the count down every 1 second
let count = setInterval(function() {

  // Get today's date and time
  let now = new Date().getTime();
    
  // Find the distance between now and the count down date
  let diff = countDownDate - now;

  // math
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);

  // display of output
  document.querySelector(".count").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>days</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>hours</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>minutes</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>seconds</div> \
</div>";
//1000 is for seconds
}, 1000);
