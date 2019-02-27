import React from 'react'


class UserRegistration extends React.Component {
    render() {
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
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default UserRegistration