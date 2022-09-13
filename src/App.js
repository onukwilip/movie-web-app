import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Header from "./components/header/Header";
import { HomePages } from "./home/HomePage";
import Footer from "./components/footer/Footer";
import SinglePage from "./components/watch/SinglePage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePages />} />
        <Route path="/singlePage/:id" element={<SinglePage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
