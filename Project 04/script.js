
function handlechangeName(e) {
    const value=e.target.value;
    const msg1=document.getElementById("name");
    msg1.innerText=`${value}`;
    document.getElementById("nameMsg").innerHTML=value;
    
}

function handlechangeEmail(e) {
    const value=e.target.value;
    const msg2=document.getElementById("email");
    msg2.innerText=`${value}`;
    document.getElementById("emailMsg").innerHTML=value;
    
}


function handlechangePwd(e) {
    const value=e.target.value;
    const msg3=document.getElementById("password");
    msg3.innerText=`${value}`;
    document.getElementById("pwdMsg").innerHTML=value;
    
} 


handlechangePic=(e)=>{
    const fileval=e.target.files[0];
    console.log(fileval);
    const val=URL.createObjectURL(fileval);
    const msg4=document.getElementById("fileImg");
    msg4.setAttribute("src", val);


}



/* 
const handlechange=()=>{
    const nameVal=document.getElementById("name").value;
    document.getElementById("nameMsg").innerHTML=nameVal;

    const emailVal=document.getElementById("email").value;
    document.getElementById("emailMsg").innerHTML=emailVal;

    const pwdVal=document.getElementById("password").value;
    document.getElementById("pwdMsg").innerHTML=pwdVal;

} */