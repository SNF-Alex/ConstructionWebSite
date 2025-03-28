import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ContactPage from './pages/Contact';
import './App.css';

function App() {
  return (
    <>
      {/* Router Setup */}
      <Router>
        {/* Header */}
        <Header />

        {/* Routes */}
        <Routes>
          {/* Home Route */}
          <Route path="/" element={<Home />} />

          {/* Contact Page Route */}
          <Route path="/contact" element={<ContactPage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </Router>
    </>
  );
}

export default App;