import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Mynavbar from '/src/components/Mynavbar.jsx';
import Footer from '/src/components/footer.jsx';
import Request_Help from '/src/components/Request_Help.jsx';
import App from '/src/App.jsx'; 
import Mymap from '/src/components/Mymap.jsx';
import About from '/src/components/About.jsx';

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
