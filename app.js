$(".font-face").css("font-family","nmfont1", "src: url('AlegreyaSC-Bold.ttf')");
$(".font-face").css("font-family","nmfont2", "src: url('OleoScriptSwashCaps-Regular.ttf')");
$(".font-face").css("font-family","nmfont3", "src: url('Balthazar-Regular.ttf')");
$(".font-face").css("font-family","nmfont4", "src: url('Artifika.ttf')");
$(".font-face").css("font-family","nmfont5", "src: url('Dynalight-Regular.otf')");



/*Keep several font-family ready */
/*
@font-face {
font-family: nmfont1;
src: url(AlegreyaSC-Bold.ttf);
}
*/
/*
@font-face {
font-family: nmfont2;
src: url(OleoScriptSwashCaps-Regular.ttf);
}
*/
/*
@font-face {
font-family: nmfont3;
src: url(Balthazar-Regular.ttf);
}
*/
/*
@font-face {
font-family: nmfont4;
src: url(Artifika.ttf);
}
*/
/*
@font-face {
font-family: nmfont5;
src: url(Dynalight-Regular.otf);
}
*/
/*

$('body').css({"font-family":"Arial","Helvetica","Sans-Serif"});
$('body').css('font-size: 20px');
$('body').css('background: #EDEDED');
body.css({"CSS property":"value", "CSS property":"value", "CSS property":"value"} );
*/
//$('body').css({"(font-family: Arial)", "Helvetica", "Sans-Serif"});
$('body').css({"font-family": "Arial"});
$('body').css({"font-family": "Helvetica"});
$('body').css({"font-family": "San-Serif"});


$('body').css({"font-size":"20px"});
$('body').css({"background":"#EDEDED"});

/*
body {
font-family: Arial, Helvetica, Sans-Serif;
font-size: 20px;
background: #EDEDED;
}
*/
/*We will use flexbox rules */
/*
#flexContainer {
display: flex;
}
*/
$('#flexContainer').css({"display": "flex"});

/*
header {
background: #EDEDED;
min-height: 100px;
margin: 3px;
padding-top: 13px;
background-image: url(GTImage3.jpg);
background-repeat: no-repeat;
background-size: contain;
color: red;
text-align: center;
font-family: nmfont1;
font-size: 60px;
}
*/
$('header').css({"background": "#EDEDED", "min-height": "100px", "margin": "3px", "padding-top": "13px", "background-image": "url(GTImage3.jpg)",
"background-repeat": "no-repeat",
"background-size": "contain",
"color": "red",
"text-align": "center",
"font-family": "nmfont1",
"font-size": "60px"
  });

/*
h2 {
padding-top: 40px;
color: blue;
font-family: nmfont2;
font-size: 20px;
}
*/
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

/*
nav {
background: #D9853B;
flex: 1 1 15%;
 Shorthand property specifying flex-grow, flex-shrink, and flex-basis. 
min-width: 300px;
margin: 3px;
padding: 3px;
background-image: url(GT2.jpg);
background-position: bottom;
background-repeat: no-repeat;
}
*/

/*
aside {
background: #D9853B;
flex: 1 1 15%;
 Shorthand property specifying flex-grow, flex-shrink, and flex-basis. 
min-width: 300px;
padding: 3px;
margin: 3px;
}
*/
$('aside').css ({"background": "#D9853B", "flex": "1 1 15%", "min-width": "300px", "padding": "3px", "margin": "3px"});

    
    
/*
details {
font-family: nmfont5;
font-size: 20px;
}
*/
$('details').css ({"font-family": "nmfont5",
"font-size": "20px"
});

//#content {
//min-height: 500px;
//background: #74AFAD;
//flex: 2 1 70%;
///* Shorthand property specifying flex-grow, flex-shrink, and flex-basis. */
//margin: 3px;
//padding: 13px;
//font-family: nmfont3;
//font-size: 20px;
//}
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
/*
#content::first-letter {
font-size: 42px;
color: red;
}
*/
$('#content::first-letter').css ({
"font-size": "42px",
"color": "red"
});
/*
#lastLine {
font-family: nmfont1;
font-size: 25px;
text-align: center;
}

*/
$('#lastLine').css ({
"font-family": "nmfont1",
"font-size": "25px",
"text-align": "center"
});

/*
footer {
background: #707070;
min-height: 50px;
margin: 3px;
padding: 3px;
text-align: center;
}

*/
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
/*
#flexContainer {
flex-flow: column wrap;
 Shorthand property specifying flex-direction and flex-wrap 
}
*/
 $('#flexContainer').css ({"flex-flow": "column wrap"
/* Shorthand property specifying flex-direction and flex-wrap */
});
      
/*
header {
min-height: 75px;
}
*/
$('header').css ({
"min-height": "75px"
});
    
/*
nav {
min-height: 50px;
order: 1;
}
*/
$('nav').css ({
"min-height": "50px",
"order": "1"
});
    
/*
aside {
min-height: 50px;
order: 2;
}
*/
$('aside').css ({
"min-height": "50px",
"order": "2"
});
/*
#content {
min-height: 500px;
order: 3;
}
*/
$('#content') ({
"min-height": "500px",
"order": "3"
});
    
/*
footer {
order: 4;
min-height: 25px;
}
*/

$('footer').css({
"order": "4",
"min-height": "25px"
});
    
}