import React, { useEffect, useState } from 'react'


function SearchPage() {
    const [arr,setArr]=useState([]);

    const getdata=()=>{
        const pr=fetch("https://dummyjson.com/users");
        pr.then((res)=>{
      res.json().then((data)=>{
        setArr(data.users);
        console.log(data.users);
      })
        }).catch(console.log);
    }
useEffect(getdata,[]);
  return (
    <div>
           {/* <h3>{JSON.stringify(arr)}</h3> */}
            {/* //optoinal chaining ? */}
            <h2>{arr[0] && arr[0].firstName}</h2>
            {/* above code was used before es6 */}
            <h2>{arr[1]?.firstName}</h2>
            {/* //forEach not retun on page so use map */}
            {
              arr.forEach((ele)=>{
                console.log(ele.firstName);
              return ele.firstName
              })
            }

            {
                arr.map((elem)=>{
                     return <h1>{elem.firstName}</h1>
                })
            }

           

    </div>
  )
}

export default SearchPage