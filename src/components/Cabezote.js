import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Cabezote() {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="#">Inicio</Breadcrumb.Item>
      <Breadcrumb.Item href="#"> Historial </Breadcrumb.Item>
    </Breadcrumb>
  );
}

export default Cabezote;