
window.addEventListener("load", async () => { 

  // Fetch site config
  let rawData = await fetch("/config.json")
  let config = await rawData.json()

  // Inject Registration or GatherTown Link
  const linkTarget = document.getElementById("register")
  const links = config['formLinks']
  linkTarget.innerHTML = `
    <h3>Register Now:</h3>
    <button onclick="location.href='${links['students']}'">Students</button><br>
    <button onclick="location.href='${links['employers']}'">Employers</button>
  `

  // Start Countdown
  let x = setInterval( () => {

    // Calculate distance to next deadline
    times = config['times']
    distance = calculateTimeDifference(times['start'])

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

    // Stop if counter is done
    if (distance < 0) {   
      if (calculateTimeDifference(times['end']) < 0) {
        clearInterval(x);
        var item = document.getElementById("countdown");
        item.innerHTML = "Talent Day has Conculeded!";
        item.style.display = 'block';
        linkTarget.innerHTML = `
          <h3>Join us next year!</h3>
          <button onclick="location.href='https://www.ds3ucsd.com/'">Check Out DS3</button><br>
        `
      } else {
        clearInterval(x);
        var item = document.getElementById("countdown");
        item.innerHTML = "Talent Day has Started!";
        item.style.display = 'block';
        linkTarget.innerHTML = `
          <h3>Day Two Talentday:</h3>
          <button onclick="location.href='${config['gathertownLink']}'">Join GatherTown</button><br>
        `
      }
    } 
  }, 1000);

})


function calculateTimeDifference(targetTime) {
  var now = new Date().getTime();
  var targetDate = new Date(targetTime)
  return targetDate - now;
}

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
