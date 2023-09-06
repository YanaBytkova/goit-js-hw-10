import { API_KEY, BASE_URL } from "../configs/api.js";

const fetchBreeds = () => {
    const params = new URLSearchParams({
        key: API_KEY,
        limit: 50,
        page: 0,
        order: ASC,
        has_breeds: 0,

      });
      const endpoint = BASE_URL + "/breeds.json?" + params.toString();
    
      return fetch(endpoint).then((res) => {
        if (res.ok) {
          return res.json();
        }
    
        throw new Error(res.statusText);
      });
    };

export { cats };