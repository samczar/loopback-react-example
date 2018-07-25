import React, { PropTypes } from 'react';

export default class Reviews {

  static contextTypes = {
    flux: PropTypes.object.isRequired
  }

  componentDidMount() {
    this.actions = this.context.flux.getActions('reviewActions');
  }

  render() {
    return (
      <section>
        <button onClick={::this.handleLoadReviews}>
          Load Reviews
        </button>
        <button onClick={::this.handleAddReview}>
          Add Review
        </button>
      </section>
    );
  }

  handleLoadReviews() {

  }

  handleAddReview() {

  }
}
