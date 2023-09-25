import { restaraunts } from "../constants";
import RestaurantCard from "./card";
import { useState } from "react";

function filterRestaurantList(name){
    if(name.trim() === ""){
        return restaraunts;
    }
    return restaraunts.filter((restaurant)=>{
        let resName = restaurant.data.name.toLocaleLowerCase();
        if(resName.includes(name.toLowerCase())){
            return true;
        }
        else{
            return false;
        }
    })
}

const Body = () =>{
    const[restaurantList,setRestaurantList] = useState(restaraunts);
    const[searchText , setSearchText] = useState("");
    return(
        <>
        <input type="text" className="search-box" value={searchText}
        onChange={(e)=>{
            setSearchText(e.target.value)
            // setRestaurantList(filterRestaurantList(e.target.value));
        }}/>
        <button className="search-btn"
        onClick={()=>{
            setRestaurantList(filterRestaurantList(searchText));
        }}
        >Search </button>
        <div className="restaurant-list">
            {
            restaurantList.map((restaurant)=>{
            return <RestaurantCard {...restaurant.data} key={restaurant.data.id}/>;
            })
        }
        </div>
        </>
    )
}

export default Body;