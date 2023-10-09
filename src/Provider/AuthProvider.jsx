import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
 const googleProvier = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
   const unSubscribe = onAuthStateChanged (auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false)
    console.log('current user', currentUser);

   } )  
    
    return () => {
        unSubscribe();
    }
},[])
// createUser
const createUser = (email,password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password);
}
// Sign In
const SignIn = (email,password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password);
}

// login in with google
const loginWithGoogle = () => {
    return signInWithPopup(auth, googleProvier);
}

// update profile
// const userProfile = () => {
//    return updateProfile(auth.user);
// }
// Sign Out 
const LogOUt = () => {
    setLoading(true)
    return signOut(auth);
}
    const Info = {
         user,
         createUser,
         SignIn,
         LogOUt,
         loading,
         loginWithGoogle,
         
         auth,
    }
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;