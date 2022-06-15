import React, { useRef } from 'react'

export function Budget({ handleForm }) {
    const budgetRef = useRef()

    const confirmBudget = (event) => {
        console.log(event.tagert);
    }

    return (
        <label> What was the biggest campaign budget you have managed in a single month?
            <input type='text'
                name='email'
                ref={budgetRef}
                onChange={confirmBudget}
                required
                placeholder='Your email address'
            />
        </label>
    )

}