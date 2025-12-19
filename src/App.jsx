import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TimeProvider } from './TimeContext';
import { Home, Hora, Minuto, Segundo, Hour, Minute, Second, HoraJunto, HoraJuntos } from './components';

import './App.css';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <TimeProvider>
      <Router>
        <div className="nav-container">
          <button className="nav-toggle" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? '✕ Ocultar' : '☰ Menú'}
          </button>
          {isOpen && (
            <div className="nav-links">
              <Link to="/" className="nav-button">Home</Link>
              <Link to="/horajunto" className="nav-button">Hora Junto</Link>
              <Link to="/hora" className="nav-button">Hora</Link>
              <Link to="/minuto" className="nav-button">Minuto</Link>
              <Link to="/segundo" className="nav-button">Segundo</Link>
              <Link to="/horajuntos" className="nav-button">Hora Junto 2</Link>
              <Link to="/hour" className="nav-button">Hora 2 </Link>
              <Link to="/minute" className="nav-button">Minuto 2 </Link>
              <Link to="/second" className="nav-button">Segundo 2</Link>
            </div>
          )}
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/horajunto" element={<HoraJunto />} />
          <Route path="/hora" element={<Hora />} />
          <Route path="/minuto" element={<Minuto />} />
          <Route path="/segundo" element={<Segundo />} />
          <Route path="/horajuntos" element={<HoraJuntos />} />
          <Route path="/hour" element={<Hour />} />
          <Route path="/minute" element={<Minute />} />
          <Route path="/second" element={<Second />} />
        </Routes>
      </Router>
    </TimeProvider>
  );
}
export default App;
