// types.ts
export interface User {
    id: string;
    email: string;
    matricula: string;
    nome: string;
    token: string;
  }
  
  export interface AuthContextType {
    user: User | null;
    login: (matricula: string, password: string) => Promise<void>;
    logout: () => void;
    isLogged: () => Promise<User | null>;
    token: string | null;
  }