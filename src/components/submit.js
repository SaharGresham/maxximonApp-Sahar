import React from 'react';
import { get, clientQuery, myGet } from '../main.js';
import { JsonToTable } from "react-json-to-table";
import { TableExport } from "tableexport";


class Submit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // display: [],
            table: {}
        }
    }
    buildQuery = async (displayState) => {
        console.log("Display state show us", displayState);
        // Send JSON obj to API/client route
        // {
        //  "todo":"Email", (or "Phone_number" or "Name" or "Date")
        //  "Email":"x@y.z"
        //  "First_Name":
        //  "Last_Name":
        //  "Start_Date":
        //  "End_Date":
        //  "Phone_number":
        // }
        const query = {};
        query.todo = displayState;
        if (displayState !== "All_Data") {

            if (displayState === "Date") {
                query.Start_Date = get("Start_DateID");
                query.End_Date = get("End_DateID");
            }

            if (displayState === "Email") {
                query.Email = get("EmailQueryID");
            }

            if (displayState === "Phone_Number") {
                query.Phone_Number = get("PhoneQueryID");
            }

            if (displayState === "Name") {
                query.First_Name = get("First_NameID");
                query.Last_Name = get("Last_NameID");
            }
            const queryResponse = await clientQuery(query);
            console.log("From submit:", queryResponse)
            this.setState({ "table": queryResponse })


        }
        else {
            const allData = await myGet()
            console.log("From submit allData:", allData)
            this.setState({ "table": allData.data })
        }
        TableExport(document.getElementsByTagName("table"));
    }

    render() {
        return (
            <div className="btnWrap">
                <button className="submitBtn" todo="Post" onClick={() => this.buildQuery(this.props.displayState)}>SUBMIT</button><br />
                <div className="table">
                    <JsonToTable  json={this.state.table} />
                </div>
                
            </div >
        )
    }
}

export default Submit