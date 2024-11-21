const { executeQuery } = require('./route');

async function runCliQuery() {
  try {
    const param = 'test';
    const someField = 'testValue';

    const response = await executeQuery(param, someField);

    // Mostrar los resultados en la consola
    if (response.success) {
      console.log('Resultados de la consulta:');
      console.log(response.unique_producto_tipos);
    } else {
      console.error('Error al obtener los datos:', response.error);
    }
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error);
  }
}

// Llamar a la función directamente para ejecutar la consulta
runCliQuery();