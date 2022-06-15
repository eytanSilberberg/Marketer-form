import React, { useRef } from 'react'

export const Email = ({ handleForm }) => {
    const emailRef = useRef()

    const confirmEmail = (event) => {
        console.log(event.target);
    }

    return (
        <label> LinkedIn
            <input type='text'
                name='email'
                ref={emailRef}
                onChange={confirmEmail}
                required
                placeholder='Your email address'
            />
        </label>
    )

}