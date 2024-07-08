import useAuth from "../hooks/useAuth";
import { Navigate,useLocation } from "react-router-dom";
import PropTypes from 'prop-types'; // ES6


const PrivateRoute = ({children}) => {

    const {user, loading} =useAuth();
    const location = useLocation()


    if(loading){
        return <span className="loading loading-dots loading-md"></span>

    }

    if(!user){
        return <Navigate to="/login" state={location?.pathname || '/'}></Navigate>
    }

     return (
        <div>
            {children}
        </div>
    );
};

export default PrivateRoute;

PrivateRoute.propTypes ={
    children: PropTypes.node
}