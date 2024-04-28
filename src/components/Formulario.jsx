import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";

export const Formulario = ({ onChange, handleErrors }) => {
  const onSubmit = (event) => {
    event.preventDefault();

    const regexCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const { nombre, email, contraseña, confirmacionContraseña } = event.target;

    const dictionary = {
      requiredData: {
        text: "Por favor, ingresa los datos requeridos",
        color: "danger",
      },
      invalidPassword: {
        text: "Por favor, ingresa un correo electrónico válido",
        color: "danger",
      },
      notMatchPasswords: {
        text: "Las contraseñas no coinciden. Por favor, intenta de nuevo",
        color: "danger",
      },
      success: {
        text: "Te has registrado con éxito!",
        color: "success",
      },
    };

    const errorMesages =
      !nombre.value || !email.value || !contraseña.value || !confirmacionContraseña.value
        ? dictionary.requiredData
        : !regexCorreo.test(email.value)
        ? dictionary.invalidPassword
        : contraseña.value !== confirmacionContraseña.value
        ? dictionary.notMatchPasswords
        : dictionary.success;

    handleErrors(errorMesages);
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
        <Form.Control
          type="password"
          placeholder="Contraseña"
          name="contraseña"
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword2">
        <Form.Control
          type="password"
          placeholder="Confirma tu contraseña"
          name="confirmacionContraseña"
          onChange={onChange}
        />
      </Form.Group>

      <Button variant="success" type="submit">
        Registrarse
      </Button>
    </Form>
  );
};

Formulario.propTypes = {
  handleErrors: PropTypes.func.isRequired,
};
