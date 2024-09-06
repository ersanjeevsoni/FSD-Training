//======================= Macrotask queue  or call back queue and microtask queue or promise queue
//===================promise: it is an object and will generate something (mean copletion or failure) of an asynchronous function mean it is the solution when were not using settimeout and it is better solution of call back so it is called inversion of control =============

//==========================JSON rules==================

// all should be in "" and key should be in string not any number and no , at the last key value pair=======

// Npte: when have to communicate in terms of API then data will be JSON formate earlier was in XML or others.

//===================async function => promises => fetch or call API==========================================
//The fetch() method of the Window interface starts the process of fetching a resource from the network, returning a promise that is fulfilled once the response is available.The promise resolves to the Response object representing the response to your request.


/* const url="https://api.github.com/users/mojombo";
const options={};
fetch(url,options); */

//====================================fetch response using then and catch ===================

/* const url="https://api.github.com/users";
const options={};
const pr = fetch(url,options);

const successCB=(res)=>{
    console.log("success--->", res);
}
const errorCB=(res)=>{
    console.log("fail---->",res);  
}
pr.then(successCB).catch(errorCB); */


//======================================= get data and conver in to json on the browser=============
// const url="https://api.github.com/users";
// const pr = fetch(url);

// const successCB=(res)=>{
//     console.log("success--->", res);
    //const pr2=res.json(); // here it returs a promise.
     //pr2.then(print); //to convert into exact json format using call back
//    pr2.then((data)=>console.log("final dat",data)); //to convert into exact json format usnig arrow
// }
//pr.then(successCB);
/* function print(data){
    console.log("final data---",data); 
} */
//====or===
/* const print=(data)=>{
    console.log("final data---",data); 
} */
/////===========================modern way=======
/* const url="https://api.github.com/users";
const pr = fetch(url);
pr.then((res)=>{
    console.log("success--->", res);
    const pr2=res.json(); 
    pr2.then((data)=>console.log("final dat",data));
     });
 */
     //========================================display data of fetched API example=============

    const getdata=()=>{

        const val= document.getElementById("search_id").value || 'ersanjeevsoni';
        fetch(`https://api.github.com/users/${val}`).then((res)=>{
                 res.json().then((data)=>{
                     display(data); // this one is when using seperated function to keep code seperate
                   
                     // const myJSON = JSON.stringify(data); // to convert json data to object
                    // document.getElementById("display").innerText= myJSON;
                        

                    // will not work bcoz we converted into srting
                    // document.getElementById("display").innerText= myJSON[0].login; 
                     //document.getElementById("display").innerText= data[0].login; // so use here only data
                 })
        });
    }
    getdata();

/*     function display(data){
        //when we sending data on html tag
        // document.getElementById("display").innerText= data[0].login;
           
        // but when we are creating our own element through JS  then 

        // first getting parent tag
        const parent=document.getElementById("display");
       
       // creating h4 tag for index 0
        const title1=document.createElement("h4");
        title1.innerText=data[0].login;
        parent.appendChild(title1);
     
        // creating h4 tag for index 0
        const title2=document.createElement("h4");
        title2.innerText=data[1].login;
        parent.appendChild(title2);
    } */

        function display(data){
        const parent=document.getElementById("display");

            console.log(data);

            const title=document.createElement("h4");
            // title.innerText=data.login;
            title.innerHTML=`${data.login} <span style="color:red">(${data.bio})</span>`
            title.setAttribute("class","card-title");
            parent.appendChild(title);

            const image=document.createElement("img");
            image.setAttribute("src", data.avatar_url);
            image.setAttribute("class", "card-img");
            parent.appendChild(image);
            clearInterval();    
        }