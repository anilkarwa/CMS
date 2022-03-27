import axios from '../axiosConfig';
import {apiURL} from '../constants/apiRoutes';

export const userLogin = (username, password) => {
  return axios.get(`${apiURL.LOGIN}?username=${username}&password=${password}`);
};

export const getEmployees = () => {
  return axios.get(apiURL.EMPLOYEE);
};

export const getMenu = () => {
  return axios.get(apiURL.MENU);
};

export const saveTranscations = payload => {
  return axios.post(apiURL.SAVETRANSCATION, payload);
};
