import React from 'react'
import { useForm } from '../hooks/useForm'

//CMPS
import { FirstName } from '../cmps/first-name'
import { LastName } from '../cmps/last-name'
import { Email } from '../cmps/email'
import { Website } from '../cmps/website'
import { Linkedin } from '../cmps/linkedin'
import { Experience } from '../cmps/experience'
import { Budget } from '../cmps/budget'

import { addForm } from '../store/form/form.action'
import { formService } from '../services/form/form.service'
import { useDispatch } from 'react-redux'

export function Form() {
    const dispatch = useDispatch()
    const [form, handleForm] = useForm({ firstName: '', lastName: '', email: '', website: '', linkedin: '', experience: '', budget: '' })


    const saveForm = async () => {
        const { email } = form
        const isValid = confirmEmail(email)
        if (isValid) {
            const receivedForm = formService.getByEmail(form)
            if (!receivedForm) {
                dispatch(addForm(form))
                console.log('thank you')
            }
        }
    }

    const confirmEmail = (input) => {
        var format = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        if (input.match(format)) return true
        else return false
    }


    return <div className="main-form flex col">
        <h1>Become a marketer</h1>
        <form action="" className="flex col">
            <FirstName handleForm={handleForm} />
            <LastName handleForm={handleForm} />
            <Email handleForm={handleForm} />
            <Website handleForm={handleForm} />
            <Linkedin handleForm={handleForm} />
            <Experience handleForm={handleForm} />
            {/* <Budget handleForm={handleForm} /> */}
        </form>

        <div className="btn-container flex">
            <button className='btn-submit' onClick={saveForm}>Submit</button>
            <button className='btn-reset'>Reset</button>
        </div>


    </div>
}
