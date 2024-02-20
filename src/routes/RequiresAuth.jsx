import { Navigate, Outlet, useLocation } from "react-router-dom";
// import { useAuthContext } from "../context";

const RequiresAuth = () => {
    const location = useLocation();
    const token = "122333111"

    return token ? (
        <Outlet />
    ) : (
        <Navigate to='/login' state={{ from: location }} />
    );
};
export default RequiresAuth;