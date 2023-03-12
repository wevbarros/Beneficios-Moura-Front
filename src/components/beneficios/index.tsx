import { CardBeneficio, CardSkeleton } from '../cardBeneficioBeneficios';
import { Footer } from '../cardBeneficioBeneficios/Footer';
import { useBeneficiosController } from '../../controllers/BeneficiosController'
import styles from './styles.module.scss';

export function Beneficios() {

  const { beneficios } = useBeneficiosController();

  return (
    <>
        <div className={`${styles.backGround}`}>
          <div className='container min-vh-100 py-5'>
            {beneficios.length > 0 ? (
              beneficios.map((beneficio) => (
                <CardBeneficio key={Number(beneficio.id)} {...beneficio} />
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
        </div>
        <Footer />
    </>
  )
}