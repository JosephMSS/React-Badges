import React, { Component } from "react";
import api from "../api";
import Badge from "../components/Badge";
import BadgeForm from "../components/BadgeForm";
import Loader from "../components/Loader";
import header from "../images/badge-header.svg";
import "./styles/BadgeEdit.css";
class BadgeEdit extends Component {
  state = {
    loading: true,
    error: null,
    form: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      twitter: "",
      email: "",
      avatarUrl: "",
    },
  };
  handleChange = (e) => {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value },
    });
  };
  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ loading: true, error: null });

    try {
      const { badgeId } = this.props.match.params;
      await api.badges.update(badgeId,this.state.form);
      this.setState({ loading: false });
      this.props.history.push("/badges");
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async (e) => {
    try {
      this.setState({ loading: true, error: null });
      const { badgeId } = this.props.match.params;
      const data = await api.badges.read(badgeId);
      this.setState({ form: data, loading: false });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  render() {
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <React.Fragment>
        <div className="BadgeEdit__hero">
          <img src={header} className="img-fluid" alt="logo" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={this.state.form.firstName || "First Name"}
                lastName={this.state.form.lastName || " Last Name"}
                jobTitle={this.state.form.jobTitle || "Job Title"}
                twitter={this.state.form.twitter || "Twitter"}
                email={this.state.form.email || "Email"}
              />
            </div>
            <div className="col">
              <h1>Edit Attendant</h1>
              <BadgeForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default BadgeEdit;
