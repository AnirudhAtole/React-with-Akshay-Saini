import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Body from "./component/body";
import Footer from "./component/footer"


const root = ReactDOM.createRoot(document.getElementById('root'));

const AppLayout = ( ) =>{
    return(
        <>
        <Header />
        <Body/>
        <Footer/>
        </>

    )
}

root.render(<AppLayout/>);