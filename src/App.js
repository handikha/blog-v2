import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Article from "./pages/Article";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article/:id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
