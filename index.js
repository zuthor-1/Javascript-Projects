console.log("hello 831 \nworld");
//  document.write("hiiii");
//  console.clear();
//  alert("me");      
var num=4;
var b="abhay";
var a=true;
var c={abhay:1,singh:2};
var d=[1,2,3];
var e=null;
var f=undefined;


console.log(num,b,a,c,d,e,f);

// function clicked()
// {console.log("the button was clicked");}
// window.onload= function(){console.log("document is loaded!!") }

      
// firstcontainer.addEventListener('click',
// function(){
// document.querySelectorAll('.container')[1].innerHTML="<b>hello world</b>"
// console.log("hello")})
  
      
let p= document.querySelectorAll('.container')[1].innerHTML;
let q= document.getElementsByTagName('.container');
console.log(p , q);
firstcontainer.addEventListener('mouseup',
function(){
    
document.querySelectorAll('.container')[1].innerHTML=p;
console.log("unclicked!!")})
  

firstcontainer.addEventListener('mousedown',
function(){
document.querySelectorAll('.container')[1].innerHTML="<b>hello world</b>"
console.log("hold clicked!!")})

