function loadTimer() {
// TO DO
// Add Ball-OUT button to generate automatic emails
  var deadline = new Date("Feb 26, 2018 16:15:00").getTime();
  var coverImages = [];
  var bgMusic = [];
  var quotes = [];
  var imageIndex = 0;
  var musicIndex = 0;
  var quoteIndex = 0;

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
  coverImages[16] = 'url("images/fingerGuns.gif")';
  coverImages[17] = 'url("images/celeryMan.gif")';
  coverImages[18] = 'url("images/crews.gif")';
  coverImages[19] = 'url("images/screaming.gif")';

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
  bgMusic[14] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/180668559&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[15] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/209112457&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';
  bgMusic[15] = '<iframe width="0" height="0" scrolling="no" style="visibility:hidden;" frameborder="no" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/329968944&amp;color=%23ff5500&amp;auto_play=true&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false&amp;show_teaser=true&amp;visual=true"></iframe>';

  quotes[0] = "You can have any brew you want... as long as it's a Corona - Dominic Toretto";
  quotes[1] = "If you want the career-changing big fish, you gotta be willing to put on the big boy panties and sail out to the deep water. - Brian O'Connor";
  quotes[2] = "Ejecto seato, cuz! - Roman Pearce";
  quotes[3] = "I live my life a quarter mile at a time...For those 10 seconds or less, I'm free. - Dominic Toretto";
  quotes[4] = "Me not working hard? Yeah, right. Picture that with a Kodak. And, better yet, go to Times Square, take a picture of me with a Kodak. - Pitbull";
  quotes[5] = "Weezy F. Baby and the 'F' is for phenomenal. - Lil Wayne";
  quotes[6] = "Drinking every night because we drink to my accomplishments. - Drake";
  quotes[7] = "They will try to close the door on you, just open it. - DJ Khaled";
  quotes[8] = "If I want to party, I'll party at my house. - Shia LaBeouf";
  quotes[9] = "When life gives you lemons, just say 'fuck the lemons' and bail! - Paul Rudd";
  quotes[10] = "No, I like to rock n' roll all night and PART of every day.  I usually have errands.  I can only rock from like 1-3. - Paul Rudd";
  var x = setInterval(function() {
    var now = new Date().getTime();
    var timeRemaining = deadline - now;
    var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    var timerText = "<h1 class='lgText'>";
    if(days === 0 && hours === 0 && minutes === 0) {
      timerText += seconds + "s ";
    }
    else if(days === 0 && hours == 0) {
      timerText += minutes + "m ";
      timerText += seconds + "s ";
    }
    else if(days === 0) {
      timerText += hours + "h ";
      timerText += minutes + "m ";
      timerText += seconds + "s ";
    }
    else {
      timerText += days + "d ";
      timerText += hours + "h ";
      timerText += minutes + "m ";
      timerText += seconds + "s ";
    }

    timerText += "Remaining";
    timerText += "</h1>";

    document.getElementById('counter').innerHTML = timerText;

    if (timeRemaining < 0) {
      clearInterval(x);

      imageIndex = randomIndex(coverImages);
      musicIndex = randomIndex(bgMusic);
      quoteIndex = randomIndex(quotes);

      document.getElementById('countdown-container').style.display = "none";
      document.getElementById('partyTime').style.display = "block";
      document.getElementById('quotable').style.display = "block";
      document.getElementById('quotable').innerHTML = quotes[quoteIndex];
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
