
var coinsyouhave = parseInt(localStorage.getItem('coinsyouhavesaved')) || 0;

var watchad = document.getElementById("watchad");
var advideo = document.getElementById("advideo");
var body = document.getElementById("body");

watchad.addEventListener('click', function() {
  var ad = document.getElementById('advideo');
  ad.play();
  body.style.display = 'none';
  advideo.style.display = 'block';
});

advideo.addEventListener('ended', function() {
  close();
});

function close() {
  body.style.display = 'block';
  advideo.style.display = 'none';
  coinsyouhave += 100;  
}

function addZero(number) {
  return number < 10 ? '0' + number : number;
}

setInterval(refresher, 500);

function refresher() {
  // Update local storage with the current coin count
  localStorage.setItem('coinsyouhavesaved', coinsyouhave);

  var coinstoshow = localStorage.getItem('coinsyouhavesaved');
  var coinkeeper = document.getElementById("coins");

  coinkeeper.innerHTML = "Coins: " + coinstoshow;
}

// Daily login

var dailyLogin = document.getElementById('dailylogin');

dailyLogin.addEventListener('click', function() {
  if (localStorage.getItem('dailyLogin')) {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var formattedDate = year + '-' + addZero(month) + '-' + addZero(day);

    if (localStorage.getItem('dailyLogin') === formattedDate) {
    console.log("matched date");
    } else {
      console.log("not matched date");
      coinsyouhave += 500;
      localStorage.setItem('dailyLogin' , formattedDate);

    }
  } else {
    var today = new Date();
    var year = today.getFullYear();
    var month = today.getMonth() + 1;
    var day = today.getDate();
    var formattedDate = year + '-' + addZero(month) + '-' + addZero(day);
    console.log("allset");
    localStorage.setItem('dailyLogin' , formattedDate);
    coinsyouhave += 500;
  }
});

// spin

crossmark = document.getElementById("crossmark");
crossmark.addEventListener('click', function() {
  var spinreward = document.getElementById("spinreward");
  spinreward.style.display = 'none';
});


spin = document.getElementById("spin");
spin.addEventListener('click', function() {
console.log("spin is clicked");
var spinreward = document.getElementById("spinreward");
spinreward.style.display = 'block';
var randomNumber = Math.floor(Math.random() * 10) + 1;
rewardnumb = document.getElementById("rewardnumb");
rewardnumb.innerHTML = randomNumber + " coins climed";
coinsyouhave += randomNumber;
});

var redeem = document.getElementById("redeem");

redeem.addEventListener('click', function() {
  var main = document.getElementById("main");
 main.style.display = 'none';
 var redeembox = document.getElementById("redeembox");
 redeembox.style.display = "block";
});

var Earnings = document.getElementById("Earnings");


Earnings.addEventListener('click', function() {
  var main = document.getElementById("main");
 main.style.display = 'block';
 var redeembox = document.getElementById("redeembox");
 redeembox.style.display = "none";
});