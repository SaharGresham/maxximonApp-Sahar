import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function SafeDistance() {
    return (
        <div className="borderColor" id="DistancingID">
            {/* <form > */}
            <p>To what extent have you been practicing safe distancing?</p>
            <p className="textDG">Safe distancing is defined as maintaining 2m distance between others and wearing a mask when a 2m distance cannot be maintained.</p>
            <div className="radio">
                <Row>
                    <Col>
                        <label>
                            <input
                                name="DistancingID"
                                type="radio"
                                value="Always"
                            />
                       {' Always'}
                    </label>
                    </Col>

                    <Col>
                        <label className="ml-4">
                            <input
                                name="DistancingID"
                                type="radio"
                                value="Often"
                            />
                      {' Often'}
                    </label>
                    </Col>
                    <Col>
                        <label className="ml-4">
                            <input
                                name="DistancingID"
                                type="radio"
                                value="Rarely"

                            />
                      {' Rarely'}
                    </label>
                    </Col>
                    <Col>
                        <label className="ml-4">
                            <input
                                name="DistancingID"
                                type="radio"
                                value="Never"

                            />
                      {' Never'}
                    </label>
                    </Col>
                </Row>
            </div>
        </div>
    );

}

export default SafeDistance;