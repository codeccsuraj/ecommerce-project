import { Login, Signup } from "../pages";

const authRoutes = [
    {
        path : 'login',
        element: <Login/>,
    },
    {
        path : "signup",
        element : <Signup />
    },
]

export {authRoutes}