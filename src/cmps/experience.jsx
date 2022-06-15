import React, { useRef } from 'react'

export function Experience({ handleForm }) {
    
    const experienceRef = useRef()

    return (
        <label> How many years of experience do you have with Facebook Marketing?
            <select name="experience" id="experience" ref={experienceRef} onChange={handleForm}>
                <option value="none">No experience</option>
                <option value="upToOne">0-1 years</option>
                <option value="upToTwo">1-2 years</option>
                <option value="moreThanTwo">2 or more years</option>
            </select>
        </label>

    )

}