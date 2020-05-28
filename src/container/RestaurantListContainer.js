import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import RestaurantList from "../components/RestaurantList";
import { getRestaurants } from "../selectors/restaurantSelector";

const mapStateToProps = (state) => ({
  filteredRestaurants: getRestaurants(state),
});

const RestaurantListContainer = connect(mapStateToProps)(RestaurantList);

export default RestaurantListContainer;
