import React, { Component } from 'react';
import { RouteHandler } from 'react-router';
import Nav from 'components/Nav';

if (typeof window !== 'undefined') {
  require('components/AppContainer.css');
}

export default class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <div className='container'>
          <RouteHandler {...this.props.bootstrap} />
        </div>
      </div>
    );
  }
}
