import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await response.json();

      const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      
      setListOfRestaurants(restaurants);
      setFilteredRestaurant(restaurants);
      console.log(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    const filtered = listOfRestaurants.filter(restaurant =>
      restaurant.info.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredRestaurant(filtered);
  };

  const handleFilterTopRated = () => {
    const filtered = listOfRestaurants.filter(restaurant => 
      restaurant.info.avgRating > 4.5
    ) 
    setFilteredRestaurant(filtered);
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <button style={{ padding: '5px', cursor: 'pointer'}} onClick={() => handleFilterTopRated()}>Top rated restaurants</button>
        <input
          type="text"
          placeholder="Search for restaurants..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
