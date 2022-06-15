// import { httpService } from '../basic/http.service.js'
import { storageService } from '../basic/async-storage.service'

// const BASE_URL = (process.env.NODE_ENV === 'production')
//     ? '/api/any'
//     : 'http://localhost:3030/api/any/'

const STORAGE_KEY = 'form'

export const formService = {
    query,
    getByEmail,
    remove,
    save,

}

async function query() {
    return storageService.query(STORAGE_KEY)

    // return httpService.get('any')
}

async function getByEmail(email) {
    console.log(email)
    return storageService.get(STORAGE_KEY, email)
    // return await httpService.get(`any/${anyId}`)
}

async function remove(formId) {
    await storageService.remove(STORAGE_KEY, formId)
    // return httpService.delete(`any/${anyId}`)
}

async function save(form) {
    let savedForm
    if (form._id) {
        savedForm = await storageService.put(STORAGE_KEY, form)
        // carChannel.postMessage(getActionUpdateCar(savedForm))

    } else {
        savedForm = await storageService.post(STORAGE_KEY, form)
        // carChannel.postMessage(getActionAddCar(savedForm))
    }
    return savedForm
    // if (any._id) return httpService.put(`any/${any._id}`, any)
    // else return httpService.post('any', any)
}