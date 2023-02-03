import React from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from '../firebase/firebase.config'

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({children}) => {

    // 1. Register new user
    const register = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // 2. Set observer
    const authObserver = (auth, user) => {
        return onAuthStateChanged(auth, (user));
    }

    const authInfo = {register, authObserver};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;