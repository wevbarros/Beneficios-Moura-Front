import Gerenciar from "../components/gerenciar_beneficio";
import { ProtectedRoute } from "../components/protectRoute";

export default function GerenciarPage() {
  return (
    <ProtectedRoute>
      <div>
        <Gerenciar title="Lista de Benefícios" />
      </div>
    </ProtectedRoute>
  );
}
