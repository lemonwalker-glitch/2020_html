//easier with apply,call or bind function method??

var $checkin = document.querySelector(".checkin");
$checkin.addEventListener("click", function() {
  var duration = 0.3,
    delay = 0.08;
  TweenMax.to($checkin, duration, { scaleY: 1.6, ease: Expo.easeOut });
  TweenMax.to($checkin, duration, {
    scaleX: 1.2,
    scaleY: 1,
    ease: Back.easeOut,
    easeParams: [3],
    delay: delay
  });
  TweenMax.to($checkin, duration * 1.25, {
    scaleX: 1,
    scaleY: 1,
    ease: Back.easeOut,
    easeParams: [6],
    delay: delay * 3
  });
  var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
  xmlhttp.open("POST", "/");
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify({ activity: "checkin" }));
});

var $checkout = document.querySelector(".checkout");
$checkout.addEventListener("click", function() {
  var duration = 0.3,
    delay = 0.08;
  TweenMax.to($checkout, duration, { scaleY: 1.6, ease: Expo.easeOut });
  TweenMax.to($checkout, duration, {
    scaleX: 1.2,
    scaleY: 1,
    ease: Back.easeOut,
    easeParams: [3],
    delay: delay
  });
  TweenMax.to($checkout, duration * 1.25, {
    scaleX: 1,
    scaleY: 1,
    ease: Back.easeOut,
    easeParams: [6],
    delay: delay * 3
  });
  var xmlhttp = new XMLHttpRequest(); // new HttpRequest instance
  xmlhttp.open("POST", "/");
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify({ activity: "checkout" }));
});

