import React from 'react';

if (typeof window !== 'undefined') {
  require('components/Nav.css');
}

export default class Nav {
  render() {
    return (
      <ul>
        <li>
          <a href='/coffeeshops'>
            CoffeeShops
          </a>
        </li>
        <li>
          <a href='/reviews'>
            Reviews
          </a>
        </li>
      </ul>
    );
  }
}
