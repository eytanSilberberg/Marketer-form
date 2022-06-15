import React, { useRef } from 'react'

export const LastName = ({ handleForm }) => {
    const lastNameRef = useRef()

    return (
        <label> Last name
            <input type='text'
                name='lastName'
                ref={lastNameRef}
                onChange={handleForm}
                placeholder='Your last name'
            />
        </label>
    )

}