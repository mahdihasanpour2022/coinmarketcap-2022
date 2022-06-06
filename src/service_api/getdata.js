import axios from "axios";


export const getCoinsSortByRank = async () => {
    const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false`);
    return res.data;
}














// axios.defaults.baseURL = "https://api.alternative.me/v2/ticker/";
// export const getCoinsSortByRank = async () => {
//     const res = await axios.get(`?structure=array&sort=rank&convert=USD&limit=20`);
//     return res.data.data;
// }

// export const getCoinsSortById = async () => {
//     const res = await axios.get(`?structure=array&sort=id&convert=USD&limit=20`);
//     return res.data.data;
// }

// export const getCoinsSortByChange = async () => {
//     const res = await axios.all([
//         axios.get(`?structure=array&sort=percent_change_1h&convert=USD&limit=20`),
//         axios.get(`?structure=array&sort=percent_change_24h&convert=USD&limit=20`),
//         axios.get(`?structure=array&percent_change_7d&convert=USD&limit=20`),
//     ]);
//     return res;
// }

