import axios from  'axios'

export const fetch = () => axios.get("https://csrng.net/csrng/csrng.php?min=0&max=100").then((data)=> data)