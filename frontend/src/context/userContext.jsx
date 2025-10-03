import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext(null);

export const UseProvider = ({ children}) => {
    const [user, setUser] = useState(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
