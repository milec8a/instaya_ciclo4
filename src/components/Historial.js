import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Historial() {
  return (
    <div>
    <tr>
      <th><img src="/img/logo_color.png" alt="Logo InstaYa "/></th>
      <th></th><h1 class="h1" style={{color: "#5d62e8"}}>Historial Ordenes</h1>
      <div class="btn-dr">
      <Button variant="success"> Crear Orden</Button>{' '}
      </div>
    </tr>
    <Container>
      <Table striped bordered hover size="sm">
      <thead>
        <tr  align="center">
          <th># Orden</th>
          <th>Fecha</th>
          <th>Ciudad de Entrega</th>
          <th>Dirección de Entrega</th>
          <th>Estado</th>
          <th>  </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>01/06/2022</td>
          <td>Bogotá</td>
          <td>Calle 123 # 45 -67</td>
          <td>Cumplido</td>
          <td><Button size="sm" variant="primary" type="submit"> Cancelar</Button></td>
        </tr>
        <tr>
        <td>2</td>
          <td>01/06/2022</td>
          <td>Cali</td>
          <td>Calle 123 # 45 -67</td>
          <td>Cancelado</td>
          <td><Button size="sm" variant="primary" type="submit"> Cancelar</Button></td>
        </tr>
        <tr>
        <td>3</td>
          <td>01/06/2022</td>
          <td>Bucaramanga</td>
          <td>Calle 123 # 45 -67</td>
          <td>Pendeinte de Entrega</td>
          <td><Button size="sm" variant="primary" type="submit"> Cancelar</Button></td>
        </tr>
      </tbody>
    </Table>
    </Container>
     </div>
  );
}

export default Historial;