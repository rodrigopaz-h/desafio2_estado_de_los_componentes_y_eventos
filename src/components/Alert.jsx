import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

export const Alerta = ({ formErrors, color }) => {
	return <>{formErrors && <Alert variant={color}>{formErrors}</Alert>}</>;
};

Alerta.propTypes = {
	formErrors: PropTypes.string,
	color: PropTypes.string,
};