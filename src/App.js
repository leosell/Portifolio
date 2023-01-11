import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './screens/Home/Home'
import About from './screens/About/About'
import Header from "./components/Header";
import Work from "./screens/Work/Work";
import Writing from "./screens/Writing/Writing";
import Contact from "./screens/Contact/Contact";
import Pag404 from "./screens/Pag404";

const App = () => {
    return (
        <BrowserRouter>
            <Header />

            <Routes>
                <Route path="/" element={<Home />} />
                {/* <Route path="/about" element={<About />} /> */}
                {/* <Route path="/work" element={<Work />} /> */}
                {/* <Route path="/writing" element={<Writing />} /> */}
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Pag404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App