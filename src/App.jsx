import Header from './components/header/Header'
import Home from './components/home/Home'
import About from './components/about/About';

function App() {
  return (
    <div className="App">

      {/* ========== Header ============ */}
      <Header />

      {/* ============ MAIN ============= */}
      <main className="main">
        {/* ========== HOME ============= */}
        <Home />

        {/* ========== ABOUT ============= */}
        <About />
        
        {/* ========== SKILLS ============= */}
        
        {/* ========== QUALIFICATION ============= */}
        
        {/* ========== SERVICES ============= */}

      </main>

    </div>
  );
}

export default App;
