import React, { useRef } from 'react';
import { Button, InputGroup } from 'react-bootstrap';

const ImportExportButtons = ({ onExport, onImport }) => {
  const fileInput = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          onImport(data);
        } catch (error) {
          alert('Error al importar el archivo JSON.');
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <InputGroup className="my-3">
      <Button onClick={onExport}>Exportar en JSON</Button>
      <input
        type="file"
        ref={fileInput}
        onChange={handleFileChange}
        style={{ display: 'none' }}
        accept=".json"
      />
      <Button
        onClick={() => {
          fileInput.current.click();
        }}
      >
        Importar desde JSON
      </Button>
    </InputGroup>
  );
};

export default ImportExportButtons;