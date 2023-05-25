import React, { useState } from 'react';
import { InputGroup, FormControl, Dropdown } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('name');

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
    onSearch(e.target.value, filterType);
  };

  const handleFilterTypeChange = (filterValue) => {
    setFilterType(filterValue);
    onSearch(searchTerm, filterValue);
  };

  return (
    <InputGroup className="mb-3">
      <FormControl
        type="text"
        placeholder="Buscar..."
        value={searchTerm}
        onChange={handleSearchTermChange}
      />
      <Dropdown onSelect={handleFilterTypeChange}>
        <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic">
          {filterType === 'name' ? 'Nombre' : 'Cantidad'}
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item eventKey="name">Nombre</Dropdown.Item>
          <Dropdown.Item eventKey="quantity">Cantidad</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </InputGroup>
  );
};

export default SearchBar;