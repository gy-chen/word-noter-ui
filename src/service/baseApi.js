import apisauce from "apisauce/dist/apisauce";

export const api = apisauce.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});