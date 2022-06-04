import axios from "axios";

axios.defaults.baseURL = "https://api.alternative.me/v2/ticker/";

export const getCoinsSortByRank = async () => {
    const res = await axios.get(`?structure=array&sort=rank&convert=USD&limit=100`);
    return res.data.data;
}

export const getCoinsSortById = async () => {
    const res = await axios.get(`?structure=array&sort=id&convert=USD&limit=100`);
    return res.data.data;
}