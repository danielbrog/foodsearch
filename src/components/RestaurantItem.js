import React from "react";

const RestaurantItem = (props) => {
  const { restaurant } = props;

  const price = new Array(restaurant.price);
  price.fill("$").join("");

  return (
    <div className="restaurant__info">
      <div className="restaurant__name">
        <div className="restaurant__price">{price}</div>
        {restaurant.name}
      </div>
      <div className="restaurant__address">{restaurant.address}</div>
      <div className="restaurant__area">{restaurant.area}</div>
      <div className="restaurant__phone">{restaurant.phone}</div>
    </div>
  );
};

export default RestaurantItem;
