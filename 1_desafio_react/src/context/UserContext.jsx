import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

 // obtener perfil

 const getProfile = async (currentToken) => {
  if (!currentToken) return; // para evitar llamados innecesarios

  try {
    const response = await fetch("http://localhost:5000/api/auth/me", {
      headers: { Authorization: `Bearer ${currentToken || token}` },
    });
    const data = await response.json();
    if (response.ok) {
      setUser(data);
      localStorage.setItem("user", JSON.stringify(data));
    } else {
      console.error("Error obteniendo perfil:", data.message);
    }
  } catch (error) {
    console.error("Error de conexión:", error);
  }
};

  // Effect para obtener el perfil si ya hay un token en localStorage

  useEffect(() => {
    if (token) getProfile(token);
  }, [token]);

  // login

  const login = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        await getProfile(data.token);
      } else {
        console.error("error en login:", data.message);
      }
    } catch (error) {
      console.error("error de conexión:", error);
    }
  };

  // register

  const register = async (email, password) => {
    try {
      const response = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      if (response.ok) {
        localStorage.setItem("token", data.token);
        setToken(data.token);
        await getProfile(data.token);
      } else {
        console.error("error en registro:", data.message);
      }
    } catch (error) {
      console.error("error de conexión:", error);
    }
  };

  // logout
  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };

 
  return (
    <UserContext.Provider value={{ token, user, login, register, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
