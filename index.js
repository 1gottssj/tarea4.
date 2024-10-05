import { Routes, Route } from 'react-router-dom';
import about from "./pages/about";
import contact from "./pages/contact";
import services from "./pages/services";
import Products from './Products';

function App() {
  return (
    <div>
      <h1>¡Bienvenido a mi aplicación!</h1>
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="services" element={<Services />} />
        <Route path="products/:id" element={<Products />} />
        <Route path="*" element={<h2>Página no encontrada</h2>} />
      </Routes>
    </div>
  );
}

export default App;