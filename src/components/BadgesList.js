import React, { Component } from "react";
import "./styles/BadgeList.css";
import twitterLogo from "../images/gorjeo.svg";
export default class BadgesList extends Component {
  render() {
    return (
      <React.Fragment>
        <ul className="list-unstyled">
          {this.props.badges.map((badge) => {
            return (
              <div className="mb-2 card" key={badge.id}>
                <div className="d-flex flex-column my-3 flex-md-row m-md-3">
                  <div className="align-self-center">
                    <img
                      className="rounded-circle"
                      src={badge.avatarUrl}
                      alt={`${badge.lastName}_Avatar`}
                    />
                  </div>
                  <div className="d-flex flex-column align-items-center align-items-md-start p-md-3 ">
                    <div className="fs-5 fw-bold">
                      {badge.firstName} {badge.lastName}
                    </div>
                    <div className="fs-6">{badge.jobTitle}</div>
                    <div className="row">
                      <div className="fs-6 col">@{badge.twitter}</div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </ul>
      </React.Fragment>
    );
  }
}
