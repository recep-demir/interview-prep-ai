import React, { createContext, useState } from "react";

// Context oluştur
export const UserContext = createContext(null);

// Provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
