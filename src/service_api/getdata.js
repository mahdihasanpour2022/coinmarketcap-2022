import axios from "axios";

axios.defaults.baseURL = "https://api.alternative.me/v2/ticker/";

export const getData = async () => {
    const res = await axios.get(`?structure=array&sort=rank&convert=USD&limit=99`);
    return res.data.data;
}