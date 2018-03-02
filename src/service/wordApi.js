import apisauce from 'apisauce';

const api = apisauce.create({
    // TODO get baseURL from enviroment
    baseURL: 'http://127.0.0.1:5000'
});

/**
 * find all words stored in the server
 *
 * return: promise
 */
const findAll = () => api.get('words');

/**
 * get specific word
 *
 * return: promise
 */
const get = (id_) => api.get(`words/${id_}`);

/**
 * put new word to the server
 *
 * return: promise
 */
const put = ({ name }) => api.post(`words`, { name });

export default {
  findAll,
  get,
  put
};
