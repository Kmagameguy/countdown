function loadTimer() {
  var deadline = new Date("Dec 14, 2017 16:30:00").getTime();

  var x = setInterval(function() {
    var now = new Date().getTime();
    var timeRemaining = deadline - now;
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);
    var coverImages = [];
    var bgMusic = [];
    var imageIndex = 0;
    var musicIndex = 0;

    coverImages[0] = 'url("images/party.gif")';
    coverImages[1] = 'url("images/dance.gif")';
    coverImages[2] = 'url("images/glasses.gif")';
    coverImages[3] = 'url("images/shaq.gif")';
    coverImages[4] = 'url("images/bale.gif")';
    coverImages[5] = 'url("images/biden.gif")';
    coverImages[6] = 'url("images/duane.gif")';
    coverImages[7] = 'url("images/got.gif")';
    coverImages[8] = 'url("images/urkel.gif")';
    coverImages[9] = 'url("images/colbert.gif")';

    bgMusic[0] = '<iframe width="20" height="20" src="https://www.youtube.com/embed/VtWxBwBLS9U?autoplay=1" style="visibility:hidden;"></iframe>';
    bgMusic[1] = '<iframe width="100%" height="300" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/122570957&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
    bgMusic[2] = '<iframe width="100%" height="300" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89178062&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
    bgMusic[3] = '<iframe width="100%" height="300" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/183028796&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
    bgMusic[4] = '<iframe width="100%" height="300" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125555390&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
    bgMusic[5] = '<iframe width="100%" height="300" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/227781640&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
    bgMusic[6] = '<iframe width="100%" height="300" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125529024&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
    bgMusic[7] = '<iframe width="100%" height="300" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/133060071&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
    bgMusic[8] = '<iframe width="100%" height="300" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339767079&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
    bgMusic[9] = '<iframe width="100%" height="300" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/209723078&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
    bgMusic[10] = '<iframe width="100%" height="300" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/162978980&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
    bgMusic[11] = '<iframe width="100%" height="300" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280005528&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
    
    imageIndex = Math.floor( Math.random() * coverImages.length );
    musicIndex = Math.floor( Math.random() * bgMusic.length );

    console.log(bgMusic[musicIndex]);

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
      celebrationText += bgMusic[musicIndex];
      celebrationText += "</div>";

      document.getElementById('main').style.backgroundImage = coverImages[imageIndex];
      document.getElementById("demo").innerHTML = celebrationText;
    }
  }, 1000);
}

loadTimer();
