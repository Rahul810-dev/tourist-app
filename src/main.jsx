import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from './components/Mynavbar.jsx';
import Footer from './components/Footer.jsx';
import Request_Help from './components/Request_Help.jsx';
import App from './App.jsx'; 
import Mymap from './components/Mymap.jsx';
import About from './components/About.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
  <Mynavbar />
  <main>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/map" element={<Mymap />} />
      <Route path="/request-help" element={<Request_Help />} />
      <Route path="/about" element={<About/>} />
    </Routes>
  </main>
  <Footer />
</Router>
  </StrictMode>,
)
