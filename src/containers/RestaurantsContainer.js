import React, { Component } from 'react'
import RestaurantInput from '../components/restaurants/RestaurantInput'
import Restaurants from '../components/restaurants/Restaurants'
import { connect } from 'react-redux'

class RestaurantsContainer extends Component {

  render() {
    return (
      <div>
        <RestaurantInput addRestaurant={this.props.addRestaurant} addReview={this.props.addReview} />
        <Restaurants restaurants={this.props.restaurants} deleteRestaurants={this.props.deleteRestaurants} />
      </div>
    )
  }
}

const mapStateToProps = store => ({
  restaurants: store.restaurants
})

const mapDispatchToProps = dispatch => ({
  addRestaurant: text => dispatch({ type: "ADD_RESTAURANT", text}),
  deleteRestaurant: id => dispatch({ type: "DELETE_RESTAURANT", id})
})

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantsContainer);
