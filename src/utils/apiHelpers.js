import axios from "axios";

const baseUrl = `https://paint-backend.herokuapp.com`;
//const baseUrl ='http://localhost:3001'
const post = async (url, data, config = {}) => {
  try {
    let result = await axios.post(`${baseUrl}/${url}`, data, { ...config });
    return result.data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

const get = async (url, config = {}) => {
  try {
    let result = await axios.get(`${baseUrl}/${url}`, { ...config });
    return result.data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
const update = async (url, data, config = {}) => {
  try {
    let result = await axios.put(`${baseUrl}/${url}`, data, { ...config });
    return result.data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};
const remove = async (url, config = {}) => {
  try {
    let result = await axios.delete(`${baseUrl}/${url}`, config);
    return result.data;
  } catch (error) {
    console.log(error.message);
    return null;
  }
};

export { remove, update, get, post };
