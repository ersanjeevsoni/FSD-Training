/* const parent=document.getElementById("parent_tag");
const child_tag=document.createElement("h3");
child_tag.innerText="Car List";
parent.appendChild(child_tag);
child_tag.style.color="#F04"

const list=document.createElement("ul");
child_tag.appendChild(list); */

// Array of car names
/* const cars = ["volvo", "nissan", "tata", "honda", "mahindra"];

cars.forEach((car) => {
    const list_item=document.createElement("li");
    list_item.innerText=car;
    list.appendChild(list_item);
    list_item.style.textTransform="uppercase";
    list_item.style.listStyleType="square";
    list_item.style.color="blue";
}); */

//=========================================Rewrite the above code using React JS===========
/* const rootParent=document.getElementById("parent_tag"); //DOM element
const root=ReactDOM.createRoot(rootParent);
const heading=React.createElement("h3",{},"Course Index"); */
// root.render(heading); //render only heading

//============now create course list=============

/* const c1=React.createElement("li",{style:{color:'red', fontSize:'18px'}},"Web Designing");
const c2=React.createElement("li",{},"Graphic Designing");
const c3=React.createElement("li",{},"Android Development");
const c4=React.createElement("li",{},"VFX and Editing"); */
// const c5=React.createElement("li",{},"Full Stack Development");
// console.log(c5); // getting object in browser so let create another course using react way
/* const c5={
$$typeof: Symbol(react.element),
key: null,
props: {children: 'Full Stack Development'},
ref: null,
type: "li",
_owner: null,
[[Prototype]]: Object
} */ // getting error
/* const list=React.createElement("ul",{type:'square'},[c1,c2,c3,c4]);
root.render([heading, list]); // render multiple elements heading and list */

//=======================React using babel==================
/* const rootParent=document.getElementById("parent_tag"); //DOM element
const root=ReactDOM.createRoot(rootParent);
const heading=<h2>Updated Course Index</h2>
const li_item1=<li>MERN</li>
const li_item2=<li>MEAN</li>
const li_item3=<li>JAVA</li>
const li_item4=<li>PYTHON</li>
const li_item5=<li>ANDROID</li>

const ul=(<ul>
    {li_item1}  {li_item2}  {li_item3}  {li_item4}  {li_item5}
</ul>)
const container=<div>
    {heading}{ul}
</div>
root.render(container); */
//=============short code for the above code=============
const rootParent = document.getElementById("parent_tag"); //DOM element
const root = ReactDOM.createRoot(rootParent);
const container =
    <div>
        <h2>Updated Course Index</h2>
        <ul>
            <li>MERN</li>
            <li>MEAN</li>
            <li>JAVA</li>
            <li>PYTHON</li>
            <li>ANDROID</li>
        </ul>
    </div>
root.render(container);







