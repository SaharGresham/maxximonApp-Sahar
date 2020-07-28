import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'

class DateDisplay extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    render() {
        return (
            <div>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text >Start Date</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="Start_DateID"
                        placeholder="Start Date"
                        aria-label="Start_Date"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text >End Date</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl id="End_DateID"
                        placeholder="End Date"
                        aria-label="End_Date"
                        aria-describedby="basic-addon1"
                    />
                </InputGroup>
            </div>
        )
    }


}

export default DateDisplay