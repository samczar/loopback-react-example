import { Store } from 'flummox';

export default class AppStore extends Store {

  constructor(flux) {
    super();

    const actions = flux.getActions('appActions');

    this.register(actions.login, this.handleLogin);
    this.register(actions.logout, this.handleLogout);
  }

  handleLogin() {

  }

  handleLogout() {

  }

}
