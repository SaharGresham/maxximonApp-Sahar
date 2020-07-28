import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class Phone extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text >Phone</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="PhoneQueryID"
                        placeholder="Phone"
                        aria-label="Phone"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                
            </div>
        )
    }


}

export default Phone