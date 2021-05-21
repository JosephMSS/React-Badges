import React, { Component } from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
class BadgeNew extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      twitter: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img src={header} className="img-fluid" alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge user={{ ...this.state.form }} />
            </div>
            <div className="col">
              <BadgeForm
                onChange={this.handleChange}
                formValues={this.state.form}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BadgeNew;
