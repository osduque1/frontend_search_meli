import { useNavigate } from 'react-router-dom';
import Error from '../../assets/images/error.svg';
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
			<button className='NotFound__Home btn btn-primary' onClick={goToHome}>
				Vuelve al Inicio
			</button>
		</section>
	);
};

export default NotFound;
