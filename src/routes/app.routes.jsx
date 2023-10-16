import { Routes, Route } from 'react-router-dom';
import { About } from '../pages/About';
import { Projects } from '../pages/Projects';
import { Contact } from '../pages/Contact';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
