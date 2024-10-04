import React from "react";
import ReactDOM from "react-dom";

// to create universal app*.js file, we use bundler like webpack instead of writing long code in single file
// and webpack vite but hard to setup so another one is parcle that is easy to use.
const parent=document.getElementById("parent");
const root=ReactDOM.createRoot(parent);

// const element=React.createElements("h1",{},"hello from React API");

//React Element
// const title=<h1>Hello from JSX</h1>
// root.render(title);

//React Component
const Title=()=>{
    return <h1>Hello from React JS</h1>
};

root.render(Title());
// root.render(<Title/>);
