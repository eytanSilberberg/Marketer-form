import React, { useRef } from 'react'

export function Website({ handleForm }) {
    const websiteRef = useRef()

    return (
        <label> Website
            <input type='text'
                name='website'
                ref={websiteRef}
                onChange={handleForm}
                placeholder='Your website link'
            />
        </label>
    )

}