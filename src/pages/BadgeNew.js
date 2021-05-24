import React, { Component } from "react";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import header from "../images/badge-header.svg";
import "./styles/BadgeNew.css";
import api from "../api";
class BadgeNew extends Component {
  state = {
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      twitter: "",
      email:"",
      avatarUrl:""
    },
  };
  handleChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };
  handleSubmit=async (e) => {
    e.preventDefault();
    this.setState({loading:true,error:null})

    try {
      await api.badges.create(this.state.form)
    this.setState({loading:false})

    } catch (error) {
      this.setState({loading:false,error:error})
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="BadgeNew__hero">
          <img src={header} className="img-fluid" alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName||"First Name"}
                lastName={this.state.form.lastName||" Last Name"}
                jobTitle={this.state.form.jobTitle||"Job Title"}
                twitter={this.state.form.twitter||"Twitter"}
                email={this.state.form.email||"Email"}
              />
            </div>
            <div className="col">
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
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
