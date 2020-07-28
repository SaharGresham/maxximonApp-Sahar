import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Email extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text >Email</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="EmailQueryID"
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="EmailID"
                    />
                </InputGroup>
                
            </div>
        )
    }


}

export default Email