import { useRouter } from 'next/router';

export default function Products() {
  const router = useRouter();
  const { id } = router.query; 

  return (
    <div>
      <h1>Detalles del plan de entrenamiento {id}</h1>
      <p>Entrenamiento basado en intensidad 6 veces a la semana 4 hora al día {id}</p>
    </div>
  );
}
