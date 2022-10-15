import { useState } from 'react';
import { Button, Input, InputGroup } from 'reactstrap';
import { connect } from 'react-redux';
import { AiOutlineSearch } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProducts as getProductsAction } from '../../actions/storeApp/storeApp.action';
import Search from '../../assets/images/meli.png';
import config from '../../enviroment/enviroment';
import './Header.scss';

const Header = ({ getProducts }) => {
	const navigate = useNavigate();
	const [searchText, setsearchText] = useState('');
	const [invalid, setInvalid] = useState(false);

	const goToUrl = () => window.open(config.urlMeli, '_blank');

	const handleSearch = e => {
		if ((e.type === 'keypress' && e.key === 'Enter') || e.type === 'click') {
			if (searchText?.length) {
				getProducts(searchText?.toLowerCase(), navigate);
				setInvalid(false);
			} else {
				setInvalid(true);
			}
		}
	};

	return (
		<header className='Header'>
			<div className='Header__Container'>
				<img src={Search} alt='Header_Image' onClick={goToUrl} />
				<InputGroup>
					<Input
						type='search'
						placeholder='Nunca dejes de buscar'
						onChange={event => setsearchText(event.target.value)}
						maxLength={50}
						invalid={invalid}
						onKeyPress={ev => handleSearch(ev)}
					/>

					<Button className='Header__Search' type='submit' onClick={handleSearch}>
						<AiOutlineSearch size={30} />
					</Button>
				</InputGroup>
			</div>
		</header>
	);
};

Header.defaultProps = {
	getProducts: () => '',
};

Header.propTypes = {
	getProducts: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
	getProducts: (searchText, navigate) => dispatch(getProductsAction(searchText, navigate)),
});

export default connect(null, mapDispatchToProps)(Header);
