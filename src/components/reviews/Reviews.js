import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {

    const { reviews, restaurantId, deleteReview } = this.props;

    const restaurantReviews = reviews.filter(review => {
      return review.restaurantId === restaurantId;
    });

    return (
      <div>
        <ul>
          {restaurantReviews.map((review, index) => {
            return <Review review={review} key={index}
            deleteReview={deleteReview} />
          })}
        </ul>
      </div>
    );
  }
};

export default Reviews;
