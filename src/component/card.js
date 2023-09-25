const RestaurantCard = ({
    name,
    cuisines,
    cloudinaryImageId,
    lastMileTravelString
}) =>{
    return(
        <div className="restaurant-card">
                <img alt="restaurant image" style= {{
                    width:"100%"
                }}src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId} />
            <h3>{name}</h3>
            <h4 >{cuisines.slice(0,3).join(",")}</h4>
            <h3>{lastMileTravelString} minutes</h3>
        </div>
    )
}

export default RestaurantCard;