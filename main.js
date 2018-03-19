function showTime(){
  var mydate = new Date ();
  var year = mydate.getYear();
    if (year < 1000){
      year +=1900
    }
  var day = mydate.getDay();
  var month = mydate.getMonth();
  var daym = mydate.getDate();
  var dayarray = new Array ("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
  var montharray = new Array ("January","February","March","April","May","June","July","August","September","October","November","December");

  var date = new Date ();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59

  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = dayarray[day]+ " "+daym+ " "+montharray[month]+ " "+year+ " | " +" <span id='hours'>"+h+ "</span>:" +m+ ":" +s;
  document.getElementById("time").innerHTML = time;
  var hours = document.getElementById('hours').innerHTML;
  var message = document.getElementById('messageText');

    if (hours >= 0 && hours < 6) {
        document.body.style.backgroundImage = "url('images/night.jpeg')";
        message.innerHTML = 'GOOD NIGHT!';
      }else if (hours >= 6 && hours < 12) {
        message.innerHTML = 'GOOD MORNING!';
        document.body.style.backgroundImage = "url('images/sunrise.jpg')";
      }else if (hours >=12 && hours <18){
        message.innerHTML = 'GOOD AFTERNOON!';
        document.body.style.backgroundImage = "url('images/afternoon.jpg')";
      }else if (hours >=18 && hours <24){
        document.body.style.backgroundImage = "url('images/sunset.jpg')";
        message.innerHTML = 'GOOD EVENING!';
      }
  setTimeout(showTime, 1000);
}

showTime();

//TweenMax
var mainHeading = document.getElementById('time');

var tl1 = new TimelineMax();
tl1.to(mainHeading, 1, {fontSize: 75});
