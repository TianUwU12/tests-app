import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import InformationPage from "./pages/InformationPage";
import TheoryPage from "./pages/TheoryPage";
import TheoryListPage from "./pages/TheoryListPage";
import RatingPage from "./pages/RatingPage";
import ProfilePage from "./pages/ProfilePage";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import CustomTestPage from "./pages/CustomTestPage";
import NotFoundPage from "./pages/NotFoundPage";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addCategories } from "./store/slices/categoriesSlice";

function App() {
  const dispatch = useDispatch();
  async function getCategories() {
    try {
      const response = await fetch("http://localhost:3000/api/tests/");
      const data = await response.json();
      console.log(data);
      dispatch(addCategories(data));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/information" element={<InformationPage />} />
        <Route path="/theory" element={<TheoryListPage />} />
        <Route path="/theory/:id" element={<TheoryPage />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/catalog/:id" element={<CategoryPage />} />
        <Route path="/custom-test" element={<CustomTestPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
