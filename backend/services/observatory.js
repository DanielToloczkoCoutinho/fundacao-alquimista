const axios = require('axios');

async function fetchTrappistData() {
  const url = 'https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI';
  const params = {
    table: 'exoplanets',
    format: 'json',
    where: "pl_name='TRAPPIST-1 e'"
  };

  try {
    const response = await axios.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("Falha ao conectar com o NASA Exoplanet Archive:", error.message);
    throw new Error("Dissonância na conexão com os arquivos cósmicos.");
  }
}

module.exports = { fetchTrappistData };
