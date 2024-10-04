import React from "react";
import ReactDOM from "react-dom/client";

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);

//React Element
/* const Heading=<h1>Welcome to React JS!!!</h1>;
root.render(Heading); */

//React Component

/* const Msg=()=>{
    return <h2>Thanks to learn</h2>
}
root.render(<Msg/>); */
//--------------------Nesting React Component---------

const Msg=()=>{
    return <h2 className="h1">Thanks to learn</h2>
}

/* const Card=()=>{
    return(<div>
        <div id="card">
         
            <div className="box">
                <h2>Java</h2>
                <p>Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible</p>
            </div>

            <div className="box">
                <h2>Python</h2>
                <p>Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected.</p>
            </div>

            <div className="box">
                <h2>PHP</h2>
                <p>PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995.</p>
            </div>

        </div>
    </div>
    );
} */

    // now make above code dynamic using parameter

    const Box = ({course_name, course_par}) => {
        return(
            <div className="box">
               <h2>{course_name}</h2>
               <p>{course_par}</p>
               </div>
        )
    }
    const Card=(property)=>{
    
        return(
            <div id="card">
        <Box course_par='ava is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible' course_name='Java' />
        <Box course_par='Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected' course_name='Python' />
        
        <Box course_par='PHP is a general-purpose scripting language geared towards web development. It was originally created by Danish-Canadian programmer Rasmus Lerdorf in 1993 and released in 1995.' course_name='Dot Net' />
            </div>
        );
    }
//destructering in JS
    const student={
        name:"Ajay",
        city:"Delhi"
    }
    //here is destructering in js for the above code.
    const {name}=student;
    console.log(name);

const App=()=>{
    return (
        <div>
            {/* <h2 className="h2">Welcome to React JS!!!</h2> */}
            {/* <Msg/> */}
            
            {/* both are the same but use as Component like Element */}
            {/* {Msg()} */}
            <Card/>

        </div>
    );
}
root.render(<App/>);
