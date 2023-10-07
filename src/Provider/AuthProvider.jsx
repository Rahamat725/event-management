import { createContext, useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
const [user,setUser] = useState(null);


// createUser
const createUser = (email,password) => {
    return createUserWithEmailAndPassword(auth,email,password);
}
// Sign In

    const Info = {
         user,
         createUser,
    }
    return (
        <AuthContext.Provider value={Info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;