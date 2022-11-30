import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Menu() {
  return (
    <Container>
      <Row>
        <Col><img src="/img/logo_color.png" alt="Logo InstaYa "/></Col>
        <Col xs={6}> </Col>
        <Col><Button variant="danger">Cerrar Sesión</Button>{' '}</Col>
      </Row>
    </Container>
  );
}

export default Menu;