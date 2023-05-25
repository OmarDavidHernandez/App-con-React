import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import ImportExportButtons from './components/importExportButtons';
import SearchBar from './components/SearchBar'; // No olvides importar el componente SearchBar
import { Product, saveToLocalStorage, getFromLocalStorage } from './utils/ProductClass';

function App() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('name');

  useEffect(() => {
    const storedProducts = getFromLocalStorage();
    setProducts(storedProducts);
  }, []);

  const addProduct = (name, quantity, price) => {
    const newProduct = new Product(Date.now(), name, quantity, price);
    setProducts([...products, newProduct]);
    const storedProducts = getFromLocalStorage();
    storedProducts.push(newProduct);
    saveToLocalStorage(storedProducts)
  };

  const editProduct = (id, name, quantity, price) => {
    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        product.name = name;
        product.quantity = quantity;
        product.price = price;
      }
      return product;
    });
    saveToLocalStorage(updatedProducts)
    setProducts(updatedProducts);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
    const newProducts = products.filter((product) => product.id !== id);
    saveToLocalStorage(newProducts);
  };

  const handleSearch = (searchTerm, filterType) => {
    setSearch(searchTerm);
    setFilter(filterType);
  };

  const exportToJSON = () => {
    const dataStr = JSON.stringify(products);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
  
    const exportFileDefaultName = 'products.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };
  
  const importFromJSON = (importedProducts) => {
    setProducts(importedProducts);
  };  

  return (
    <div>
      <Header />
      <Container>
      <ImportExportButtons onExport={exportToJSON} onImport={importFromJSON} />
        <SearchBar onSearch={handleSearch} />
        <AddProduct onAddProduct={addProduct} />
        <ProductList
          products={products}
          onDeleteProduct={deleteProduct}
          onEditProduct={editProduct}
          search={search}
          filter={filter} // Agrega el filter como prop
        />
      </Container>
    </div>
  );
}

export default App;