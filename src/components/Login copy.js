import React from 'react'
import {useState} from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const initialForm = {email: " ", ingreso: " "}

function Login()  {

    const [form, setForm] = useState(initialForm)
    const handleChange = (e) => {
  
      setForm({
        ...form, [e.target.name]: e.target.value
      })
    }
  
    const handleSubmit = (e) => {
      e.preventDefault()
      console.log(form)
  
      fetch('api/task',{
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          Accept : "application/json",
         "Content-Type": "application/json"
  
        }
      })
  
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(error => console.error(error))
    }
    return (
    <Container>
        <h3 class="h3" style={{color: "#5d62e8"}} >Iniciar Sesión</h3>
        <Row>
            <Col> <img class="center" src="/img/signin-image.jpg" alt="SingIn Img "/></Col>
            <Col>
            <Form onSubmit= {handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" name="email" value={form.email} onChange={handleChange}/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" name="ingreso" value={form.ingreso} onChange={handleChange}/>
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