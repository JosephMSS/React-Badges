import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import confLogo from "../images/platziconf-logo.svg";
import Loader from "../components/Loader";
import PageError from "../components/PageError";
import Badge from "../components/Badge";
import api from "../api";
import "./styles/BadgeDetails.css";
export default class BadgeDetails extends Component {
  state = {
    loading: true,
    error: null,
    data: undefined,
  };
  componentDidMount() {
    this.fetchData();
  }
  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const { badgeId } = this.props.match.params;
      const data = await api.badges.read(badgeId);
      this.setState({ loading: false, data: data });
    } catch (error) {
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
    const badges = this.state.data;
    return (
      <Fragment>
        <div className="BadgeDetails__hero">
          <div className="container">
            <div className="row">
              <div className="col-6">
                <img src={confLogo} alt="Logo de la conferencia" />
              </div>
              <div className="col-6 BadgeDetails__hero-attendant-name">
                <h1>
                  {badges.firstName} {badges.lastName}
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName={badges.firstName}
                lastName={badges.lastName}
                jobTitle={badges.jobTitle}
                twitter={badges.twitter}
                email={badges.email}
              />
            </div>
            <div className="col">
              <h2>Actions</h2>
              <div>
                <div className="btn btn-primary mb-4">
                  <Link to={`/badges/${badges.id}/edit`}>Edit</Link>
                </div>
                <div>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}
