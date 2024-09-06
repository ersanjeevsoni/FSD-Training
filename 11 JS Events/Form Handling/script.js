// when we split the string then output will be array

/* validmail=(e)=>{
    const value=e.target.value;
    const res=value.split("@");
    console.log(res);
    if(res[1]=="abes.org"){
  document.body.style.backgroundColor="green";
    }
    else{
        document.body.style.backgroundColor="red";
    }

}

validnumber=(e)=>{
    const value=e.target.value;
   if(value>=24000 && value<25000){
    alert("roll no valid");
   }
else{
    alert("invalid roll no")
}
} */

// instead of handleing each child , handle parent that is event delegation mean handle efficiently.


const handlechange=(e)=>{
    // to hold the default behavior of the form
    e.preventDefault();
    const nameVal=e.target[0].value;
    const emailVal=e.target[1].value;

    // name validation
    if(nameVal=="" || nameVal==null){
        alert("invalid name");
    }
    //email validaion
    const res=emailVal.split("@");
    if(res[1]!="abes.org"){
        alert("invalid email");
          }

          else{
            alert("valid details submitted");
          }

} 