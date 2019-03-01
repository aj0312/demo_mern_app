import React from 'react'

const Field = ({text, name, type}) => {
    return (
        <div>
            <label>{text}: </label>
            <input name={name} type={type} />
            <br/>
        </div>
    )
}

export default Field