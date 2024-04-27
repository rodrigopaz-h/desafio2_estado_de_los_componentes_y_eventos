import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import PropTypes from 'prop-types';

export const Formulario = ({onChange, handleErrors }) => {
  const onSubmit = (event) => {
    event.preventDefault();
  
    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
    const { nombre, email, contraseña, confirmacionContraseña } = event.target;
  
    const mensajeError =
      !nombre.value || !email.value || !contraseña.value || !confirmacionContraseña.value ? 'Por favor, ingresa los datos requeridos'
      : !regexCorreo.test(email.value) ? 'Por favor, ingresa un correo electrónico válido'
      : contraseña.value !== confirmacionContraseña.value ? 'Las contraseñas no coinciden. Por favor, intenta de nuevo'
      : 'Te has registrado con éxito!';
  
    handleErrors(mensajeError);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3">
        <Form.Control type="text" placeholder="Nombre" name="nombre" onChange={onChange} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="email" placeholder="tuemail@ejemplo" name="email" onChange={onChange} />
      </Form.Group>
  
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Contraseña" name="contraseña" onChange={onChange} />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="password" placeholder="Confirma tu contraseña" name="confirmacionContraseña" onChange={onChange} />
      </Form.Group>
  
      <Button variant="primary" type="submit">Regístrarse</Button>
    </Form>
  );
};


Formulario.propTypes = {
  handleErrors: PropTypes.func.isRequired,
};