import React, { Fragment } from "react";
import Card from "../components/Card/card";
import "../components/styles/search.css";
import "../components/styles/card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const API = "http://www.omdbapi.com/?i=tt3896198&apikey=ed0d78b8";
class List extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filtro: "",
      error: "",
    };
  }
  async componentDidMount() {
    this.callApi();
  }
  enviar(e) {
    e.preventDefault();
    console.log("enviando", this.state.filtro);
  }
  keyUp(e) {
    this.setState({
      filtro: e.target.value,
      error: "",
    });
  }
  async callApi() {
    const res = await fetch(
      this.state.filtro ? `${API}&s=${this.state.filtro}` : `${API}&s=batman`
    );
    const data = await res.json();
    if (data) {
      console.log(data);
      if (!data.Error) {
        this.setState({
          data: data.Search,
        });
      } else {
        this.setState({
          error: "0 resultados en la busqueda",
        });
        console.log("no hay movies");
      }
    }
  }
  async handleSubmit(e) {
    e.preventDefault();
    if (this.state.filtro) {
      this.callApi();
    } else {
      this.setState({
        error: "Por Favor, Ingrese un filtro valido",
      });
    }
  }
  render() {
    return (
      <Fragment>
        <div className="search">
          <ul>
            <li>
              <form
                onSubmit={(e) => {
                  this.handleSubmit(e);
                }}
              >
                <input
                  className=""
                  type="text"
                  placeholder="BUSCAR"
                  onChange={(e) => this.keyUp(e)}
                  autoFocus
                />
              </form>
              <p>{this.state.error ? this.state.error : ""}</p>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faSearch}
                  color="white"
                  onClick={(e) => this.enviar(e)}
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="cards-movie">
          {this.state.data.map((movie) => {
            return <Card key={movie.imdbID} movie={movie} />;
          })}
        </div>
      </Fragment>
    );
  }
}
export default List;
