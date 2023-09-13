import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'));
const h1 = React.createElement("h1",{
    id:"header",
},"Hello world");
root.render(h1);