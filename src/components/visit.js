import React from 'react';
import Form from 'react-bootstrap/Form';

function Visit() {

  return (
    <div className="borderColor reasonText" >
      <Form.Label>Reason for visit</Form.Label>
      <Form.Control
        type="text"
        id="ReasonID"
        placeholder="Reason for visit"
      />
    </div>
  );
}

export default Visit;