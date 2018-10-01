$(document).ready(function() {
    if (!jQuery.browser.mobile) {
        resizer();

        if(window.attachEvent) {
            window.attachEvent('onresize', function() {
                resizer();
            });
        }
        else if(window.addEventListener) {
            window.addEventListener('resize', function() {
                resizer();
            }, true);
        }
        else {
            alert('neither')
        }
        window.addEventListener("resize", function(e) {
            resizer();
        });
    }
});

window.onload = function() {
    var elevator = new Elevator({
        mainAudio: '../music/elevator_music.mp3',
        endAudio: '../music/ding.mp3',
        element: document.querySelector('.footer')
    });
}

function resizer() {
    var box = document.getElementById("middleContainer");
    if (box.clientHeight <= 300) {
        var width = "width: " + box.clientHeight + "px";
        console.log(width);
        box.setAttribute("style", width);
    } else {
        box.setAttribute("style", "width: 300px");
    }
}

$(window).scroll(function() { 
    if (!jQuery.browser.mobile) {
        var scroll = $(window).scrollTop();
        
        var aboutTop = $("#about").position().top;
        var knowTop = $("#know").position().top;

        if (scroll >= (aboutTop - 500)) {
            showAboutText();
        }
        
        if (scroll >= knowTop - 500) {
            $("#knowContainer").addClass("fadeIn");
        }
    }
});


function showAboutText() {

	$("#profile").addClass("fadeIn");
	$("#aboutText").addClass("fastFlipUp");
	
	setTimeout(function() {
		$(".dash").addClass("fastFlipUp");
	}, 300);
	
	setTimeout(function() {
		$("#aboutTextMore").addClass("fastFlipUp");
	}, 600);
}
