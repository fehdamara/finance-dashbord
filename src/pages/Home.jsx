import background from "../assets/background.jpg";

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

