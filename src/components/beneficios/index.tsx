import { CardBeneficio, CardSkeleton } from '../cardBeneficioBeneficios';
import { Footer } from '../cardBeneficioBeneficios/Footer';
import { useBeneficiosController } from '../../controllers/BeneficiosController'

export function Beneficios() {

  const { beneficios } = useBeneficiosController();

  return (
    <>
        <div className="container min-vh-100">

          {beneficios.length > 0 ? (
            beneficios.map((beneficio) => (
              <CardBeneficio
              key={Number(beneficio.id)}
                title={String(beneficio?.title)}
                description={String(beneficio?.description)}
                id={Number(beneficio?.id)}
              />
            ))
          ) : (
            <>
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </>
          )}
        </div>
        <Footer />
    </>
  )
}