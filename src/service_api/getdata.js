import axios from "axios";

axios.defaults.baseURL = "https://api.alternative.me/v2/ticker/";

export const getCoinsSortByRank = async () => {
    const res = await axios.get(`?structure=array&sort=rank&convert=USD&limit=10`);
    return res.data.data;
}

export const getCoinsSortById = async () => {
    const res = await axios.get(`?structure=array&sort=id&convert=USD&limit=10`);
    return res.data.data;
}

export const getCoinsSortByChange = async () => {
    const res = await axios.all([
        axios.get(`?structure=array&sort=percent_change_1h&convert=USD&limit=10`),
        axios.get(`?structure=array&sort=percent_change_24h&convert=USD&limit=10`),
        axios.get(`?structure=array&percent_change_7d&convert=USD&limit=10`),
    ]);
    return res;
}
