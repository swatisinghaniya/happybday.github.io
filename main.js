    window.sr = ScrollReveal();
    sr.reveal('.dark-overlay', {
      duration: 2500,
      delay: 1000,
    });

    sr.reveal('#chat1' ,{
      viewFactor: 0.2,
      delay: 4000,
      duration: 2000,
      origin: 'top',
      distance: '15px',
    }, 4000)

    sr.reveal('#chat2' ,{
      viewFactor: 0.2,
      delay: 6000,
      duration: 2000,
      origin: 'bottom',
      distance: '15px',
    }, 4000)

    sr.reveal('#chat3' ,{
      viewFactor: 0.2,
      delay: 8000,
      duration: 2000,
      origin: 'top',
      distance: '15px',
    }, 4000)

    sr.reveal('#chat4' ,{
      viewFactor: 0.2,
      delay: 10000,
      duration: 2000,
      origin: 'bottom',
      distance: '15px',
    }, 4000)

    sr.reveal('#chat5' ,{
      viewFactor: 0.2,
      delay: 12000,
      duration: 2000,
      origin: 'top',
      distance: '15px',
    }, 4000)

    sr.reveal('#chat6' ,{
      viewFactor: 0.2,
      delay: 14000,
      duration: 2000,
      origin: 'bottom',
      distance: '15px',
    }, 4000)
  
    sr.reveal('#chat7' ,{
      viewFactor: 0.2,
      delay: 14000,
      duration: 2000,
      origin: 'top',
      distance: '15px',
    }, 4000)

    // sr.reveal('#chat2, #chat4, #chat6', {
    //   viewFactor: 0.2,
    //   delay: 6000,
    //   duration: 2000,
    //   origin: 'bottom',
    //   distance: '20px',
    // }, 4000)



    sr.reveal('h2', {
      viewFactor:0.2,
      duration: 1500,
      origin: 'left',
      distance: '200px',
      reset: true,
    })

    sr.reveal('.container p', {
      viewFactor:0.2,
      duration: 1500,
      origin: 'right',
      distance: '200px',
      reset: true,
    })

    sr.reveal('i', {
      duration: 8000,
      viewFactor: 0.2,
      rotate: {x: 0, y: 900, z: 0}
    });


    // team
    // vars
'use strict'
var	testim = document.getElementById("testim"),
		testimDots = Array.prototype.slice.call(document.getElementById("testim-dots").children),
    testimContent = Array.prototype.slice.call(document.getElementById("testim-content").children),
    testimLeftArrow = document.getElementById("left-arrow"),
    testimRightArrow = document.getElementById("right-arrow"),
    testimSpeed = 15000,
    currentSlide = 0,
    currentActive = 0,
    testimTimer,
		touchStartPos,
		touchEndPos,
		touchPosDiff,
		ignoreTouch = 30;
;

window.onload = function() {

    // Testim Script
    function playSlide(slide) {
        for (var k = 0; k < testimDots.length; k++) {
            testimContent[k].classList.remove("active");
            testimContent[k].classList.remove("inactive");
            testimDots[k].classList.remove("active");
        }

        if (slide < 0) {
            slide = currentSlide = testimContent.length-1;
        }

        if (slide > testimContent.length - 1) {
            slide = currentSlide = 0;
        }

        if (currentActive != currentSlide) {
            testimContent[currentActive].classList.add("inactive");            
        }
        testimContent[slide].classList.add("active");
        testimDots[slide].classList.add("active");

        currentActive = currentSlide;
    
        clearTimeout(testimTimer);
        testimTimer = setTimeout(function() {
            playSlide(currentSlide += 1);
        }, testimSpeed)
    }

    testimLeftArrow.addEventListener("click", function() {
        playSlide(currentSlide -= 1);
    })

    testimRightArrow.addEventListener("click", function() {
        playSlide(currentSlide += 1);
    })    

    for (var l = 0; l < testimDots.length; l++) {
        testimDots[l].addEventListener("click", function() {
            playSlide(currentSlide = testimDots.indexOf(this));
        })
    }

    playSlide(currentSlide);

    // keyboard shortcuts
    document.addEventListener("keyup", function(e) {
        switch (e.keyCode) {
            case 37:
                testimLeftArrow.click();
                break;
                
            case 39:
                testimRightArrow.click();
                break;

            case 39:
                testimRightArrow.click();
                break;

            default:
                break;
        }
    })
		
		testim.addEventListener("touchstart", function(e) {
				touchStartPos = e.changedTouches[0].clientX;
		})
	
		testim.addEventListener("touchend", function(e) {
				touchEndPos = e.changedTouches[0].clientX;
			
				touchPosDiff = touchStartPos - touchEndPos;
			
				console.log(touchPosDiff);
				console.log(touchStartPos);	
				console.log(touchEndPos);	

			
				if (touchPosDiff > 0 + ignoreTouch) {
						testimLeftArrow.click();
				} else if (touchPosDiff < 0 - ignoreTouch) {
						testimRightArrow.click();
				} else {
					return;
				}
			
		})
}