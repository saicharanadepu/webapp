import axios from 'axios';

const ADD_ElECTRONICS_API_BASE_URL =
  'http://localhost:8080/api/v1/create_electronics';
class AddElectronicsService {
  addelectronics(electronics) {
    return axios.post(ADD_ElECTRONICS_API_BASE_URL, electronics, {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
export default new AddElectronicsService();
