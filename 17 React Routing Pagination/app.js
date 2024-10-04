import React from "react";
import ReactDOM from "react-dom/client";
import Search from "./component/search";
import SearchPage from "./component/searchPage";
// import Search from "./component/search";

const parent=document.getElementById("root");
const root=ReactDOM.createRoot(parent);


const App=()=>{
    return (
        <div>
            <h1>Async and Data fetch API</h1>
           {/* <Search></Search> */}
           <SearchPage></SearchPage>

        </div>
    );
}
root.render(<App/>);
