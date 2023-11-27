import axios from 'axios';

const KITCHENITEMS_API_BASE_URL = 'http://localhost:8080/api/v1/get_kitchen';
const DELKITCHENITEMS_API_BASE_URL =
  'http://localhost:8080/api/v1/delete_kitchen';
const ADDKITCHENITEMS_API_BASE_URL =
  'http://localhost:8080/api/v1/create_kitchen';
class KitchenService {
  getkitchenitems() {
    return axios.get(KITCHENITEMS_API_BASE_URL);
  }

  deletekitchen(id) {
    return axios.delete(DELKITCHENITEMS_API_BASE_URL + '/' + id);
  }

  addKitchen(kitchenitem) {
    return axios.post(ADDKITCHENITEMS_API_BASE_URL, kitchenitem, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
export default new KitchenService();
