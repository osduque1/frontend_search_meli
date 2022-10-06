import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'reactstrap';
import './Loader.scss';

const Loader = ({ title, description }) => {
  return (
    <div className='Loader'>
      <div className='Loader__Container'>
        <h5>{title}</h5>
        <Spinner color='primary' className='Loader__Spinner' />
        <p>{description}</p>
      </div>
    </div>
  );
};

Loader.defaultProps = {
  title: '¡Cargando!',
  description: 'Espera un momento',
};

Loader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Loader;
