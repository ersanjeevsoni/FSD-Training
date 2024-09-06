
//console : retunrn the console object for the window.

// window object: wo represents an open window in a browser.

//document: returns the document object of the window object. Document parent is Window Object.

//html: Document is root of the html.

//-----------------window----------------------

// console.log(document);
// document.write("HEllo");
// console.dir(document);
// in console, you will get childern:HTMLCollection
//HTMLColleciton is an array like colloection(list)

// properties: console, doucment

const student = {
    name: 'sanjeev',
    age: 32
}

// console.log(student);

//some methods of window object

// window.alert("welcome on page");
// window.console.log("welcome on page");

// const ans=prompt("enter your name");
// console.log(ans)

// window.close();
// window.open("https://web.whatsapp.com/");

//----------------introduction DOM------------------

// dom is programming interface forweb documents

// in HTMLCollection have live elements collenction while NodeList contains space and break too. see below

/* childNodes
: 
NodeList(11) [text, h1, text, p, text, script, text, comment, text, script, text]
children
: 
HTMLCollection(4) [h1, p, script, script] */

//---------DOM Manipulation: element selectors------------------

//-------------------get elements by tag name---------------------------
// iterable HTMLCollection
// const result = document.getElementsByTagName("h1");

// return only element or null in case of not available 
// const result = document.getElementById("para");
// console.log(result);

//---------innerHTML and innerText both properrties are available in HTMLCollection so access the properties -----------------

// const result = document.getElementById("para");
/* console.log(result[0].innerText);
console.log(result[1].innerText);
 */

//-----------------modify the properties----------
// const result = document.getElementById("para");
/* result[0].innerText = "Welcome to React Class<b>Day 01</b>";
console.log(result[0]);

result[1].innerHTML = "Welcome to React Class<i>Day 02</i>";
console.log(result[1]); */

//---------------------styling through dom --------------------

// console.log(result[0][1].style);
// result[0].style.backgroundColor = "red";

// result[0] = document.getElementById("para");
// result[0].style.color = "blue";

//----------------diffrent selector methods------
//const result=document.querySelectorAll("h1:first-child")
//console.log(result); // iterable NodeList

//const result1=document.querySelector("div>h1>i");
//console.log(result1); // retunr node


// const result2 = document.getElementsByTagName("li");

// const result2=document.querySelector("ul li:nth-child(5)");

// const result2=document.querySelectorAll("ul li");
// for(let i=0; i<result2.length; i++){
//     result2[i].style.backgroundColor="red";
// }

//--- another way to apply css -------
document.styleSheets[0].insertRule("ul>li{background-color: red !important;}");

//----------------------------attributes------------
const img=document.getElementsByTagName("img");
img[0].setAttribute("alt", "amazon image not found");
img[0].setAttribute("title", "not react");

const para1=document.getElementById("para");
// can add class even have not added in our element 
para1.setAttribute("class", "para");

//===================add element in dom===============
//-----want to add one more p tage at the same node level-----------
//first creat then get the parent  then append  at the location.................

//crerate the element
// const para=document.createElement("p");
// get the parent
// const divTag=document.getElementsByTagName("div");

// add the element at the positon
/* divTag[0].append(para);
console.log(divTag);
para.innerText="loremIspumlore==================";
para.style.backgroundColor="blue"; */



/* const divCrt=document.createElement("div");
const bodyTag=document.getElementsByTagName("body")
console.log(bodyTag);
bodyTag[0].append(divCrt);
divCrt.innerText="loerm ipsum...............................div========================"
divCrt.style.color="red"; */

//append add multiple element but appendchild only one and appned can add normal text while in appendchild will get error.

//==============add multiple child===================================

// const p1=document.createElement("p");
// const p2=document.createElement("p");
// divTag[0].append(p1,p2); //both will be added
//divTag[0].appendChild(p1,p2); //will add only one element
// p1.innerText="loremIspumlore==================********************************";
// p2.innerText="loremIspumlore==================++++++++++++++++++++++++++++";

//can pass normal text without tag
//  divTag[0].append("welcome");
//divTag[0].appendChild("welcome"); // TypeError: Failed to execute 'appendChild' on 'Node': parameter 1 is not of type 'Node'.

//===============================remove element or child========


// const divDel=document.getElementsByTagName("div");
// divDel[0].remove();
//==========or==================
// const divDel=document.getElementsByTagName("div")[0];
// divDel.remove();

//================or removing child in referne of parent===========

/* const divDel=document.getElementsByTagName("div");
const paraDel=document.getElementsByTagName("p");
divDel[0].removeChild(paraDel[0]); */


//==================================events=================

















