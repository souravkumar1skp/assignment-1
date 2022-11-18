import "./styles.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Cards from "../components/cards";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Cards />
        <Cards />
      </div>
      <Footer />
    </div>
  );
}
