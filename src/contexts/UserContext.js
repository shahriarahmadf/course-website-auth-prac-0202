import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import app from '../firebase//firebase.config'

const auth = getAuth(app);

const UserContext = ({children}) => {

    // 1. register new user
    const register = (email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }


    return (
        <div>
            
        </div>
    );
};

export default UserContext;