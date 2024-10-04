import React, { useState } from 'react'

function Search() {
    //arrya destructering ;- array follow the position while object kay value pair 
    const [text,setText]=useState();
   
    const hanlde=(e)=>{
   
         setText(e.target.value);
         console.log(text);
    }
    let [count,setCount]=useState(0);
    const increment=()=>{
    
 setCount(count+1);
    }
  return (
    <div>
        <input type='text' onChange={hanlde}/> 
       <button>Search</button>
       <button onClick={increment}>count</button>
       <hr></hr>
       <h2>{text}</h2>
       <h3>{count}</h3>
    </div>
  )
}

export default Search