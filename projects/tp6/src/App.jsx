import { useState, useMemo, useCallback, useEffect } from "react";
import ProductForm from "./components/productsForm.jsx";
import ProductList from "./components/productList.jsx";
import SearchBar from "./components/searchBar.jsx";
import "./assets/Styles/index.css";


function App() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    console.log("Lista de productos actualizada:", products);
  }, [products]);

  const addProduct = useCallback((newProduct) => {
    setProducts((prevProducts) => [...prevProducts, { ...newProduct, id: Date.now(), estado: true }]);
  }, []);

  const updateProduct = useCallback((updatedProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === updatedProduct.id ? updatedProduct : product))
    );
  }, []);

  const deleteProduct = useCallback((id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => (product.id === id ? { ...product, estado: false } : product))
    );
  }, []);

  const filteredProducts = useMemo(() => {
  return products.filter((product) => {
    const searchTermNumber = Number(searchTerm); // Intenta convertir a número

    return (
      (product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (!isNaN(searchTermNumber) && product.id === searchTermNumber)) && 
      product.estado
    );
  });
}, [products, searchTerm]);



  return (
    <div>
      <h1>Gestión de Productos</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProductForm addProduct={addProduct} />
      <ProductList products={filteredProducts} updateProduct={updateProduct} deleteProduct={deleteProduct} />
    </div>
  );
}

export default App;
