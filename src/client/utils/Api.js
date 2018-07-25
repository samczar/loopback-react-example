import api from 'axios';

export const CoffeeShopApi = {

  create() {
    return api.post(`/api/coffeeshops`);
  },

  findById(id) {
    return api.get(`/api/coffeeshop/${id}`);
  },

  find() {
    return api.get(`/api/coffeeshops`);
  },

  findOne() {
    return api.get(`/api/coffeeshops/findOne`);
  },

  deleteById(id) {
    return api.delete(`/api/coffeeshop/delete/${id}`);
  }

};
