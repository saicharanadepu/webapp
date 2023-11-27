import axios from 'axios';

const ElECTRONICS_API_BASE_URL = 'http://localhost:8080/api/v1/electronics';
const DELETEElECTRONICS_API_BASE_URL =
  'http://localhost:8080/api/v1/delete_elecronics';
class ElectronicsService {
  getelectronics() {
    return axios.get(ElECTRONICS_API_BASE_URL);
  }
  deleteElectronics(id) {
    return axios.delete(DELETEElECTRONICS_API_BASE_URL + '/' + id);
  }
}
export default new ElectronicsService();
