import Header from "./components/header";
import Footer from "./components/footer";
import MapMatrix from "./components/mapMatrix";
import PlayerMatrix from "./components/playerMatrix";
import AttackWindow from "./components/attackWindow";

export default function Home() {
  return (
    <body>
      <Header />
      <main>
        <div>
          <div style={{ textAlign: "center" }}>This is the main play area</div>
          <MapMatrix />
          <AttackWindow />
          <PlayerMatrix />
        </div>
      </main>
      <Footer />
    </body>
  );
}
