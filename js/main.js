function loadTimer() {
  var deadline = new Date("Dec 13, 2017 17:00:00").getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();
    var timeRemaining = deadline - now;
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    var coverImages = [], index = 0;

    coverImages[0] = 'url("images/party.gif")';
    coverImages[1] = 'url("images/dance.gif")';
    coverImages[2] = 'url("images/glasses.gif")';
    coverImages[3] = 'url("images/shaq.gif")';

    index = Math.floor( Math.random() * coverImages.length );

    var timerText = "<h1 class='lgText'>";
    timerText += days + "d ";
    timerText += hours + "h ";
    timerText += minutes + "m ";
    timerText += seconds + "s ";
    timerText += "Remaining";
    timerText += "</h1>";

    document.getElementById("demo").innerHTML = timerText;

    if (timeRemaining < 0) {
      clearInterval(x);
      var celebrationText = "<h1 class='lgText'>0d 0h 0m 0s Remaining</h1>";
      celebrationText += "<h1 class='lgText'>PARTY TIME!</h1>";
      celebrationText += "<div>";
      celebrationText += "<iframe width='20' height='20' src='https://www.youtube.com/embed/VtWxBwBLS9U?autoplay=1' style='visibility:hidden;'></iframe>";
      celebrationText += "</div>";

      document.getElementById('main').style.backgroundImage = coverImages[index];
      console.log(coverImages[index]);
      document.getElementById("demo").innerHTML = celebrationText;
    }
  }, 1000);
}

loadTimer();
