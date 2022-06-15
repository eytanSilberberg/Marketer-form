
import { formService } from '../../services/form/form.service'



// Any Action Creators
function getActionSetForms(any) {
    return { type: 'SET_FORM', any }
}

function getActionAddForm(form) {
    console.log('form from action ', form)
    return { type: 'ADD_FORM', form }
}

function getActionUpdateForm(form) {
    return { type: 'UPDATE_FORM', form }
}

//load anys to state
export function loadForms() {
    return async dispatch => {
        try {
            // console.log('hello')
            const forms = await formService.query()
            dispatch(getActionSetForms(forms))
            return forms
        } catch (err) {
            console.log('AnyActions: err in loadAny', err)
        }
    }
}

export function addForm(form) {
    console.log(form)
    return async dispatch => {
        try {
            const addedForm = await formService.save(form)
            console.log(addedForm)
            dispatch(getActionAddForm(addedForm))
            return addedForm
        }
        catch {
        }
    }
}

export function updateForm(newForm) {
    return async (dispatch, getState) => {
        const prevAny = { ...getState().anyModule.any }
        try {
            const form = await formService.save(newForm)
            dispatch(getActionUpdateForm(form))
        } catch (error) {

        }
    }
}

