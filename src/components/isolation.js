import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Isolation() {

  return (
    <div className="borderColor" id="IsolationID">
      <Row >
        <Col>
          <p>Have you been in isolation in the Past 14 days or have you been in contact with anyone who has been isolated in that period?</p>
        </Col>
        <Col>

          <div className="radio">
            <label>
              <input
                name="IsolationID"
                type="radio"
                value="Yes"
              />
                {' Yes'}
              </label>
            <label className="ml-4">
              <input
                name="IsolationID"
                type="radio"
                value="No"
              />
                {' No'}
              </label>
          </div>
        </Col>
      </Row>

    </div>
  );
}

export default Isolation;