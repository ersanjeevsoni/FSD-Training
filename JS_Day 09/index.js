//js Engine - just in time(JIT) compilation(not a interpreted or compile language)
//echma script
//es version- es 6th(in 2015)
// var- redeclare and reassign
// let- not redeclare and reassign
// const-  not both redeclare and reassign
//data types- primitive:- store value and non-primitive:- store references

//type coercion:- autometic ot impliciit coversion of values from one data type to another
// console.log("sanje" + "soni");
//String
// console.log(10 + '20'); 
// 1020
//number
// console.log(10 - '2');  
//8 but only happens in case of string + operator overload but in the other operator, result will be generated
//see futher example to more understand type coercion
// let ans = 10 + "20";
// console.log(ans);
// ans = "a" + "b";
// console.log(ans);
// ans = 'c' * 'd';
// + op is overloded but not any other operator
// console.log(ans); 


// diffeence == and ===
//loose eqality using == has so many rules but in general, follow value in comparision

// diffeence != and !==

//-------------------------template literals-------------------------
const username="xyz";
const greeting="hello!";

//before es6
const templte= greeting + " , " + username;
console.log(templte);
//using template literals
console.log(`${greeting} , ${username}`)

//----------Function----------------------------

//function defination and declaration
//syntax:
function myName(str="xyz"){
console.log("*********", str);
}
//funiction calling or invocation
// myName(); //undefined when not pass aurgment value
//myName(); //using default value
myName("hey sanjeev"); // passing aurgment str value 

//-----------------defult and return-----------

function sum(x,y,z="8"){
     let res=x+y+z;
    return res;
}

// const ansd=sum(10,20,30); // in case of return function call first with aurgmetns then get the result from retur nd print o/p
// console.log(ansd);
const ansd=sum(45,67);
console.log(ansd); //NaN outpout so use defualt value for third parameters


//----------------functino assignement and expression----------------


// first way to see function writing-------parameters and arugments 
function add(a,b){
    console.log(a+b);
}
add(5,6);
//in above program a and b behaves as parameters and 5 and 6 behaves as aurgments

//function can be assigned to a variable just see..second way
const nameWorld=function abcd(){
    console.log("hey bany");
}
nameWorld();

//--------annonyms way -third way-------

const nameWorld1=function (){
    console.log("hey banyyyy");
}
nameWorld1();

//--------function using arrow funnction----fourth way------
const mul=(c,d)=>{
    console.log(c*d);
    }
    mul(5,19);


// diffrence between function declaration(1) and function expression(2,3,4)----------
 // acknowledge as per name and access and hositing..see the web content

 console.log(mno);// can not access before initilization in case of let
 var mno="hello"; //undefined as part in hoisting phase having undefinde default value
//  let mno="hrllo"; 


//--------------------if............else----------
if(1==2){
    console.log(true);
}
else{
    if(6>3){
        console.log(true);   
    }
    else{
        console.log(false);   
    }
}
//--------------------------switch-------------

let age=20;
switch(true){
    case (age>12):
    console.log("not passed");
    break;

    case (age>17):
    console.log("not yet passed");
    break;

    case (age>8):
    console.log("passed");
    break;

    default:
    console.log("invalid");

}

// primitive values are immutable mena can nt chane the value but on address as in real term valid h

//------------------------------------non primitive object-------
const username1="root";

const student = {
    stname:"sanjee",
    age:32,
    0:"address not found",
    div: username1
}
console.log(student);
//------------diffrece acccess using dot and bracket

console.log(student.stname);
//console.log(student.0);// error because with dot notation expecting string type of key
console.log(student[0]);

//--------------access property dyanmic  using []-------
// const key="course";
// const student1 = {
//     stname:"sanjeev",
//     age:32,
//     0:"address not found",
//     course: "web"
// }
// console.log(student1[key]);

//--------------cahnge property dyanmic  using []-------
const key="course";
const student1 = {
    stname:"sanjeev",
    age:32,
    0:"address not found",
    course: "web"
}
console.log(student1[key]);

student1.stname="xyx";
console.log(student1); 
//console.log({...student1}); // to overcome browser issue 

///--------------------delete key or property

delete student1.stname;
console.log(student1);

//-----------array----------------

const arr=['sanjeev', 12, 'gzb', false];
console.log(arr);
//--read value using index
console.log(arr[2]);

//-------------------update and add(risky) the value---------


arr[0]='xyz';
//arr[10]='new city' // item will be added but update the length of array as per the last index but there will be glitch as found empty array 
console.log(arr);

//so just add the element in the use proper method push-------

arr.push('new city');
console.log(arr);

//----------------------------delete is also risky------

//delete arr[0]; // will delete but creat a empty element in array so use pop method

arr.pop();  //removes the last element of the array
console.log(arr);

//-----------------loops( for , for in , for of     )--------------

// const marks=[12,34,45,54,23,54,56,89];
// for(i=0;i<marks.length;i++){
//     console.log(marks[i]);
// }

// const marks=[12,34,45,54,23,54,56,89];
// for(let x in marks){
//     console.log(marks[x]);
    
// }

// The JavaScript for in statement can also loop over the properties of an Array as well as object
// const marks=[12,34,45,54,23,54,56,89];
// for(let x in marks){
//     console.log(marks[x]);
    
// }

// const myDate={
//     name:"sanjeev",
//     age:33,
//     add:"gzb"
// }
// for(let s in myDate){
//     console.log(myDate[s]);
// }

//for ---of 
const marks=[12,34,45,54,23,54,56,89];
for(let x of marks){
    console.log(x);
    
}
// note:- for of does not work in case of object
// const myDate={
//     name:"sanjeev",
//     age:33,
//     add:"gzb"
// }
// for(let s of myDate){
//     console.log(s);
// }

const students=[
{name:"Ajay",city:"Gzb",cgpa:"7.8"},
{name:"Ajay1",city:"Gzb1",cgpa:"8.6"},
{name:"Ajay2",city:"Gzb2",cgpa:"8"}
]
let count=0;
for(let x in students){
    if(students[x].cgpa>=8){
        
        console.log(students[x]);
        count++;
    }
}
console.log(+count+ " students passed");






