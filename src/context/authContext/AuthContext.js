import React, { createContext, useEffect } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
    // Generate a dummy token (random string)
    const generateDummyToken = () => {
        return Math.random().toString(36).substring(7);
    };

    // Check if token exists in localStorage, otherwise generate a new one
    let token = localStorage.getItem("token");
    if (!token) {
        token = generateDummyToken();
        localStorage.setItem("token", token);
    }
    console.log(token)
    useEffect(() => {
        // Clean up function to remove token from localStorage when component unmounts
        return () => {
            localStorage.removeItem("token");
        };
    }, []);

    return (
        <AuthContext.Provider value={token}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;
