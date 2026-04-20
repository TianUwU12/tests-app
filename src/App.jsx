import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CatalogPage from "./pages/CatalogPage";
import FavouritesPage from "./pages/FavouritesPage";
import TheoryPage from "./pages/TheoryPage";
import TheoryListPage from "./pages/TheoryListPage";
import RatingPage from "./pages/RatingPage";
import ProfilePage from "./pages/ProfilePage";
import CategoryPage from "./pages/CategoryPage";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton";
import NotFoundPage from "./pages/NotFoundPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCategories } from "./store/slices/categoriesSlice";
import { login, logout } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);

  async function getCategories() {
    try {
      const response = await fetch("http://localhost:3000/api/tests/");
      const data = await response.json();
      dispatch(addCategories(data));
    } catch (error) {
      console.log("!!!!");
    }
  }

  async function checkToken() {
    try {

      const response = await fetch("http://localhost:3000/api/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (!response.ok) {
        throw new Error("error");
      }
      const data = await response.json();

      dispatch(login(data));
    } catch {
      dispatch(logout());
    }
  }

  useEffect(() => {
    checkToken();
    getCategories();
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/information" element={<FavouritesPage />} />
        <Route path="/theory" element={<TheoryListPage />} />
        <Route path="/theory/:id" element={<TheoryPage />} />
        <Route path="/rating" element={<RatingPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/catalog/:id" element={<CategoryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
