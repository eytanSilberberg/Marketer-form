import React, { useEffect } from 'react'
import { useRef } from 'react'
import { useForm } from '../hooks/useForm'

//CMPS
import { FirstName } from '../cmps/first-name'
import { LastName } from '../cmps/last-name'
import { Email } from '../cmps/email'
import { Website } from '../cmps/website'
import { Linkedin } from '../cmps/linkedin'
import { Experience } from '../cmps/experience'
import { Budget } from '../cmps/budget'

import { loadForms, addForm } from '../store/form/form.action'
import { formService } from '../services/form/form.service'
import { useDispatch } from 'react-redux'

export function Form() {
    const dispatch = useDispatch()
    const [form, handleForm] = useForm({ firstName: '', lastName: '', email: '', website: '', linkedin: '', experience: '', budget: '' })


    const saveForm = async () => {
        //         dispatch(addForm(form))
        const receivedForm = formService.getByEmail(form)
        if (!receivedForm) {
            dispatch(addForm(form))
            console.log('thank you')
        }

        else console.log('form exists')
    }

    return <div className="flex col">
        <form action="" className="flex col">
            <FirstName handleForm={handleForm} />
            <LastName handleForm={handleForm} />
            <Email handleForm={handleForm} />
            <Website handleForm={handleForm} />
            <Linkedin handleForm={handleForm} />
            <Experience handleForm={handleForm} />
            <Budget handleForm={handleForm} />
        </form>

        <div className="btn-container flex">
            <button onClick={saveForm}>Submit</button>
            <button>Reset</button>
        </div>


    </div>
}
