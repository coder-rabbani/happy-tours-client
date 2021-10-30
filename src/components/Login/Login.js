import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_uri = location.state?.from || '/';

    // redirect to the target page after login where user wanted to go
    const handleRedirect = () =>{
        signInUsingGoogle()
        .then(result =>{
            history.push(redirect_uri)
        })
    }
    return (
        <div className="text-center py-5">
            <h2 className="mb-4">Please Login</h2>
            <button onClick={handleRedirect} className="happy-btn py-2 px-5">Google Sign In</button>
        </div>
    );
};

export default Login;