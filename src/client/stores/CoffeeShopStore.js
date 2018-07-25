import { Store } from 'flummox';

export default class CoffeeShopStore extends Store {

  constructor(flux) {
    super();

    const actions = flux.getActions('coffeeShopActions');

    this.register(actions.add, this.handleAdd);
    this.register(actions.find, this.handleFind);
    this.register(actions.edit, this.handleEdit);
    this.register(actions.remove, this.handleRemove);
  }

  handleAdd(response) {
    console.log(response);
  }

  handleFind(response) {
    console.log(response);
  }

  handleEdit() {
    console.log('handle edit');
  }

  handleRemove() {
    console.log('handle remove');
  }

}
