import React, { Component } from "react";
import axios from "axios";

export class PokemonDetail extends Component {
  state = {
    details: [],
  };

  componentDidMount() {
    axios
      .get(this.props.pokemon.url)
      .then((res) => this.setState({ details: res.data }));
  }

  render() {
    return <div></div>;
  }
}

export default PokemonDetail;
