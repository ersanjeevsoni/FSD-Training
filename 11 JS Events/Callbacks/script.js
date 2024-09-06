//in memory allocation- function processes once comes but execute line one by one
// in global or function execution context ..memory allocation and access ..see through below example

// see First class citizen: function are first-class-citizen in js
//In JavaScript, functions are not just pieces of code that perform tasks; they are first-class citizens of the language. This means that functions enjoy a special status, they can be treated like any other variable in JS. This gives functions a special status, similar to other data types like numbers and strings.

/* let hello=()=>{
console.log("hello");
}
let greet=()=>{
    console.log("welcome");
    }
console.log("start");
hello();
greet();
console.log("end"); */

//------callbacks & HoF---------------------------------------------------

//=============first way============
/* printOnscreen=(x)=>{
    console.log(x)
}
    // sum is having a control 
function sum(a,b){
    const ans=a+b;
    return ans;
}
const res=sum(12,23);
printOnscreen(res); */

//==========second way===========
// prinonScreen = callback and function sum is high order function because now sum is under control prinonScreen.

/* printOnscreen=(x)=>{
    console.log(x)
}
function sum(a,b,callBK){
    const ans=a+b;
    callBK(ans);
}
//inmverson of control
sum(12,234, printOnscreen); */


//------------------third way---------------------
printOnscreen=(x)=>{
    console.log(x)
}
function sum(a,b){
    const ans=a+b;
    return ans;
} 
printOnscreen(sum(12,45)); // here sum will not be either call back or HOF.

// note : there is callback then there will be higher order function (HOF) but not in case of callback, HOF may be there.

//=====================ITERATION methods====================
//forEach, map, filter and reduce

// const arr=['abahy', 'vilad', 'saman'];
/* for(let i in arr){
    console.log(i)
} */ // for(in) will give index value in case of array and in case of object, gives key as output

/* 

 // for(of) will give value

const arr=['abahy', 'vilad', 'saman'];
function myPrint(elem, indx, arr){
    console.log(elem, indx, arr)
}
for(let i of arr){
    myPrint(arr[i], i, arr);
}
 */
//===========using foreach==== 
//The forEach() method calls a function for each element in an array and the forEach() method is not executed for empty elements.

/* const arr=['abahy', 'vilad', 'saman'];
function myPrint(elem, inde=x){
    console.log(elem, indx)
}
arr.forEach(myPrint); */
// note: in case of foreach, first parametr will be considered always value and second index and will be run till n number of array member and for each does not support return inside the callback while map supports.

/* const arr=['abahy', 'vilad', 'saman'];
function myPrint(elem, indx){
    console.log("Hello",elem, indx)
    return elem + "!";
}
// arr.forEach(myPrint);
//const res=arr.forEach(myPrint); // return undefined

//===============map ======================================
map() creates a new array from calling a function for every array element.
map() does not execute the function for empty elements.
map() does not change the original array.

const res=arr.map(myPrint);  // supports return insdie call back
console.log(res); */

//==============filter===============

/* const arr=[3,5,6,3,56,7,5];

function myPrint(elem){
    console.log("Hello",elem)
    if(elem%2!=0){
    return true;
}
else{
    return false;
}
}
// filter :- creates a shallow copy and return a new filtered array but does not change the original array.
const res=arr.filter(myPrint);
console.log(res); */

//======filter assignment================================

const arr=["abc", "cd", "de", "ef", "hi", "mn"];
function output(val){
    for(i of val){
        if(i=='a' || i=='b' || i=='h'){
            return true;
        }
    }
    return false;
}
const res=arr.filter(output);
console.log(res);

