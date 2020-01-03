import axios from "axios";

export default class AjaxHandler {
    constructor() {
        this.host = "https://pokeapi.co";
        this.endpoint = "api/v2/pokemon"
        this.axios = axios;
    }

    get(id) {
        return this.axios.get(`${this.host}/${this.endpoint}/${id}`);
    }

}