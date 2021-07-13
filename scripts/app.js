// set up text to print, each item in array is new line
var aText ="Hello There,"
var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText.length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines
 
var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row
var bText="Technology Terrain is the hand you would need to help you fill on the tech side of your business , So just foucs on your side and leave everything to us" 

var bSpeed = 100; // time delay of print out
var bIndex = 0; // start printing array at this posision
var bArrLength = bText.length; // the length of the text array
var bScrollAt = 20; // start scrolling up at this many lines
 
var bTextPos = 0; // initialise text position
var bContents = ''; // initialise contents variable
var Row; // initialise current row
var contact=document.getElementById("contact-us")
function typewriter()
{
 sContents =  ' ';
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("hello");
 

 destination.innerHTML = sContents + aText.substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != 1 ) {
   iArrLength = aText.length;
   setTimeout("typewriter()", 500);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
 if (destination.innerText==aText+"_"){
    destination.innerHTML=aText
    typewriterb();
 }
}
function typewriterb()
{
 sContents =  ' ';
 bRow = Math.max(0, bIndex-bScrollAt);
 var destination = document.getElementById("welcome");
 
 destination.innerHTML = bContents + bText.substring(0, bTextPos) + "_";
 if ( bTextPos++ == bArrLength ) {
  bTextPos = 0;
  bIndex++;
  if ( bIndex != 1 ) {
   bArrLength = bText.length;
   setTimeout("typewriterb()", 500);
  }
 } else {
  setTimeout("typewriterb()", iSpeed);
 }
  if (destination.innerText==bText+"_"){
    destination.innerHTML=bText
    setTimeout(function (){document.getElementById("afterwelcome").classList.remove("hide")}, 1500);
    
 }
}
window.onload =typewriter



document.getElementById("leftarrow").addEventListener("click",function(){
  slidermove(1)
})
document.getElementById("rightarrow").addEventListener("click",function(){
  slidermove(2)
})
var theslidevalue=305
if (screen.width<769){
    document.getElementById("slide").style.transform="translate3d(-3200px, 0px, 0px)"
    theslidevalue=250
}
function slidermove(way){
var slidevalue = parseInt(document.getElementById("slide").style.transform.substring(12, 17))
  if (way==1){
      slidevalue=(slidevalue) + theslidevalue
      document.getElementById("slide").style.transition="transform 1s"
      document.getElementById("slide").style.transform="translate3d("+ slidevalue +"px, 0px, 0px)"


  }
  else if (way==2){
      slidevalue=(slidevalue)-theslidevalue
      document.getElementById("slide").style.transition="transform 1s"
      document.getElementById("slide").style.transform="translate3d("+ slidevalue +"px, 0px, 0px)"
  }

}



var toup=document.getElementById("to-up")
var whenscroll = function(){
    var y=window.scrollY;
    if (y >= 100) {
      toup.classList.remove("hide")
      toup.classList.add("letsgo")        
    }
    else{    
      toup.classList.add("letsgo")      
      toup.classList.add("hide")
    }
}
window.addEventListener("scroll", whenscroll);


$(function () {
  $('[class="lang-icon"]').tooltip()
})