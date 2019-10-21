import axios from "axios";

const SERVICES_URL = "https://api.spacexdata.com/v3";
const serviceUrl = `${SERVICES_URL}/launches`;
const rocketServiceUrl = `${SERVICES_URL}/rockets`;

const api = axios.create();

const API_Services = {
  launchService: {
    get: () => api.get(`${serviceUrl}`)
  },
  rocketService: {
    get: rocket_id => rocket_id && api.get(`${rocketServiceUrl}/${rocket_id}`)
  }
};

export default API_Services;
