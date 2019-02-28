import React from 'react'
import './common/step'
import './common/field'
import StepComponent from './common/step';


const SuccessElement = () => {
        return (
            <h3>
                Registration Successful
            </h3>
        )
    
}

class UserRegistration extends React.Component {

    state = {
        status: false
    }

    handleSubmit = event => {
        event.preventDefault()
        const formData = document.getElementById(this.props.step_number)
        let data = {
            "email_id": formData[0].value,
            "password": formData[1].value,
        }
        fetch('http://localhost:5000/users', 
        {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        }).then(response => 
            response.json()
        ).then(response => {
            if(response.status) {
                console.log(response.status)
                this.setState({status: response.status})
            }
        }).catch(error => console.error("Error:", error))
    }

    render() {
        let fieldData = [
            {text: "Email Id", name: "email_id", type:'text'},
            {text: "Password", name: "password", type:'password'},
        ]
        return (!this.state.status) ?
        (
            <div>
                <StepComponent step="Step1" />
                <form id={this.props.step_number} method="Post">
                    {this.fieldData.map(field => {
                        //will add code here to make it DRY
                    })}
                    <div>
                        <input onClick={this.handleSubmit} type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
        : (
            <div>
                <SuccessElement />
            </div>
        )
    }
}

export default UserRegistration