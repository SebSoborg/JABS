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

slider.oninput = function() {
  output.innerHTML = this.value;
}

var slider = document.getElementById("deposit");
var output = document.getElementById("depositbudget");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
var slider = document.getElementById("radius");
var output = document.getElementById("radiusoutput");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}