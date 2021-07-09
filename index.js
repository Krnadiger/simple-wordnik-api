//APIKEY must be replaced by the api key provided by wordnik.com

var voiceurl1 = "https://api.wordnik.com/v4/word.json/";
var voiceurl2 = "/audio?useCanonical=false&limit=50&api_key=APIKEY";
function geTVoice(){
  let word = document.getElementById('voiceword').value;
  let audioApi = voiceurl1 + word + voiceurl2;
  let request = new XMLHttpRequest();
  request.open('GET', audioApi, true);
  request.onload = function(){
        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            var audio = document.getElementById('player');
            audio.setAttribute("src", data[1].fileUrl);    //  set the source for audio in html tag
            audio.setAttribute("controls", "controls");
            audio.setAttribute("autoplay", "autoplay");
            var audiovoice = audio.getElementById('audiovoice');
            audiovoice.setAttribute('src', data[0].fileUrl);            )
        } else {
            spell.innerHTML = "Error";
        }
  }
  request.send();
  
}
