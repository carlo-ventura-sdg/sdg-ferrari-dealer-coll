import axios from "axios";


const connBE = axios.create({baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}`});

export default connBE;