import Header from "./components/Header";
import Hero from "./components/Hero";
import Institucional from "./components/Institucional";
import Diferenciais from "./components/Diferenciais";
import Solucoes from "./components/Solucoes";
import Rastreamento from "./components/Rastreamento";
import Contato from "./components/Contato";
import Footer from "./components/Footer";

function Home() {
  return (
    <div className="bg-slate-50 font-inter text-slate-900">
      <Header />
      <main>
        <Hero />
        <Institucional />
        <Diferenciais />
        <Solucoes />
        <Rastreamento />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
