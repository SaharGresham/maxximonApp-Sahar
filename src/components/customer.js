import React from 'react';
import { mySave } from '../main.js';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Symptoms from './symptoms.js';
import Travel from './travel.js';
import SafeDistance from './safe_distance.js';
import Isolation from './isolation.js';
import Visit from './visit.js';
import Modalbox from './modalbox/modalbox.js';
import '../App.css';

class Customer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            redflag: ""
        }
    }

    popUp = (popUpID, timer) => {
        const popUp = document.getElementById(popUpID);
        popUp.classList.remove("hidden");
        setTimeout(function () {
            const popUp = document.getElementById(popUpID);
            popUp.classList.add("hidden");
        }, timer)
    }
    popUpConfirm = (popUpID) => {
        const popUp = document.getElementById(popUpID);
        popUp.classList.remove("hidden");
        // setTimeout(function () {
        //     const popUp = document.getElementById(popUpID);
        //     popUp.classList.add("hidden");
        // }, timer)
    }
    popUpConfrimClose = () => {
        const popUp = document.getElementById("modalbox1");
        popUp.setAttribute("class", "modalhide");
    }
    handleEvent = () => {
        // <RedFlag redflag/>
        let redflag = "";
        let customerAnswers = mySave();
        console.log("From handleEvent ", customerAnswers.counter)
        let CACounter = customerAnswers.counter
        if (CACounter === 0) {
            if ((customerAnswers.Symptoms === "Yes") ||
                (customerAnswers.Travel === "Yes") ||
                (customerAnswers.IsolationID === "Yes")) {
                redflag = <div className="btnWrap">
                    You are legally required to self isolate and contact AHS <br />
                    <button className="submitBtn" onClick={() => { this.popUpConfrimClose() }}>Confirm</button>
                </div>
            }

            else {
                redflag = "Thanks for registering.  Please remember to practice safe distancing"
                setTimeout(function () {
                    const popUp = document.getElementById("modalbox1");
                    popUp.setAttribute("class", "modalhide");

                }, 5000)
            }
            this.setState({ "redflag": redflag });

            console.log("Hello from customer.js", this.state.redflag, this.state.counter);
            // return CACounter;
        }

        else {
            this.setState({ "redflag": "" })
        }
    }

    render() {
        return (
            <div>
                <div className="page" id="home">
                    <Container>
                        <Form.Label>Contact Info</Form.Label>
                        <Row>
                            <Col>
                                <Form.Control type="text" id="FirstNID" placeholder="First Name" required="required" />
                            </Col>
                            <Col>
                                <Form.Control type="text" id="LastNID" placeholder="Last Name" required />
                            </Col>
                        </Row>
                        <Row><br /></Row>
                        <Form.Control type="text" id="PhoneID" placeholder="Phone Number" required />
                        <br />
                        <Form.Control type="email" id="EmailID" placeholder="Email Address" required />
                        <br />
                        <Visit />
                        <Symptoms onChange={this.onChange} />
                        <Travel />
                        <SafeDistance />
                        <Isolation />
                        <div className="textDG borderColor green">
                            <em> Privacy Statement: We collect your contact information to inform you
                            of any potential COVID-19 cases associated to this space. Your contact info
                            will only be shared with AHS contact tracing team when requested by them.
                            Your data is stored for 30 days, then deleted.</em>
                        </div>
                        <div className="btnWrap" id="completeForm"> 
                        </div>
                        
                        <div className="btnWrap">
                            <button className="submitBtn" todo="Post" onClick={() => { this.handleEvent() }}>SUBMIT</button><br />

                        </div>


                        <Modalbox boxID="modalbox1" content={<div className="btnWrap">
                            {this.state.redflag}</div>} hide={this.state.redflag === "" ?
                                true : false} />




                    </Container>
                    {/* <div id="completeForm">
                    </div> */}
                </div>
            </div>
        )
    };
}


export default Customer;