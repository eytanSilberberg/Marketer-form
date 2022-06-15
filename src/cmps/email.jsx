import React, { useRef } from 'react'

export const Email = ({ handleForm }) => {
    const emailRef = useRef()

    return (
        <label> Email address
            <input type='email'
                name='email'
                ref={emailRef}
                onChange={handleForm}
                required
                placeholder='Your email address'
            />
        </label>
    )

}