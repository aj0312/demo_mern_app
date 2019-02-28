import React from 'react'


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
        if(!this.state.status)
        return (
            <div>
                <h4>Step1</h4>
                <form id={this.props.step_number} method="Post">
                    <div>
                        <label>Email Id: </label>
                        <input name="email_id" type='text' />
                    </div>
                    <br />
                    <div>
                        <label>Password: </label>
                        <input name="password" type='password' />
                    </div>
                    <br />
                    <div>
                        <input onClick={this.handleSubmit} type="submit" value="Submit" />
                    </div>
                </form>
            </div>
        )
        else
        return (
            <div>
                <SuccessElement />
            </div>
        )
    }
}

export default UserRegistration