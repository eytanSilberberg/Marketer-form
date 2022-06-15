const initialState = {
    forms: null
}

export function formReducer(state = initialState, action = {}) {
    switch (action.type) {
        case 'SET_FORMS':
            return { ...state, forms: action.forms }
        case 'ADD_FORM':
            console.log('in the reducer', action.form)
            return { ...state, forms: [action.form, ...state.forms] }
        case 'REMOVE_FORM':
            return { ...state, forms: state.forms.filter(form => form._id !== action.formId) }
        case 'UPDATE_FORM':
            return {
                ...state,
                forms: state.forms.map(form =>
                    form._id === action.form._id ? action.form : form
                )
            }
        case 'SET_FORM':
            return { ...state, form: action.form }
        case 'CLEAR_FORM':
            return { ...state, form: null }
        default:
            return state
    }

}
