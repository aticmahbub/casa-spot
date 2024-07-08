import { createContext } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,updateProfile, GithubAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase/firebaseConfig";
import { useEffect } from "react";
import { useState } from "react";
import PropTypes from 'prop-types'; // ES6






export const AuthContext = createContext(null)


//social auth providers
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const FirebaseProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)

    
    
    //google login
    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    //github login
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }
    //create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
        
    }
    
    //update user profile

    // const updateUserProfile = (name, image) =>{
    //     return updateProfile(auth.currentUser, {
    //         displayName: name, 
    //         photoURL: image
    //       }).then(() => {
    //         // Profile updated!
    //         // ...
    //       }).catch((error) => {
    //         // An error occurred
    //         // ...
    //       });
          
    // }    
    

    const updateUserProfile = async (name, image) =>{
        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: image
            });
        } catch (error) { }
          
    }    
    //sign in user
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    
    //log out
    const logout = () =>{
        setUser(null)
        signOut(auth)

        
    }
    
    //observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setLoading(false)     
            }
        });
        return () => unsubscribe()
    }, [])
    
    
    const allValues = {
        createUser,
        user,
        signInUser,
        googleLogin,
        githubLogin,
        logout,
        updateUserProfile,
        loading
    }
    return (
        <AuthContext.Provider value={allValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;

FirebaseProvider.propTypes ={
    children: PropTypes.node
}