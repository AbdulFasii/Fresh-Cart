import { Routes, Route } from 'react-router-dom'
import { HomePage } from "./HomePage";
import { CategoriesPage } from "./CategoriesPage"
import { ProductPage } from './ProductPage'
import NavBar from './NavBar';
export default function App() {
  return (
    <>
  <NavBar />
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='categorie' element={ <CategoriesPage />} />
      <Route path='product' element={ <ProductPage/>} />
  </Routes>

  </>
  );
}

