import React, { Component } from "react";
class BadgeForm extends Component {
  /**
   * Inicializamos el estado, esto nos permite poder leer del estado con
   * **this.state.[variable que queremos leer]**
   * Inicializar las variables permite pasar 
   * el state de no controlado a 
   * controlado, tambien se 
   * puede inicializar 
   * como un objeto 
   * vacio {}
   */
  state = {
    firstName: "",
    lastName: "",
    jobTitle: "",
    twitter: "@twitter",
  };
  /**
   * Se encarga de manejar los cambios
   * en el componente donde se coloco
   * @param {Object} e Hace referencia al evento
   */
  handleChange = (e) => {
    /**
     *
     * @typedef {Object} events
     * @property {String} name Es el nombre del input
     * @property {String} value El valor que tiene el input cada vez que cambia
     */
    /**
     * Permite capturar el nombre del input y su valor
     * para luego mandar este objeto al state
     * @type events */
    let events = {
      [e.target.name]: e.target.value,
    };
    /**
     * Ingresamos el objeto event en el estado
     * para almacenar la informacion temporalmente
     */
    this.setState(events);
    console.log(events);
  };
  /**
   * Permite disparar la logica que queremos
   * llevar a cabo cuando se presione el boton enviar
   */
  handleClick = (e) => {
    console.info("Button was clicked!!!");
  };
  /**
   * Maneja el evento submit del formulario
   * evitando que se recarge la pagina,
   * esto tambien se puede manejar
   * si cambiamos el type por
   * default del boton a
   * **type='button'**
   * @param {*} e
   */
  handleSubmit = (e) => {
    e.preventDefault();
    console.info("Form was submited");
  };
  render() {
    return (
      <React.Fragment>
        <h1>New Attendant</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              name="firstName"
              type="text"
              value={this.state.firstName}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              name="lastName"
              type="text"
              value={this.state.lastName}
              
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Job Title</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              name="jobTitle"
              type="text"
              value={this.state.jobTitle}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Twitter</label>
            <input
              onChange={this.handleChange}
              className="form-control"
              name="twitter"
              type="text"
              value={this.state.twitter}
            />
          </div>
          <button onClick={this.handleClick} className="btn btn-primary">
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}
export default BadgeForm;
