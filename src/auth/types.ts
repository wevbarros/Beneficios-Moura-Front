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
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLogged: () => Promise<User | null>;
  token: string | null;
}
