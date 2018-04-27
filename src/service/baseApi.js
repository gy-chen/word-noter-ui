import apisauce from "apisauce/dist/apisauce";

export const api = apisauce.create({
    // TODO get baseURL from enviroment
    baseURL: 'http://127.0.0.1:5000'
});
