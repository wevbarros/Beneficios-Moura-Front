import { Categorias } from "../components/categorias";
import { ProtectedRoute } from "../components/protectRoute";

export default function Beneficios() {
  return (
    <>
      <ProtectedRoute>
        <main>
          <Categorias />
        </main>
      </ProtectedRoute>
    </>
  );
}
