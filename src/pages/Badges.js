import React, { Component } from "react";
import { Link } from "react-router-dom";
import BadgesList from "../components/BadgesList";
import confLogo from "../images/badge-header.svg";
import "./styles/Badges.css";
import api from "../api";
import Loader from "../components/Loader";
import PageError from "../components/PageError";

export default class Badges extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };
  componentDidMount() {
    this.fetchData();
  }
  /**
   * Carga los datos por medio de una peticion
   */
  fetchData = async () => {
    /**
     * La carga de datos esta en proceso
     * y aun no existen errores
     */
    this.setState({ loading: true, error: null });
    try {
      /**
       *
       */
      const data = await api.badges.list(); //inicializacion de datos
      const badgeList=[...data].reverse()
      console.log(badgeList);
      /**
       * Se realiza la carga de datos
       * y ya no esta en estado
       * de carga
       */

      this.setState({ data: badgeList, loading: false });
    } catch (error) {
      /**
       * La carga de datos es fallida
       * y guardamos los errores
       * en el state
       */
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    if (this.state.error) {
      return <PageError error={this.state.error} />;
    }
    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="ConfLogo" className="Badges_conf-logo" />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn  btn-primary">
              New Badge
            </Link>
          </div>
          <div className="BadgesList">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
