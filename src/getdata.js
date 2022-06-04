import axios from "axios";

axios.defaults.baseURL = "https://api.alternative.me/v2/ticker/";

export const getData = async () => {
  try {
    // const res = await axios.get("?global/?convert=EUR");
    const res = await axios.get(`?structure=array&sort=rank&convert=USD`);
    console.log(res.data.data)
  } catch (error) {
    console.log(error)
  }
}