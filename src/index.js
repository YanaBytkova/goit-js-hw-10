import { API_KEY, BASE_URL } from "./configs/api.js";
import { fetchBreeds } from "./js/cat-api.js";
import fetchCatByBreed from "./js/cat-api.js";


const selectList = document.querySelector('.breed-select');
const messageLoader = document.querySelector('.loader');
const messageError = document.querySelector('.error');
const catContainer = document.querySelector('.cat-info');
selectList.addEventListener("select", fetchBreeds);
// selectList.addEventListener("change", setOutput);
// function setOutput(event) {
//     const breedId = event.currentTarget.value;
    
//     console.log(breedId);
//     fetchCatByBreed(breedId);
//   }

// fetch("BASE_URL/v1/breeds").then((res) =>
//   console.log(res));