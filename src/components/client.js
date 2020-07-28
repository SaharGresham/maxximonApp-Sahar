import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import DateDisplay from './date.js';
import Phone from './phone.js';
import Email from './email.js';
import Name from './name.js';
import Submit from './submit.js';


class Client extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: "", //Email, Date, Name, Phone_Number
            displayQuery: ""
        }
    }
    changeDisplay = (display) => {
        this.setState({
            "display": display
        });
    }
    // changeDisplayQuery = (query) => {
    //     this.setState({
    //         "displayQuery": query
    //     });
    //     console.log("display query: ", this.state.displayQuery);
    // }

    render() {

        return (
            <div>
                <div className="page" id="home">

                    <Container>
                        <h4>Client Query</h4><br/>
                        <Button variant="primary" onClick={() => this.changeDisplay("Date")}>Date</Button>{' '}
                        <Button variant="primary" onClick={() => this.changeDisplay("Email")}>Email</Button>{' '}
                        <Button variant="primary" onClick={() => this.changeDisplay("Phone_Number")}>Phone</Button>{' '}
                        <Button variant="primary" onClick={() => this.changeDisplay("Name")}>Name</Button>{' '}
                        <Button variant="primary" onClick={() => this.changeDisplay("All_Data")}>All Data</Button>{' '}<br />
                        {this.state.display === "Date" &&
                            <div>
                                <DateDisplay />
                                <Submit
                                    displayState={this.state.display}
                                   
                                />
                            </div>
                        }
                        {this.state.display === "Email" &&
                            <div>
                                <Email />
                                <Submit
                                    displayState={this.state.display}
                                   
                                />
                            </div>
                        }
                        {this.state.display === "Phone_Number" &&
                            <div>
                                <Phone />
                                <Submit
                                    displayState={this.state.display}
                                    // displayQuery={this.changeDisplayQuery}
                                />
                        </div>
                        }
                        {this.state.display === "Name" &&
                            <div>
                                <Name />
                                <Submit
                                    displayState={this.state.display}
                                    // displayQuery={this.changeDisplayQuery}
                                />
                            </div>
                        }
                       
                        {this.state.display === "All_Data" &&
                            <div>
                                <p>Press submit to retrieve all data from database</p>
                                <Submit
                                    displayState={this.state.display}
                                    // displayQuery={this.changeDisplayQuery}
                                />
                            </div>
                        }
                       
                        <br />

                    </Container>

                </div>
            </div>
        )
    }
}

export default Client