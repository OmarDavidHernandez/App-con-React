export class Product {
  constructor(id, name, quantity, price) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }
  
  edit(name, quantity, price) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
  }

}

const LOCAL_STORAGE_KEY = 'products';

export const saveToLocalStorage = (products) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(products));
};

export const getFromLocalStorage = () => {
  const storedProducts = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedProducts ? JSON.parse(storedProducts) : [];
};