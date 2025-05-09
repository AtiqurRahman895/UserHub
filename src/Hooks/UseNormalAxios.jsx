import axios from "axios";

export const normalAxios = axios.create({
    // baseURL: 'http://localhost:8080',
    baseURL: "https://interview.canduit.org",
    headers: {
      "x-api-key": "63cfb3f2-4e2f-47f9-9ae8-cc5af4cc30dd",
      "Content-Type": "application/json",
    },

});


const UseNormalAxios = () => {
    return normalAxios
};

export default UseNormalAxios;