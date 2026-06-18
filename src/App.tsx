import { Navigation } from './components/Navigation/Navigation';
import { Hero } from './components/Hero/Hero';
import { DealPortfolio } from './components/DealPortfolio/DealPortfolio';
import { Experience } from './components/Experience/Experience';
import { Credentials } from './components/Credentials/Credentials';
import { Skills } from './components/Skills/Skills';
import { About } from './components/About/About';
import { Contact } from './components/Contact/Contact';

function App() {
  return (
    <>
      <a href="#hero" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <main>
        <Hero />
        <About />
        <DealPortfolio />
        <Experience />
        <Credentials />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
