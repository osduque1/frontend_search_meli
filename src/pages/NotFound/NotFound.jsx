import Error from '../../assets/images/error.svg';
import { Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import './NotFound.scss';

const NotFound = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate('/');
  };

  return (
    <section className='NotFound'>
      <img className='NotFound__Img' src={Error} alt='Error' />
      <h2>¿Te has perdido?</h2>
      <Button
        className='NotFound__Home'
        color='primary'
        onClick={goToHome}
        outline
      >
        Vuelve al Inicio
      </Button>
    </section>
  );
};

export default NotFound;
