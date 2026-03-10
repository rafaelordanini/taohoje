import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Introducao from './sections/Introducao';
import Principios from './sections/Principios';
import TaoTeChing from './sections/TaoTeChing';
import Praticas from './sections/Praticas';
import Alquimia from './sections/Alquimia';
import CitacaoDiaria from './sections/CitacaoDiaria';
import Recursos from './sections/Recursos';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--tao-bg)]">
      <Navigation />
      <main>
        <Hero />
        <Introducao />
        <Principios />
        <TaoTeChing />
        <Praticas />
        <Alquimia />
        <CitacaoDiaria />
        <Recursos />
      </main>
      <Footer />
    </div>
  );
}

export default App;
