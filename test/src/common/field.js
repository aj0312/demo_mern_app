import React from 'react'

const Field = data => {
    return (
        <div>
            <label>{data.text}: </label>
            <input name={data.name} type={data.type} />
            <br/>
        </div>
    )
}

export default Field