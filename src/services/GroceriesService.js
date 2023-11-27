import axios from 'axios';

const GROCERIES_API_BASE_URL = 'http://localhost:8080/api/v1/get_groceries';
const ADDGROCERIES_API_BASE_URL = 'http://localhost:8080/api/v1/get_groceries';
const DELETEGROCERIES_API_BASE_URL =
  'http://localhost:8080/api/v1/get_groceries';
class GroceriesService {
  getgroceries() {
    return axios.get(GROCERIES_API_BASE_URL);
  }
  addgroceries(groceries) {
    return axios.post(ADDGROCERIES_API_BASE_URL, groceries, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  deletegroceries(id) {
    return axios.delete(DELETEGROCERIES_API_BASE_URL + '/' + id);
  }
}
export default new GroceriesService();
