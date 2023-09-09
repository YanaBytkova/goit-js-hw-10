import { API_KEY, BASE_URL, BASE_URL_RECV } from "../configs/api.js";
import axios from "axios";
axios.defaults.headers.common["x-api-key"] = "API_KEY";
let catsNames = [];
const selectList = document.querySelector('.breed-select');
const catContainer = document.querySelector('.cat-info');

fetchBreeds()
    .then((cats) => renderCats(cats))
    .catch((error) => console.log(error));

    function fetchBreeds() {

  return fetch(BASE_URL).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}


export default fetchBreeds();

selectList.addEventListener("change", setOutput);
function setOutput(event) {
    const breedId = event.currentTarget.value;
    console.log(breedId);
    fetchCatByBreed(breedId);
  }
  function fetchCatByBreed(breedId) {
    return axios.get(`${BASE_URL_RECV}/search?breed_ids=${breedId}`)
        .then(response => {
            return response.data;
        });
  };
  function renderCats(cats) {
    const markup = cats
      .map(({ id, name}) => {
        return `
            <option value="${id}">${name}</option>`;
      })
      .join("");
    selectList.innerHTML = markup;
  }


fetchCatByBreed()
    .then((cat) => setTimeout(createInfo(cat), 5000))
    .catch((error) => console.log(error));

function createInfo(cat) {
  console.log(cat);
  const markup = cat
    .map(({url}) => {
      return `
          <img src="${url}" alt = ""></img>
          <h1></h1>`;
    })
   
    
  catContainer.insertAdjacentElement = markup;
}
// export default  function fetchCatByBreed();