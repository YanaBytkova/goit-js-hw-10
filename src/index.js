import { API_KEY, BASE_URL } from "./configs/api.js";
// import axios from "axios";
import { cats } from "./js/cat-api.js";
// axios.defaults.headers.common["x-api-key"] = API_KEY;

const selectList = document.querySelector('.breed-select');
const messageLoader = document.querySelector('.loader');
const messageError = document.querySelector('.error');
const catContainer = document.querySelector('.cat-info');