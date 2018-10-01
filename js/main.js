// Preload Images
var images = new Array();
function preload() {
    for (i = 0; i < preload.arguments.length; i++) {
        images[i] = new Image()
        images[i].src = preload.arguments[i]
    };
};

preload(
    "img/hero.jpg",
    "img/ski-pic.png"
);

// Controls Fading of Menu Bar
$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $("nav").addClass("navOpac");
    } else {
        $("nav").removeClass("navOpac");
    }
});

// Load Main Page Elements on Page Load after Image Load
var img = new Image();
img.onload = function() {

    $("#one").addClass("flipUp");

    setTimeout(function() {
	    $("#two").addClass("flipUp");
    }, 300);
    
    setTimeout(function() {
	    $("#three").addClass("flipUp");
    }, 600);
    
    setTimeout(function() {
	    $("#four").addClass("flipUp");
    }, 900);
    
    setTimeout(function() {
	    $("#five").addClass("flipUp");
    }, 1200);
    
    setTimeout(function() {
	    $("#six").addClass("flipUp");
    }, 1500);
    
    setTimeout(function() {
	    $("#seven").addClass("flipUp");
    }, 1800);
    
    setTimeout(function() {
	    $("#eight").addClass("flipUp");
    }, 2100);
    
    setTimeout(function() {
	    $("#nine").addClass("flipUp");
    }, 2400);
    
    setTimeout(function() {
	    $("nav").addClass("fadeIn");
	    $("#scroll").addClass("fadeIn");
	    $("#scrollTriangle").addClass("fadeIn");
	    
	    $(".letterBox").addClass("hoverShrink");
	    
    }, 4000);
};
img.src = 'img/hero.jpg';
