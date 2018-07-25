import React, { PropTypes } from 'react';

export default class Home {

  static propTypes = {
    comments: PropTypes.string,
    id: PropTypes.number,
    rating: PropTypes.number,
  }

  render() {
    const { comments, date, id, rating } = this.props;

    return (
      <div>
        Hi, welcome back!  Here is a review from the db:

        <ul>
          <li>{id}</li>
          <li>{comments}</li>
          <li>{rating}</li>
        </ul>
      </div>
    );
  }
}
