import React, { useContext, useState } from "react";

interface IUserData {
    name : string,
}

export interface IAuth {
    signIn : ( user : IUserData ) => void,
    signOut : () => void,
    user : string
}

const AuthContext = React.createContext<IAuth | null>(null);

const useAuth = () : IAuth => useContext(AuthContext) as IAuth;

const useProvideAuth = () => {
    const [user, setUser] = useState<string>("");

    const signIn = ( user : IUserData ) => setUser(user.name);

    const signOut = () => setUser("");

    return {
        user,
        signIn, 
        signOut
    }
}

const AuthProvider = ({ children, ...props } : any) =>{
    const auth = useProvideAuth();
    return( 
        <AuthContext.Provider value={auth}>
            { children }
        </AuthContext.Provider>
    );
}

export {AuthProvider, AuthContext, useAuth};
