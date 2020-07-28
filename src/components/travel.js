import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Travel() {
    return (
        <div className="borderColor" id="TravelID">
            <Row >
                <Col>
                    <p>Have you travelled outside of Canada in the past 14 days or have you been in contact with anyone exhibiting symptoms or has tested positive?</p>
                </Col>
                <Col>
                    <div className="radio">
                        <label>
                            <input
                                name="TravelID"
                                type="radio"
                                value="Yes"
                            />
                        {' Yes'}
                    </label>
                    <label className="ml-4">
                        <input
                            name="TravelID"
                            type="radio"
                            value="No"
                        />
                        {' No'}
                    </label>
                    </div>
                </Col>
            </Row>

            {/* </form> */}

        </div>
    );

}

export default Travel;