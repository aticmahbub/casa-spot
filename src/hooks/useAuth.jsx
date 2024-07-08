
import { useContext } from 'react';
import { AuthContext } from '../components/FirebaseProvider';

const useAuth = () => {

    const all = useContext(AuthContext)
    return all
};

export default useAuth;