// ProtectedRoute.tsx
import { useRouter } from 'next/router';
import { useAuth } from '../../auth/auth';
import { useEffect, useState } from 'react';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { user } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      router.replace('/login');
    } else {
      setIsLoading(false);
    }
  }, [user, router]);

  if (isLoading) {
    // Exibir um componente de carregamento enquanto a verificação de autenticação está sendo realizada
    return <div>Carregando...</div>;
  }

  return <>{children}</>;
};
