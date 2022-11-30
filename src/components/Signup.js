import React, { Component } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default class Signup extends Component {
  render() {
    return (
    <Container>
        <h3 class="h3" style={{color: "#5d62e8"}} >Registro de Nuevos Usuario</h3>
        <Row>
            <Col> <img class="center" src="/img/signup-image.jpg" alt="SingUp Img "/></Col>
            <Col> <form>
        
        <div className="mb-3">
          <label>Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Nombre"
          />
        </div>
        <div className="mb-3">
          <label>Apellido</label>
          <input type="text" className="form-control" placeholder="Apellido" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Email"
          />
        </div>
        <div className="mb-3">
          <label>Contraseña</label>
          <input
            type="password"
            className="form-control"
            placeholder="Contraseña"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
           Registrate
          </button>
        </div>
        <p className="forgot-password text-right">
          Ya estoy registrado, <a href="/sign-in">Iniciar Sesión</a>
        </p>
      </form></Col>
        </Row>
     
      </Container>  
    )
  }
}