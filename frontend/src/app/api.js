import axios from "axios";


const dealerBE = axios.create({baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`});

export default dealerBE;