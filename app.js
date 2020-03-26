$(".font-face").css("font-family","nmfont1", "src: url('AlegreyaSC-Bold.ttf')");
$(".font-face").css("font-family","nmfont2", "src: url('OleoScriptSwashCaps-Regular.ttf')");
$(".font-face").css("font-family","nmfont3", "src: url('Balthazar-Regular.ttf')");
$(".font-face").css("font-family","nmfont4", "src: url('Artifika.ttf')");
$(".font-face").css("font-family","nmfont5", "src: url('Dynalight-Regular.otf')");

$('body').css({"font-family": "Helvetica"});
$('body').css({"font-family": "San-Serif"});


$('body').css({"font-size":"20px"});
$('body').css({"background":"#EDEDED"});

$('#flexContainer').css({"display": "flex"});

$('header').css({"background": "#EDEDED", "min-height": "100px", "margin": "3px", "padding-top": "13px", "background-image": "url(GTImage3.jpg)",
"background-repeat": "no-repeat",
"background-size": "contain",
"color": "red",
"text-align": "center",
"font-family": "nmfont1",
"font-size": "60px"
  });

$('h2').css({"padding-top": "40px",
"color": "blue",
"font-family": "nmfont2",
"font-size": "20px"
});

$('nav').css ({"background": "#D9853B",
"flex": "1 1 15%",
/* Shorthand property specifying flex-grow, flex-shrink, and flex-basis. */
"min-width": "300px",
"margin": "3px",
"padding": "3px",
"background-image": "url(GT2.jpg)",
"background-position": "bottom",
"background-repeat": "no-repeat"
});

$('aside').css ({"background": "#D9853B", "flex": "1 1 15%", "min-width": "300px", "padding": "3px", "margin": "3px"});

$('details').css ({"font-family": "nmfont5",
"font-size": "20px"
});

$('#content').css({
"min-height": "500px",
"background": "#74AFAD",
"flex": "2 1 70%",
/* Shorthand property specifying flex-grow, flex-shrink, and flex-basis. */
"margin": "3px",
"padding": "13px",
"font-family": "nmfont3",
"font-size": "20px"
});

$('#content::first-letter').css ({
"font-size": "42px",
"color": "red"
});

$('#lastLine').css ({
"font-family": "nmfont1",
"font-size": "25px",
"text-align": "center"
});

$('footer').css ({"background": "#707070",
"min-height": "50px",
"margin": "3px",
"padding": "3px",
"text-align": "center"
});
/************************************************************************/
/* When the page is resized, use the styles below. Notice we order items*/
if (window.matchMedia('(max-width: 640px)').matches)
{

 $('#flexContainer').css ({"flex-flow": "column wrap"
/* Shorthand property specifying flex-direction and flex-wrap */
});

$('header').css ({
"min-height": "75px"
});
    

$('nav').css ({
"min-height": "50px",
"order": "1"
});

$('aside').css ({
"min-height": "50px",
"order": "2"
});

$('#content') ({
"min-height": "500px",
"order": "3"
});
    
$('footer').css({
"order": "4",
"min-height": "25px"
});
    
}