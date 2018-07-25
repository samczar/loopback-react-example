import { Store } from 'flummox';

export default class ReviewStore extends Store {

  constructor(flux) {
    super();

    const actions = flux.getActions('reviewActions');

    this.register(actions.add, this.handleAdd);
    this.register(actions.edit, this.handleEdit);
    this.register(actions.remove, this.handleRemove);
  }

  handleAdd() {
    console.log('handle add');
  }

  handleEdit() {
    console.log('handle edit');
  }

  handleRemove() {
    console.log('handle remove');
  }

}
