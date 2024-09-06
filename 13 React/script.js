
//======================plain JS==============
/* const parent=document.getElementById('parent');

const title=document.createElement('h3')
title.innerText="Shoping List";
parent.appendChild(title);

const list=document.createElement('ul')
parent.appendChild(list);
list.style.listStyleType="square";
// list.style.backgroundColor='red'

const veg=document.createElement('li');
veg.innerText="Vegetables";
list.appendChild(veg);
veg.style.margin='10px';

const fruit=document.createElement('li');
fruit.innerText="Fruits";
list.appendChild(fruit);
fruit.style.margin='10px';


const drink=document.createElement('li');
drink.innerText="Drink";
list.appendChild(drink);
drink.style.margin='10px'; */

//======================using React==============
//const realRoot=document.getElementById('parent'); //JS Dom element

//const root = ReactDOM.createRoot(realRoot);  //connect JS DOM to React DOM

//const heading = React.createElement("h4", {}, "Shopping List"); 
// order to pass, type, properties , childern(note: childern may be string,array or reactelement)
// root.render(heading);

//============use react  to creat unordered list with single list item=======

//get the parent
/* const realRoot=document.getElementById('parent');

const root=ReactDOM.createRoot(realRoot);

const item1=React.createElement('li',{},'vegetable');
const list=React.createElement('ul',{}, 'item1')
root.render(list); */

//============use react  to creat unordered list with multi list item=======
/* const realRoot = document.getElementById('parent');
const root = ReactDOM.createRoot(realRoot);

const item1 = React.createElement('li', { style: { color: 'red', fontSize:'18px' } }, 'vegetable');
const item2 = React.createElement('li', {}, 'fruits');
const item3 = React.createElement('li', {}, 'drinks');
const item4 = React.createElement('li', {}, 'sweets');

const list = React.createElement('ul', { type:'square'}, [item1, item2, item3, item4]);

const heading = React.createElement('h4', {}, 'Shoping List');

const container=eading = React.createElement('div', {}, [heading,list]); */

// can not pass multiple element at the time of render because can render only one root element. so created container div element.
// root.render([heading,list]); // instead of this on follow bottom
// root.render(container);

//=================understanding react ==================

// const item4 = React.createElement('li', {}, 'vegetable'); // just what is type we are getting. It returns object, see in browser output.

// console.log(item4);
//==================for the above code for item4, below code is same got in the browser=======
/* const item4={
$$typeof: Symbol(react.element),
key: null,
props: {children: 'vegetable'},
ref: null,
type: "li",
_owner: null,
[[Prototype]]: Object
} */

//==========================jsx=========================
//JSX is a syntax extension for JavaScript that lets you write HTML-like markup inside a JavaScript file.
const realRoot = document.getElementById('parent');
const root = ReactDOM.createRoot(realRoot);
// const heading = React.createElement('h4', {}, 'Shoping List'); // this pattern is follow by jsx

// will not understand so need to do transpile that is done by babel
// add babel cdn link and change type of script.js file text/javascript to type=text/babel
/* const heading=<h4>Shoping List</h4>
const li1=<li>Sweet</li>
const li2=<li>Drink</li>
const li3=<li>Fruit</li>
const li4=<li>Vegetable</li>
const ul=(
        <ul>
        {li1} {li2} {li3} {li4}
        </ul>
        );
const container=(
    <div>
        {heading}{ul}
    </div>
)
root.render(container); */
//===================================now above code in modern react====
const container=(
    <div>
    <h4 id='title'>Shoping List</h4> 
    <ul>
    <li className="list-item">Sweet</li> 
    <li className="list-item">Drink</li>
    <li className="list-item">Fruit</li>
    <li className="list-item">Vegetable</li>
    </ul>
    </div>
);
root.render(container);