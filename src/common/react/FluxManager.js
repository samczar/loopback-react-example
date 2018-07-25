import Flummox from 'flummox';
import RouteActions from 'actions/RouteActions';
import AppActions from 'actions/AppActions';
import CoffeeShopActions from 'actions/CoffeeShopActions';
import ReviewActions from 'actions/ReviewActions';
import AppStore from 'stores/AppStore';
import CoffeeShopStore from 'stores/CoffeeShopStore';
import ReviewStore from 'stores/ReviewStore';

export default class FluxManager extends Flummox {
  constructor() {
    super();

    this.createActions('routeActions', RouteActions);
    this.createActions('appActions', AppActions);
    this.createActions('coffeeShopActions', CoffeeShopActions);
    this.createActions('reviewActions', ReviewActions);
    this.createStore('appStore', AppStore, this);
    this.createStore('userStore', CoffeeShopStore, this);
    this.createStore('reviewStore', ReviewStore, this);
  }
}
