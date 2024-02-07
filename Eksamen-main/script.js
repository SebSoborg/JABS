function burger() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  

  }
  //Dette er taget fra https://www.w3schools.com/howto/howto_js_accordion.asp
  var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}
  var rangeSlider = function() {
    var sliders = document.querySelectorAll('.slidecontainer');
    
    sliders.forEach(function(slider) {
      var range = slider.querySelector('.range-slider__range');
      var value = slider.querySelector('.range-slider__value');
  
      var values = slider.querySelectorAll('.range-slider__value');
      values.forEach(function(val) {
        var valValue = val.previousElementSibling.getAttribute('value');
        val.innerHTML = valValue;
      });
  
      range.addEventListener('input', function() {
        value.innerHTML = this.value;
      });
    });
  };
  
  rangeSlider();

let slides = document.getElementsByClassName("slider__slide");
let navlinks = document.getElementsByClassName("slider__navlink");
let currentSlide = 0;

document.getElementById("nav-button--next").addEventListener("click", () => {
    changeSlide(currentSlide + 1)
});
document.getElementById("nav-button--prev").addEventListener("click", () => {
    changeSlide(currentSlide - 1)
});

function changeSlide(moveTo) {
    if (moveTo >= slides.length) {moveTo = 0;}
    if (moveTo < 0) {moveTo = slides.length - 1;}
    
    slides[currentSlide].classList.toggle("active");
    navlinks[currentSlide].classList.toggle("active");
    slides[moveTo].classList.toggle("active");
    navlinks[moveTo].classList.toggle("active");
    
    currentSlide = moveTo;
}

