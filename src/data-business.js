import axios from "axios";

function getCharacters() {
    return axios
        .get("https://rickandmortyapi.com/api/character")
        .then(response => {
            return response.data;
        });
}


export { getCharacters };

