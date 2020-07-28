import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Name extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text >First Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="First_NameID"
                        placeholder="First Name"
                        aria-label="First_Name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text >Last Name</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="Last_NameID"
                        placeholder="Last Name"
                        aria-label="Last_Name"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
        )
    }


}

export default Name