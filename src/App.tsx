import "./App.css";
import Carroussel from "./components/Carroussel";
import Header from "./components/Header";
import SeachBar from "./components/SearchBar";

function App() {
  return (
    <>
      <Header />
      <main>
        <SeachBar />
        <Carroussel/>
      </main>
    </>
  );
}

export default App;
