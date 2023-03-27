import React, { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext([]);

const AppProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://panorbit.in/api/users.json");
        const data = await response.json();
        setUsers(data.users);
        // console.error(data.users);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return <AppContext.Provider value={users}>{children}</AppContext.Provider>;
};

const useUser = () => {
  const users = useContext(AppContext);
  if (!users) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return users;
};

export { AppProvider, useUser };
