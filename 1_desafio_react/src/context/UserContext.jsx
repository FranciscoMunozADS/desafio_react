import { createContext, useState, useContext } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [token, setToken] = useState(true); // token simulado (true)

    // logout
    const logout = () => {
        setToken(false)
    };


return (
    <UserContext.Provider value={{ token, setToken, logout}}>
    {children}
    </UserContext.Provider>
);
};

// hook para el userContext

export default UserProvider