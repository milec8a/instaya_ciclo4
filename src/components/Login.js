import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Login()  {

    return (
    <Container>
        <h3 class="h3" style={{color: "#5d62e8"}} >Iniciar Sesión</h3>
        <Row>
            <Col> <img class="center" src="/img/signin-image.jpg" alt="SingIn Img "/></Col>
            <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Enviar
              </Button>
              </Form>
          </Col>
        </Row>
     
      </Container>  
    )
  }

  export default Login;