import PropTypes from 'prop-types'; // Cambio en la importación

export const SocialButton = ({ icon }) => {
  return (
    <div className='iconos'>
      {icon.map((iconClass, key) => ( 
        <div className='subIcono' key={key}>
            <i className={iconClass}></i> 
        </div>
      ))}
    </div>
  );
};

SocialButton.propTypes = {
  icon: PropTypes.array,
};
