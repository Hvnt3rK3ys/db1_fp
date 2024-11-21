import React, { useState } from 'react';
import { fetchData } from '../services/apiServices';

const E_Bodega = () => {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  const handleFetchData = async () => {
    const param = 'test';
    const someField = 'testValue';

    const response = await fetchData(param, someField);

    if (response.success) {
      setResult(response.unique_producto_tipos);
      setError(null);
    } else {
      setError(response.error);
      setResult(null);
    }
  };

  return (
    <section>
      <h2>Estadísticas de la Bodega</h2>
      <button onClick={handleFetchData}>Obtener Estadísticas</button>
      {result !== null && <p>Resultados de la consulta: {result}</p>}
      {error !== null && <p>Error al obtener los datos: {error}</p>}
    </section>
  );
};

export default E_Bodega;