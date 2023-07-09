// auth.tsx
import React, { createContext, useState, useContext, useEffect } from "react";
import { Cookies } from "react-cookie";
import { AuthContextType, User } from "./types";
import { api } from "../services/api";
import { AxiosError } from "axios";
import { JWTDecode, JWTCreate } from "../utils/JWT";
import { useRouter } from "next/router";

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => Promise.resolve(),
  logout: () => {},
  isLogged: () => null,
  token: "",
});

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState("");
  const router = useRouter();

  const isLogged = () => {
    const cookies = new Cookies();
    const token = cookies.get("moura-pra-voce-cookie");

    if (token) {
      const decoded = JWTDecode(token);
      if (decoded) {
        const user = decoded.user;
        setUser(user);
        setToken(token);
        return user;
      }
    }
    return null;
  };

  const login = async (matricula: string, password: string) => {
    try {
      const cookies = new Cookies();
      const response = await api.post("/login", { matricula, password });
      const token = response.data.token;
      const decoded = JWTDecode(response.data.token);

      if (decoded) {
        setUser(decoded.user);
      }
      cookies.set("moura-pra-voce-cookie", token, { path: "/" });
      router.push("/categorias");
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
    <AuthContext.Provider value={{ user, login, logout, isLogged, token }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
