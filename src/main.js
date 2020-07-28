function get(id) {

    let docvalue = document.getElementById(id).value
    if (docvalue.length !== 0) {
        return docvalue;
    } else {
        let el = document.getElementById(id)
        el.classList.add("borderColorRed");
        return("not valid")
        // console.log("selection required for id")
    }
        
}



function getSelection(id) {
    try {
        return document.querySelector("input[name=" + id + "]:checked").value;
    }
    catch (err) { 
        let el = document.getElementById(id)
        el.classList.add("borderColorRed");       
        return("not valid")
        // return("Selection required for " + id)
    }
}

function mySave() {
    const customer = {};
    customer.First_Name = get("FirstNID")
    customer.Last_Name = get("LastNID")
    customer.Phone_Number = get("PhoneID")
    customer.Email = get("EmailID")
    customer.Reason = get("ReasonID")
    customer.Symptoms = getSelection("SymptomsID")
    customer.Travel = getSelection("TravelID")
    customer.Distancing = getSelection("DistancingID")
    customer.IsolationID = getSelection("IsolationID")
    console.log(customer)
    // for in loop statment to scan object properties for "not valid"
    // add a conditional statement for user validation
    let counter=0;
    for(let key in customer) {
        
        if (customer[key] === "not valid") {
            counter++
            console.log("do not enter data",key, customer[key])
        }          
    }
    customer.counter=counter;
    console.log("customer counter" , customer.counter);
    if (customer.counter === 0) {
        postData("https://eamiq48yy0.execute-api.ca-central-1.amazonaws.com/dev/customer", customer)
            .then(data => {
                console.log(data); // JSON data parsed by `data.json()` call
            });
    } else {
        console.log("Please answer all questions.")
        document.getElementById("completeForm").textContent = "Complete required sections!" 
        let node= document.createElement("br")
        let node2= document.createElement("br")
        document.getElementById("completeForm").appendChild (node)
        document.getElementById("completeForm").appendChild (node2)
    }
    return customer;
};

async function myGet() {
    console.log("this is from Get")
    const response = await fetch("https://eamiq48yy0.execute-api.ca-central-1.amazonaws.com/dev/customer")
    const data= await response.json()   
    return data;
}

// function getExcel() {
//     TableExport(document.getElementsByTagName("table"));
// }

async function clientQuery(query) {
    const data = postData("https://eamiq48yy0.execute-api.ca-central-1.amazonaws.com/dev/client", query)
    return data;

    // console.log("From clientQuery:", query)
    // await postData("https://eamiq48yy0.execute-api.ca-central-1.amazonaws.com/dev/client", query)
    //   .then(data => {
    //     return data; // JSON data parsed by `data.json()` call
    // });
}

async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    const responseQuery = await response.json()
    return responseQuery; // parses JSON response into native JavaScript objects

}

export { get, mySave, myGet, clientQuery, postData };