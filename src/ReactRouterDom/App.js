import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Blogs from "./Pages/Blogs";
import SwParent from "./Pages/SwParent";
import SwTimer from "./Pages/SwTimer";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
        <Route path="blogs/:numId" element={<Blogs />} />
        <Route path="/swparent" element={<SwParent />} />
      </Routes>
    </div>
  );
}

export default App;
