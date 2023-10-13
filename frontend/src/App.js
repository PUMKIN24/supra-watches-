import { Routes, Route } from "react-router-dom"
import HomePage from "../src/pages/HomePage.js"
import About from "../src/pages/About.js"
import Policy from "../src/pages/Policy.js"
import Contact from "../src/pages/Contact.js"
import PageNotFound from "../src/pages/PageNotFound.js"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
