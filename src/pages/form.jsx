import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useForm } from '../hooks/useForm'
import { Website } from '../cmps/website'
import { loadForms, addForm } from '../store/form/form.action'
import { useDispatch } from 'react-redux'


export function Form() {
    const [form, handleForm] = useForm({ firstName: '', lastName: '', email: '', websiteRef: '', linkedinRef: '', experienceRef: '', budgetRef: '' })
    const dispatch = useDispatch()
    const firstNameRef = useRef()
    const lastNameRef = useRef()
    const emailRef = useRef()
    const websiteRef = useRef()
    const linkedinRef = useRef()
    const experienceRef = useRef()
    const budgetRef = useRef()

    const saveForm = () => {
        dispatch(addForm(form))
    }



    return <div>
        <Website ref={websiteRef} handleForm={handleForm} />
        <button onClick={saveForm}>click</button>
    </div>
}
