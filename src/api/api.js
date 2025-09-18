// Configurazione Axios per le chiamate HTTP all'API


import axios from "axios"; // Libreria per le richieste HTTP


// Crea un'istanza Axios preconfigurata
export const api = axios.create({
baseURL: "http://localhost:3000", // URL base del JSON Server
headers: {
"Content-Type": "application/json"
}
});
