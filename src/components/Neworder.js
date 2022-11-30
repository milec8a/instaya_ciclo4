import React, {useState} from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const initialForm = {remitente: " ", id_remitente: " ", direccion_recogida: " ", ciudad_recogida: " ", fecha_recogida: " ", hora_recogida: " ", destinatario: " ", id_destinatario: " ", ciudad_destino: " ", direccion_destino: " ", alto_paq: " ", ancho_paq: " ", largo_paq: " ", peso_paq: " "}

function Neworder() {

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
    <div>
    <h1 class="h1" style={{color: "#5d62e8"}}>Nueva Orden</h1>
    <Container>
    <Row>
        <Col> <Form onSubmit= {handleSubmit}>
        <h5>Información del Recogida</h5>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
        Remitente
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Nombre del Remitente" name="remitente" value={form.remitente} onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Identificación
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="C.C. o NIT"  name="id_remitente" value={form.id_remitente} onChange={handleChange} />
        </Col>
      </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Dirección
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Dirección de Recogida" name="direccion_recogida" value={form.direccion_recogida} onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Ciudad
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Ciudad de Recogida" name="ciudad_recogida" value={form.ciudad_recogida} onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Fecha
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="FECHA" name="fecha_recogida" value={form.fecha_recogida} onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Hora
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Hora" name="hora_recogida" value={form.hora_recogida} onChange={handleChange}/>
        </Col>
      </Form.Group>
    </Form> 
        
        </Col>

        <Col>
        <h5>Información del Paquete</h5>
        <img class="center" src="/img/guia-medidas.png" alt="Guia de Medidas "/></Col>
      
      </Row>
      <Row>
        <Col>  <Form>
        <h5>Información del Entrega</h5>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Destinatario
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Nombre del Destinatario" name="destinatario" value={form.destinatario} onChange={handleChange} />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Identificación (CC o NIT)
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="C.C o NIT" name="id_destinatario" value={form.id_destinatario} onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
        Dirección
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Dirección de Entrega" name="direccion_recogida" value={form.direccion_recogida} onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
        Ciudad
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="Ciudad de Entrega" name="ciudad_recogida" value={form.ciudad_recogida} onChange={handleChange} />
        </Col>
      </Form.Group>
    </Form></Col>
        <Col><Form>
        {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`Mercancia Delicada`}
          />
        </div>
      ))}
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Alto(cm)
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="En Centrimentros" name="alto_paq" value={form.alto_paq} onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Ancho (cm)
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="En Centrimentros" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Largo (cm)
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="En Centrimentros" name="largo_paq" value={form.largo_paq} onChange={handleChange}/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Peso (Kg)
        </Form.Label>
        <Col sm="10">
          <Form.Control type="text" placeholder="En Kilogramos" name="peso_paq" value={form.peso_paq} onChange={handleChange}/>
        </Col>
      </Form.Group>
      <div class= "btn-dr"><Button variant="success" type="submit"> Crear Orden </Button></div>
    </Form>    </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Neworder;