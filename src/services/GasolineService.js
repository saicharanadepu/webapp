import axios from 'axios';

const GASOLINE_API_BASE_URL = 'http://localhost:8080/api/v1/get_gasoline';
class gasoline {
  getgasoline() {
    return axios.get(GASOLINE_API_BASE_URL);
  }
}
export default new gasoline();
