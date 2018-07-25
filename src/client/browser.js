import React from 'react';
import Router from 'react-router';
import FluxComponent from 'flummox/component';
import FluxManager from 'common/react/FluxManager';
import routes from 'common/react/routes';

const flux = new FluxManager();
const actions = flux.getActions('routeActions');
const bootstrap = window.__BOOTSTRAP__ || {};

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  const activeRoute = actions.findActiveRoute(state.routes);

  React.render(
    <FluxComponent flux={flux}>
      <Handler bootstrap={bootstrap} />
    </FluxComponent>
    , document.getElementById('root')
  );

  actions.triggerRouteChange(activeRoute, state.params);
});
