import React, { useEffect } from 'react'

export function Website({ ref, handleForm }) {


    return (
        <label htmlFor="">
            <input type="text"
                name='websiteRef'
                ref={ref}
                placeholder='Your website link'
                onChange={handleForm} />
        </label>
    )

}