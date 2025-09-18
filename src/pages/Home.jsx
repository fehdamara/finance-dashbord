import background from "../assets/background.jpg";
// Pagina principale dell'applicazione, visibile a tutti gli utenti
export default function Home() {
    return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        color: "white"
      }}
    >
      <h1 className="text-center pt-5">Benvenuto nel Finance Dashboard</h1>
              
        <p>Track your spending and manage your finances smartly.</p>

    </div>
    );
  }


