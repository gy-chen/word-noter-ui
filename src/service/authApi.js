import combineURLs from 'axios/lib/helpers/combineURLs';
import { api } from './baseApi';
import store from '../store';

api.addRequestTransform(request => {
    const state = store.getState();
    if (state.auth.token) {
        request.headers['Authorization'] = state.auth.token;
    }
});

/**
 * Get current login user's profile
 *
 * @returns promise
 */
export const profile = () => api.get('/profile');

export const getLoginUrl = () => combineURLs(api.getBaseURL(), '/login');

export default {
    profile,
    getLoginUrl
};