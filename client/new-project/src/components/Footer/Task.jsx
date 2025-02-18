import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const Home = () => <div className="p-4"><h1 className="text-xl font-bold">Home</h1><p>Welcome to our website!</p></div>;
const About = () => <div className="p-4"><h1 className="text-xl font-bold">About</h1><p>Learn more about us here.</p></div>;
const Contact = () => <div className="p-4"><h1 className="text-xl font-bold">Contact</h1><p>Get in touch with us.</p></div>;
const Header = () => (
  <header className="bg-blue-600 text-white p-4 text-center text-2xl font-bold">
    Welcome to Our Website
  </header>
);
const Footer = () => (
  <footer className="bg-gray-800 text-white p-4 text-center mt-4">
    © 2025 Our Website. All rights reserved.
  </footer>
);

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
        <Header />
        <nav className="bg-blue-500 p-4 text-white">
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <div className="container mx-auto p-4 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
