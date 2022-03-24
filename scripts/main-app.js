
// START: LOADER
// $(window).on("load",function(){
//   $(".loaderWrapper").fadeOut("slow");
// });
// START: LOADER


// START: AUTOMATED TEXT

const autoText = document.querySelector(".autoText");
const cursorSpan = document.querySelector(".cursor");

const sentence = "Hi, I'm Javi.\r\nI make music.\r\nEnjoy.";

const typingDelay = 120;
const erasingDelay = 70;
const newTextDelay = 4500;

let charIndex = 0;
let arrayIndex = 0;

function type() {
  if(charIndex < sentence.length) {
    if(!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    autoText.textContent += sentence.charAt(charIndex);
    charIndex += 1;
    setTimeout(type, typingDelay);
  }
  else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if(charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) {
      cursorSpan.classList.add("typing");
    }
    autoText.textContent = sentence.substring(0, charIndex-1);
    charIndex -= 1;
    setTimeout(erase, erasingDelay)
  }
  else {
    cursorSpan.classList.remove("typing");
    arrayIndex += 1;
    if(arrayIndex >= sentence.length) arrayIndex = 0;
    setTimeout(type, 2000);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  setTimeout(type, 1000);
});

// END: AUTOMATED TEXT



// START: NAVBAR COLOR

$(function() {
  $(window).on("scroll", function() {
      if($(window).scrollTop() > 70) {
        $("#header").addClass("scrolled");
        $("header a").addClass("scrollText");
        $("#logo").attr("src", "images/logo.png");
        $(".labelTing").addClass("labelColor");
       
      } else {
        $("#header").removeClass("scrolled");
        $("header a").removeClass("scrollText");
        $("#logo").attr("src", "images/logoWhite.png");
        $(".labelTing").removeClass("labelColor");
        
      }
  });
});

// END: NAVBAR COLOR




// START: MOVE SIDEMENU WHEN MENU ACTIVE

// function moveMenu() {
//   var sideMenu = document.querySelector(".sideMenu");
//   var toggle = document.getElementById("toggle");

//   if(toggle.checked == false) {
//     sideMenu.classList.add("moveMenu");
//   }
//   else {
//     sideMenu.classList.remove("moveMenu");
//   }
// };
 
// END: MOVE SIDEMENU WHEN MENU ACTIVE





// START: ORDER QUANTITY MENU

  // var ddl = document.getElementById('orderQuantity');

  // for (var i = 1; i <= 100; i++) {
  //     var theOption = new Option;
  //     theOption.text = i;
  //     theOption.value = i;
  //     ddl.options[i] = theOption;
  // };

// END: ORDER QUANTITY MENU
