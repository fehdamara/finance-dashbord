// Pagina principale visibile a tutti gli utenti, con immagine di sfondo


// Importa l'immagine di sfondo dalla cartella assets
import background from "../assets/background.jpg";

export default function Home() {
    return (
    <div
      style={{
        backgroundImage: `url(${background})`, // Applica lo sfondo come immagine
        // Rende l'immagine di sfondo responsive
        backgroundSize: "cover",             // Copre tutto il contenitore
        backgroundPosition: "center",       // Centra l'immagine
        height: "100vh",                   // Imposta altezza piena viewport
        color: "white"                    // Colore del testo in primo piano
      }}
    >
      <h1 className="text-center pt-5">Benvenuto nel Finance Dashboard</h1> {/* Titolo centrato in alto con spaziatura */}
              
        <p>Track your spending and manage your finances smartly.</p>        {/* Breve descrizione sotto il titolo */}

    </div>
    );
  }



