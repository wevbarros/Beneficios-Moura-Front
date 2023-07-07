// types.ts
export interface User {
  id: string;
  email: string;
  matricula: string;
  nome: string;
}

export interface AuthContextType {
  user: User | null;
  login: (matricula: string, password: string) => Promise<void>;
  logout: () => void;
  isLogged: () => User | null;
}
