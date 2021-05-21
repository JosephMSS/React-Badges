import React, { Component, Fragment } from "react";
import notFound from "../images/404-error-animate.svg";
export default class Error404 extends Component {
  render() {
    return (
      <Fragment>
        <div className="">
          <picture className="container  d-flex justify-content-center">
            <img className="col-5" src={notFound} alt="" />
          </picture>
        </div>
      </Fragment>
    );
  }
}
