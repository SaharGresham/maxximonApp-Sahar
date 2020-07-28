import React from 'react';
import { mySave } from '../main.js';

class RedFlag extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     redflag: "",
        //     // display: "", //Email, Date, Name, Phone_Number
        //     // displayQuery: ""
        // }
    }
        // redFlagging =()=>{
        //     // this.props.handleEvent()
            
        //     let redflag="";
        // let customerAnswers = mySave();
        // if ((customerAnswers.Symptoms === "Yes") ||
        //     (customerAnswers.Travel === "Yes") ||
        //     (customerAnswers.Isolation === "Yes")) {
        //     redflag = "You are legally required from Red Flag to self isolate and contact AHS"
        // }
        // this.setState =({"redflag": redflag});
        // console.log(this.setState.redflag)
        
        // }
    
    render(){
        return (
            <div>
              Thank you from Red Flag! Your form has been received.<br/>
              Please remember to practice safe distancing <br/>
              
            </div>

        )
    }
}
export default RedFlag;