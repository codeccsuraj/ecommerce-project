import { Login, ProductList, Shop, Signup } from "../pages";

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
    },
    {
        path : "/shop",
        element : <Shop />
    }
]

export {authRoutes, contentRoutes}