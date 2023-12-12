function burger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  

  }
  var slider = document.getElementById("monthly");
var output = document.getElementById("budget");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

var slider1 = document.getElementById("deposit");
var output1 = document.getElementById("depositbudget");
output1.innerHTML = slider1.value;

slider1.oninput = function() {
  output1.innerHTML = this.value;
}

var slider2 = document.getElementById("radius");
var output2 = document.getElementById("radiusoutput");
output2.innerHTML = slider2.value;

slider2.oninput = function() {
  output2.innerHTML = this.value;
}