import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
    const { resData } = props;
    console.log('res Data', resData);
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        sla,
      } = resData;
    
      return (
        <div className="res-card">
          <img
            className="rounded-lg"
            alt="res-logo"
            src={CDN_URL + cloudinaryImageId}
          />
          <h3 className="font-bold py-4 text-lg">{name}</h3>
          <h4>{cuisines.join(", ")}</h4>
          <h4>{avgRating} stars</h4>
          <h4>{costForTwo}</h4>
          <h4>{sla.deliveryTime} minutes</h4>
        </div>
      )
}

export default RestaurantCard;