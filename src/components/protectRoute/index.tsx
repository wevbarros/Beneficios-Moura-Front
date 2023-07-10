// ProtectedRoute.tsx
import { useRouter } from "next/router";
import { useAuth } from "../../auth/auth";
import { useEffect, useState } from "react";
import { Cookies } from "react-cookie";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user, isLogged } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkIsLogged = async () => {
    const usurario = await isLogged();
    if (!usurario) {
      router.replace("/login");
    } else {
      setIsLoading(false);
    }
    };
    checkIsLogged();
  }, [user, router, isLogged,]);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  return <>{children}</>;
};
