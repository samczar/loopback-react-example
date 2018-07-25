import { Actions } from 'flummox';
import AppActions from 'actions/AppActions';

export default class RouteActions extends Actions {

  findActiveRoute(routeArray) {
    const length = routeArray.length;
    return routeArray[length - 1].name;
  }

  triggerRouteChange(routeName, params) {
    switch (routeName) {
      case 'test':
        console.log('test')
        break;
        // return AppActions.fetchArticle(params.id);
      default:
        console.log('default')
        return '' //AppActions.fetchArticleList();
    }
  }
}
