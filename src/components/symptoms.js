import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Symptoms() {
  return (
      <div className="borderColor" id="SymptomsID">
        {/* <form > */}
        <Row >
          <Col>
            <label>Do you have any of these following symptoms?</label>
          </Col>
          <Col>
                <div className="radio">
                  <label>
                    <input 
                    name="SymptomsID" 
                      type="radio"
                      value="Yes"
                    />
                      {' Yes'}
                    </label>
                  <label className="ml-4">
                    <input
                    name="SymptomsID"
                      type="radio"
                      value="No"
                    />
                      {' No'}
                    </label>
                </div>
          </Col>
        </Row>
        <p className="ml-3 textDG">Runny nose, sore throat, difficulty breathing, cough, or fever.</p>
      </div>
    );
  
}

export default Symptoms;