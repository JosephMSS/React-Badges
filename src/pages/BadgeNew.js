import React, { Component } from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
class BadgeNew extends Component {
  render() {
    const user = {
      firstName: "Joseph",
      lastName: "Morales",
      jobTitle: "Frontend && Backend Developer",
      twitter: "joseph_moraless",
    };
    return (
      <React.Fragment>
        <div>
          <Navbar />
        </div>
        <div className="BadgeNew__hero">
          <img src={header} className="img-fluid" alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge user={user} />
            </div>
            <div className="col">
              <BadgeForm />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BadgeNew;
