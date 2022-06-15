import { Form } from './pages/form'
import { Success } from './pages/success'

// Routes accesible from the main navigation (in AppHeader)
const routes = [
    {
        path: '/',
        component: <Form />,
        label: 'Home 🏠',
    },
    {
        path: '/success',
        component: <Success />,
        label: 'Cars'
    }
]

export default routes