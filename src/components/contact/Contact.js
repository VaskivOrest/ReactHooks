import React from "react";

const Contact = ({item}) => {
    return (
        <div>
            <div className='firstName'>{item.firstName}</div>
            <div className='lastName'>{item.lastName}</div>
            <div className='phone'>{item.phone}</div>
            <hr/>
        </div>
    )
}

export default Contact;