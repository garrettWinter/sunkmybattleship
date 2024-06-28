import Header from "./components/header";
import Footer from "./components/footer";
import MapMatrix from "./components/mapMatrix";
import PlayerMatrix from "./components/playerMatrix";

export default function Home() {
  return (
    <body style={{ background: "grey" }}>
      <Header />
      <main>
        <div style={{
          border: "Solid black 2px"
        }}>
          <div style={{textAlign: "center"}}>This is the main play area</div>
          <div style={{
            padding: "1rem"
          }}>
            <MapMatrix/>
          </div>
          <div style={{
            padding: "1rem"
          }}>
            <PlayerMatrix/>
          </div>
        </div>
      </main>
      <Footer />
    </body>
  );
}
