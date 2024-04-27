import React, { useState } from 'react';
import './App.css';
import { Registro } from './components/Registro';

function App() {
  const [formErrors, setFormErrors] = useState('');

  const [form, setForm] = useState({nombre: '', email: '', contraseña: '', confirmacionContraseña: ''
	});
  
  const onChange = (event) => {
    const { name, value } = event.target;

    setForm({
			...form,
			[name]: value,
		});
  };

  const handleErrors = (error) => {
    setFormErrors(error);
  };

  return (
    <>
      <Registro
        onChange={onChange}
        handleErrors={handleErrors}
        formErrors={formErrors}
      />
    </>
  );
}

export default App;

