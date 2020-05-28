import React from "react";

const RestaurantItem = (props) => {
  const { restaurant } = props;

  return (
    <React.Fragment>
      <tr className="restaurant__datarow">
        <td>
          <img src={restaurant.image_url} width="25px"></img>
        </td>
        <td>{restaurant.name}</td>
        <td>{restaurant.price}</td>
        <td>{restaurant.address}</td>
        <td>{restaurant.area}</td>
        <td>{restaurant.phone}</td>
      </tr>
    </React.Fragment>
  );
};

export default RestaurantItem;
