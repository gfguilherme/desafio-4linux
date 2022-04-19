import { createContext, ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

type AuthContextType = {
  authenticated: boolean;
  handleLogin: (username: string, password: string) => Promise<void>;
};

type AuthContextProviderProps = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider(props: AuthContextProviderProps) {
  const [authenticated, setAuthenticated] = useState(false);
  const navigate = useNavigate();

  async function handleLogin(username: string, password: string) {
    try {
      await api.post("/auth", { username, password });
      setAuthenticated(true);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <AuthContext.Provider value={{ authenticated, handleLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
}
