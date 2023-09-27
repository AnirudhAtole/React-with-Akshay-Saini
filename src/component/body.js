import RestaurantCard from "./card";
import { useState ,useEffect } from "react";
import { swiggyApi } from "../constants";
import {shimmer} from "./cardsShimmer"

function filterRestaurantList(name,restaurantList){
    return restaurantList.filter((restaurant)=> restaurant.info.name.toLowerCase().includes(name.toLowerCase()));
}

const Body = () =>{
    const[filteredRestaurant , setFilteredRestaurant] = useState([])
    const[restaurantList,setRestaurantList] = useState([]);
    const[searchText , setSearchText] = useState("");

    useEffect(()=>{
        getRestaurant();
    },[])

    async function getRestaurant(){
        const res = await fetch(swiggyApi);
        const result = await res.json();
        let restaurantLists = result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantList(restaurantLists);
        setFilteredRestaurant(restaurantLists);
    }

    return restaurantList?.length === 0 ? (
        <h1>Loading.............</h1>
      ) : (
        <>
        <input type="text" className="search-box" value={searchText}
        onChange={(e)=>{
            setFilteredRestaurant(filterRestaurantList(e.target.value,restaurantList));
            setSearchText(e.target.value)
        }}/>
        <button className="search-btn"
        onClick={()=>{
            setFilteredRestaurant(filterRestaurantList(searchText,restaurantList));
        }}
        >Search </button>
        <div className="restaurant-list">
            {
            filteredRestaurant.map((restaurant)=>{
            return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>;
            })
        }
        </div>
        </>
    ) 
}

export default Body;