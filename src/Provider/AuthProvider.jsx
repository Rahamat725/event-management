import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null);

useEffect(() => {
   const unSubscribe = onAuthStateChanged (auth, (currentUser) => {
    setUser(currentUser);
    console.log('current user', currentUser);
   } )  
    
    return () => {
        unSubscribe();
    }
},[])
// createUser
const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
}
// Sign In
const SignIn = (email,password) => {
    return signInWithEmailAndPassword(auth,email,password);
}

// Sign Out 
const LogOUt = () => {
    return signOut(auth);
}
    const Info = {
         user,
         createUser,
         SignIn,
         LogOUt,
    }
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;