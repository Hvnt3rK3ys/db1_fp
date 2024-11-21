export async function fetchData(param, someField) {
  try {
    const response = await fetch('/api/posts/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ param, someField }),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error al ejecutar la consulta:', error);
    return { success: false, error: 'Error fetching data' };
  }
}