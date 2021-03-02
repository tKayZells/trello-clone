import React, { useContext, useState } from "react";

interface IUserData {
    name : string,
}

const AuthContext = React.createContext({});

const useAuth = () => useContext(AuthContext);

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

const exp = { AuthProvider, useAuth }

export default exp;