// auth.tsx
import React, { createContext, useState, useContext } from "react";
import { Cookies } from "react-cookie";
import { AuthContextType, User } from "./types";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { JWTDecode, JWTCreate } from "../utils/JWTDecode"; 

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => Promise.resolve(),
  logout: () => {},
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const chave = process.env.SECRETE_KEY;
  const login = async (matricula: string, password: string) => {
    try {
      const response = await api.post("/login", { matricula, password });

      const token = response.data.token;

      const cookies = new Cookies();
      cookies.set("moura-pra-voce-cookie", token, { path: "/" });
      const decoded = JWTDecode(token);

      if (decoded) {
        const user = {
          id: decoded.id,
          matricula: decoded.matricula,
          nome: decoded.nome,
          email: decoded.email,
        };
        setUser(user);
      }
      console.log(user);

    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        if (error.response) {
          console.log(error.response);
        }
      } else {
        console.log(error);
      }
    }
  };

  const logout = () => {
    const cookies = new Cookies();
    cookies.remove("moura-pra-voce-cookie");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
