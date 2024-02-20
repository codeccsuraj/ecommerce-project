import { Login, ProductList, Signup } from "../pages";

const authRoutes = [
    {
        path : 'login',
        element: <Login/>,
    },
    {
        path : "signup",
        element : <Signup />
    },
];

const contentRoutes =[
    {
        path : "/product/:id",
        element : <ProductList />
    }
]

export {authRoutes, contentRoutes}