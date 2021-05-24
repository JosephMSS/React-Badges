import React, { Component, Fragment } from "react";
import "./styles/Loader.css";
export default class Loader extends Component {
  render() {
    return (
      <Fragment>
        <div className="d-flex justify-content-center">
          <div className="lds-roller">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </Fragment>
    );
  }
}
