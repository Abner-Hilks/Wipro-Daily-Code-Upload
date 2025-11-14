import React, { createContext, useState } from "react";

export const UserContext = createContext();

// Stores basic user info globally
export function UserProvider({ children }) {
  const [user, setUser] = useState({
    name: "Arpit",
    isLoggedIn: true,
  });

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
