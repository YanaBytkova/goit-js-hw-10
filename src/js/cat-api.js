import { API_KEY, BASE_URL, BASE_URL_RECV } from "../configs/api.js";
import axios from "axios";
import SlimSelect from 'slim-select';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
axios.defaults.headers.common["x-api-key"] = API_KEY;

const selectList = document.querySelector('.breed-select');
const catContainer = document.querySelector('.cat-info');
const messageLoader = document.querySelector('.loader');
const messageError = document.querySelector('.error');
messageLoader.classList.add('is-hidden');
messageError.classList.add('is-hidden');


selectList.addEventListener("select", fetchBreeds);

fetchBreeds()
    .then((cats) => renderCats(cats))
    .catch((error) => {
      messageLoader.classList.replace('loader', 'is-hidden');
      Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
        position: 'center-center',
        timeout: 5000,
        width: '400px',
        fontSize: '24px'});

    console.log(error);
    });


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


  function renderCats(cats) {
   
    const markup = cats
      .map(({ id, name}) => {
        return `
            <option value="${id}">${name}</option>`;
      })
      .join("");
   
    selectList.innerHTML = markup;
    // new SlimSelect({
    //   select: '.breed-select'
    // })
  }


  selectList.addEventListener("change", setOutput);
  function setOutput(event) {
    const breedId = event.currentTarget.value;
    messageLoader.classList.replace('is-hidden', 'loader');
    catContainer.classList.add('is-hidden');
    console.log(breedId);
    fetchCatByBreed(breedId);
    
};

  function fetchCatByBreed(value) {
    return axios.get(`${BASE_URL_RECV}/search?breed_ids=${value}`)
    .then(function (response) {
     
      console.log("1", response.data);
      catInfo = response.data;
      const { url, breeds } = catInfo[0];
      messageLoader.classList.replace('loader', 'is-hidden');
      catContainer.classList.remove('is-hidden');
      catContainer.innerHTML = `
      <img src="${url}" width="400px" alt ="${breeds[0].name}">
      <div class="text-info">   <h1 class="title">${breeds[0].name} </h1>
      <p class=""cat-text>${breeds[0].description}</p>
      <p> <b>Temperament:</b> ${breeds[0].temperament}</p>
      </div>`;
    })
    .catch((error) => {
      Notify.failure('Oops! Something went wrong! Try reloading the page or select another cat breed!', {
        position: 'center-center',
        timeout: 5000,
        width: '300px',
        fontSize: '16px'});
      messageLoader.classList.replace('loader', 'is-hidden');
    console.log(error);
    })}