function loadTimer() {
  var deadline = new Date("Dec 15, 2017 17:20:00").getTime();
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
  coverImages[10] = 'url("images/khaled.gif")';
  coverImages[11] = 'url("images/thinker.gif")';
  coverImages[12] = 'url("images/nacho.gif")';
  coverImages[13] = 'url("images/worldOrder.gif")';
  coverImages[14] = 'url("images/power.gif")';
  coverImages[15] = 'url("images/farley.gif")';

  bgMusic[0] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/8976187&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[1] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/122570957&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[2] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/89178062&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[3] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/183028796&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[4] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125555390&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[5] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/227781640&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[6] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/125529024&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[7] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/133060071&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[8] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/339767079&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[9] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/209723078&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[10] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/162978980&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[11] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/280005528&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[12] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/56906186&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[13] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/132587303&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';

  var x = setInterval(function() {
    var now = new Date().getTime();
    var timeRemaining = deadline - now;
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    var timerText = "<h1 class='lgText'>";
    timerText += days + "d ";
    timerText += hours + "h ";
    timerText += minutes + "m ";
    timerText += seconds + "s ";
    timerText += "Remaining";
    timerText += "</h1>";

    document.getElementById('counter').innerHTML = timerText;

    if (timeRemaining < 0) {
      clearInterval(x);
      imageIndex = randomIndex(coverImages);
      musicIndex = randomIndex(bgMusic);
      document.getElementById('partyTime').style.display = "block";
      document.getElementById('fresh-button').style.display = "block";
      document.getElementById('main').style.backgroundImage = coverImages[imageIndex];
      document.getElementById('counter').innerHTML = bgMusic[musicIndex];
    }
  }, 1000);
}

function randomIndex(input) {
  var newIndex = Math.floor( Math.random() * input.length );
  return newIndex;
}

loadTimer();
