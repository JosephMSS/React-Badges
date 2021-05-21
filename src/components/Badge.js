import React from "react";
import confLogo from "../images/badge-header.svg";
import "./styles/Badge.css";
class Badge extends React.Component {
  render() {
    /**
     * user se define en donde llamamos al 
     * componente para poder usarlo
     */
    const {
      firstName,
      lastName,
      jobTitle,
      twitter,
    }=this.props.user
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo" />
        </div>
        <div className='Badge__section-name'>
          <img  className='Badge__avatar' src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar" />
          <h1>
            {firstName} <br /> {lastName}
          </h1>
        </div>
        <div className='Badge__section-info'>
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>
        <div className='Badge__footer'>#DreamTeam</div>
      </div>
    );
  }
}
export default Badge;
