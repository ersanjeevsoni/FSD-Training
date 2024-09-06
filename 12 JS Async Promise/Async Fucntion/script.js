//===============================================Asynchronous Function==================
/* console.log("Start");
const temp=()=>{
    console.log("temp");
}
const handleClick=()=>{
    for(let i=0; i<1000; i++){
            for(let j=0; j<100;j++){
               console.log("working..."); 
            }
    }
    document.getElementById("display").innerText="Done!"
}
temp();
console.log("end"); */
// note your process will block , no action can be done so it happens generaly. This happens cause of  asynchronous programing. just see above program.

//========================================using set time out================

/* const cb=()=>{
    console.log("complted!");
}
const time=10000;// in millisecond
setTimeout(cb,time); */
//==============================================addEventListner===========

/* function cbE(){
    const p=document.getElementById("display");
    p.innerText="Done!"
}
const p=document.getElementById("btn");
const type="click"; // this is a call back
p.addEventListener(type, cbE); */

//==========================Event Loop using set timeout==need to understand how GEC occouping memory====
/*     console.log("start");
temp=()=>{
    console.log("temp");
}
setTimeout(temp,1000);
    console.log("end");  */
    // output start, end, temp , in GEC start excutes  ans skip temp function bcoz its defination not execution. as soon as debugger reach on settimeout then see callback function temp if awaited then move to end then temp
    
    
 //============================  another program 02=======
/*  
 console.log("start");
 hello=()=>{
    console.log("hello");
    done=()=>{
        console.log("--done hello--");
    }
    setTimeout(done, 5000)
 }

 world=()=>{
    console.log("world");
    done=()=>{
        console.log("--done world--");
    }
    setTimeout(done, 1000)
 }
 hello();
 world();
 console.log("end"); */
 
 //=========================passing callbakc - for each: need to pass the call back functino ==============
/*  const arr=['a','b','c','d']
const cb=(ele,indx)=>{
    console.log(ele,indx)
}
 arr.forEach(cb) */
 //================in this case , we can pass directly call back defination to foreach=====
/*  const arr=['a','b','c','d']
  arr.forEach((ele,indx)=>{
    console.log(ele,indx)
}) */







    