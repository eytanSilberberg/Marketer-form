import React, { useEffect } from 'react'

export function Website({ websiteRef, handleForm }) {


    return (
        <label htmlFor="">
            <input type="text"
                placeholder='Your website link'
                onChange={handleForm} />
        </label>
    )

}