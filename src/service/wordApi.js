import qs from 'qs';
import { api } from './baseApi';


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
const put = ({name}) => api.post('words',
    qs.stringify({name}),
    {
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        }
    });

export default {
    findAll,
    get,
    put
};
