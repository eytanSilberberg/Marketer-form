import React, { useRef } from 'react'

export const FirstName = ({ handleForm }) => {
    const firstNameRef = useRef()

    return (
        <label> First name
            <input type='text'
                name='firstName'
                ref={firstNameRef}
                onChange={handleForm}
                placeholder='Your first name'
            />
        </label>
    )

}