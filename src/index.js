import { API_KEY, BASE_URL } from "./configs/api.js";
import { fetchBreeds } from "./js/cat-api.js";
import fetchCatByBreed from "./js/cat-api.js";




// selectList.addEventListener("change", setOutput);
// function setOutput(event) {
//     const breedId = event.currentTarget.value;
    
//     console.log(breedId);
//     fetchCatByBreed(breedId);
//   }

// fetch("BASE_URL/v1/breeds").then((res) =>
//   console.log(res));