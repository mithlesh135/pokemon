import React, { Component } from "react";
import List from "./list";
import Pager from "./pager";
import AjaxHandler from "../utils/ajaxHandler";

export default class Pokemon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            pokemons: []
        };
        this.pageSize = 3;
        this.ajaxHandler = new AjaxHandler();
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
        this.fetchPokemon = this.fetchPokemon.bind(this);
    }

    componentDidMount() {
        this.fetchPokemon();
    }

    prevPage() {
        if(this.state.page > 0) {
            this.setState((state => ({page : state.page - 1 })), this.fetchPokemon);
        }
    }

    nextPage() {
        this.setState((state => ({page : state.page + 1})), this.fetchPokemon);
    }

    fetchPokemon() {
        let pokemonsPromise = [ 1,2,3 ].map(item =>  this.ajaxHandler.get(this.state.page * this.pageSize + item));
        Promise.all(pokemonsPromise).then(pokemons => this.setState((state) =>  ({pokemons : pokemons.map(item => item.data)})));
    }

    render() {
        return (
            <React.Fragment>
                <List items = {this.state.pokemons}></List>
                <Pager prevPage = {this.prevPage} nextPage = {this.nextPage}/>
            </React.Fragment>
        );
    }
}
