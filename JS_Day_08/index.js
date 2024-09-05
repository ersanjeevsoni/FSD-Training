
//js is high level language mean understable by human designed by Breden Erich in 1995 developed V8 Engine but later Ryan Dahl created Node Js with combination of C++ and V8 engine to provide run time enviorment to run the js code outside the browser.
// console.log("Hello, welcome on my page!");

//pass n number of arugments
// console.log("Sanjeev",32,"ABES","GZB",201009);


//comments - single and multi line
// console.log("Hello World");

//if want to run only one time Hello World then comments shift+alt+a /*---*/ or select all lines and press ctrl+/

/* console.log("Hello World");
console.log("Hello World");
console.log("Hello World"); */

//javascript variables :- var | let | const

/* var name="Sanjeev"; // having var keyword..var variables are hoisted with a default value of undefined, which makes them accessible before their line of declaration.

let name1="Sanjeev1";
const name2="Sanjeev2";
console.log(name,name1,name2); */
 //js loosly typed language no need to define type or any keyword
 //declaration int a;
 // initilization int a=2; mean when value passed;
// age =32;
// console.log(age);

// data types primitive and non primitive(object reference)
//primitive:- number, srting, boolen , null, undefined, bigint, symbol
//non-primitive: object
let d=null; 
// type of null is object and it is a bug in js but unable to remvoe it because everything is oject in js where may loost lots of functionality so we contine with null as object
let e=undefined;
let f=BigInt(24214124);
let g=Symbol("Key_of_object"); //used to create to key in object
// console.log(e,f,g);
// console.log(typeof g, typeof d);

//see the diiffrence between null and undefined

//operators
//arithemetic operators
//incrment and decrement

//pre - first update in momory then console
//post - first update in console then memory
let a=10;
let b=20;
let c=30;
/* console.log(a++,b--);
console.log(a,b);
console.log(++a,--b); */
// console.log(a-- + --b + --a + b++ + c-- + a++ + ++b + --c - c++);

//assigment operators
// a=a+10;
// a+=10;
let x=BigInt(6746746476);
let y=Symbol;
console.log("hoooo:"+typeof y);
// console.log(a);

//comparision operators - gets true and false'
let name1="ram";
let name2="mohan";
// console.log(name1>name2)

//logical - short -circuit evalution && , || , !==
console.log(10<9 && a++ < b);
console.log(a);






















