
// Talent day start day
var countDownDate = new Date("Oct 12, 2023 11:00:00").getTime();

// From w3 schools (https://www.w3schools.com/howto/howto_js_countdown.asp)
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();
  
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
  
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Zero pad
    days = String(days).padStart(2, '0')
    hours = String(hours).padStart(2, '0')
    minutes = String(minutes).padStart(2, '0')
    seconds = String(seconds).padStart(2, '0')
  
    // Display inside the "time-box" divs
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
  
    // If the count down is finished, state it has started
    if (distance < 0) {
      clearInterval(x);
      var item = document.getElementById("countdown");
      item.innerHTML = "Talent Day has Begun!";
      item.style.display = 'block';
    }
}, 1000);

// Redirect to forms
function addRedirect(bt, site) {
  bt.addEventListener("click", () => {
      window.open(
          site,
          '_blank'
      );
  })
}

// Making imgs clickable
var imgs = document.getElementsByTagName("img")

for (i = 0; i < imgs.length; i ++) {
  var img = imgs[i]
  if (i == 0) {
      // Have ds3 logo redirect to main
      img.addEventListener("click", () => {
          location.href = 'https://www.ds3ucsd.com/'
      })
  }
  else {
      // Making images clickable
      addRedirect(img, img.src)
  }
}
