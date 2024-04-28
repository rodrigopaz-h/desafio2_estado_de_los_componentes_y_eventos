import PropTypes from 'prop-types';
import Alert from 'react-bootstrap/Alert';

export const Alerta = ({ text, color }) => {
	return <>{text && <Alert variant={color}>{text}</Alert>}</>;
};

Alerta.propTypes = {
	text: PropTypes.string,
	color: PropTypes.string,
};