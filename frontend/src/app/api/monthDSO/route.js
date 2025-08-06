import connBE from '../../api'

export async function GET(req) {
  const { searchParams } = new URL(req.url); // Ottieni i parametri di query dalla richiesta
  const backendUrl = '/monthDSO'; // Path relativo del backend

  try {
    // Effettua la chiamata al backend tramite Axios
    const response = await connBE.get(backendUrl, {
      params: Object.fromEntries(searchParams.entries()), // Converte i parametri in oggetto
    });

    // Restituisce la risposta dal backend
    return new Response(JSON.stringify(response.data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.log('Errore nella comunicazione con il backend response:', error.response);
    console.log('Message:', error.message);

    // Gestisce gli errori
    const status = error.response ? error.response.status : 500;
    const message = error.response
      ? error.response.data
      : { error: 'Errore nella comunicazione con il backend' };

    return new Response(JSON.stringify(message), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}