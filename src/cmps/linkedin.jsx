import React, { useRef } from 'react'

export function Linkedin({handleForm }) {
    const linkedinRef = useRef()

    return (
        <label> LinkedIn
            <input type='text'
                name='linkedin'
                ref={linkedinRef}
                onChange={handleForm}
                placeholder='Your LinkedIn link'
            />
        </label>
    )

}