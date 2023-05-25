import React, { useState, useEffect } from 'react';
import Product from './Product'; // No olvides importar el componente Product

const ProductList = ({ products, search, filter, onDeleteProduct, onEditProduct }) => {
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    const filtered = products.filter((product) => {
      const valueToFilter = search.toLowerCase();
      if (filter === 'name') {
        return product.name.toLowerCase().includes(valueToFilter);
      } else {
        return product.quantity.toString().includes(valueToFilter);
      }
    });
    setFilteredProducts(filtered);
  }, [search, filter, products]);

  return (
    <div>
      {filteredProducts.map((product) => (
        <Product
          key={product.id}
          product={product}
          onDeleteProduct={onDeleteProduct}
          onEditProduct={onEditProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;