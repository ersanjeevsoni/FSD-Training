function handleNamekeyup(e){
const val=e.target.value;
    console.log("value:",val);
    const idParnt=document.getElementById("card-name");
    idParnt.innerText=`Name: ${val}`;

    
}


function handleNameKeyDown(e){
    const val=e.target.value;
        console.log("value:",val);
        
    }


    function handlechange(e){
        const val=e.target.value;
            console.log("value:",val);
            
        }