import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="flex flex-col items-center w-screen min-h-screen bg-slate-200 dark:bg-stone-500 dark:text-slate-200 overflow-x-hidden px-2">
      <Nav
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setTheme={setTheme}
        theme={theme}
      />
      <Routes>
        <Route
          default
          path="/"
          element={
            <Home navIsOpen={isOpen} theme={theme} setTheme={setTheme} />
          }
        />
        <Route default path="/about" element={<About navIsOpen={isOpen} />} />
        <Route
          default
          path="/contact"
          element={<Contact navIsOpen={isOpen} />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
