import React from "react";
import ReactDOM from "react-dom/client";


const root = ReactDOM.createRoot(document.getElementById('root'));

const Logo  = () =>{
    return(
        <img style={
            {
                width:"30px",
                marginLeft : "20px",
                marginTop : "20px"
            }
        }
        src="https://cdn-icons-png.flaticon.com/512/7799/7799536.png" alt="image"></img>
    );
}

const UserIcon  = () =>{
    return(
        <img 
        style={{
            width : "20px",
            marginLeft : "2px",
        }
        }
        src="https://cdn-icons-png.flaticon.com/128/456/456212.png" alt="image"></img>
    );
}

const Searchbar = () =>{
    return(
        <input
        style={
            {
                width:"350px",
                height:"30px",
                margin:"20px"
            }
        }></input>
    )
}
const HeaderComponent = ()=>{
    return (<div style={
        {backgroundColor: 'blue',
        width : "500px"
    }}>
        <Logo />
        <Searchbar />
        <UserIcon />
    </div>
    )
}
// const NameA = ()=> <h1>Namaste React</h1>
// const HeadElement = ()=>{
//     return(
//         <div>
//             <NameA />
//             <NameA />
//         </div>
//     );
// }


root.render(<HeaderComponent/>);