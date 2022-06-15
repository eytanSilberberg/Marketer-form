import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useForm } from '../hooks/useForm'
import { Website } from '../cmps/website'


export function Form() {
    const [form, handleForm] = useForm({ firstName: '', lastName: '', email: '', websiteRef: '', linkedinRef: '', experienceRef: '', budgetRef: '' })
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const websiteRef = useRef()
    const linkedinRef = useRef()
    const experienceRef = useRef()
    const budgetRef = useRef()

    const printForm = () => {
        console.log(form)
    }

    return <div>
        <Website ref={websiteRef} handleForm={handleForm} />
        <button onClick={printForm}>click</button>
    </div>
}
