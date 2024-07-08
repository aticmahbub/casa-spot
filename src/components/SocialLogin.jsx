import useAuth from '../hooks/useAuth';
import { useNavigate, useLocation } from "react-router-dom";

const SocialLogin = () => {

    const {googleLogin, githubLogin} = useAuth()
    
    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'

    const handleSocialLogin = (socialProvider) =>{
        socialProvider()
        .then((result) =>{
            if(result.user){
                navigate(from)
            }
        })
    }
    return (
        <div>
            <button onClick={() =>handleSocialLogin(googleLogin)} className='btn btn-accent'>Google</button>
            <button onClick={() =>handleSocialLogin(githubLogin)} className='btn btn-accent'>Github</button>
        </div>
    );
};

export default SocialLogin;