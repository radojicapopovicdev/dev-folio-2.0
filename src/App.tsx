import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AboutMe from "./components/Home/AboutMe";
import ContactForm from "./components/Home/ContactForm";
import Experience from "./components/Home/Experience";
import Footer from "./components/Home/Footer";
import Header from "./components/Home/Header";
import Hero from "./components/Home/Hero";
import Projects from "./components/Home/Projects";
import Skills from "./components/Home/Skills";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div>
                <Hero />
                <AboutMe />
                <Skills />
                <Experience />
                <Projects />
                <ContactForm />
                <Footer />
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
