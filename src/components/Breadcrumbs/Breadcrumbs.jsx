import { useSelector } from 'react-redux';
import { v4 as randomUUID } from 'uuid';
import { FaChevronRight } from 'react-icons/fa';
import './Breadcrumbs.scss';

const Breadcrumbs = () => {
	const { responseData, isLoading, isError } = useSelector(state => state.storeApp.products);
	const { isLoading: loadingDetail, isError: errorDetail } = useSelector(
		state => state.storeApp.productDetail,
	);
	return (
		<>
			{!isLoading && !isError && !loadingDetail && !errorDetail && (
				<ol className='Breadcrumbs'>
					{responseData?.categories?.map((item, index) => {
						return (
							<>
								{index > 0 && (
									<span>
										<FaChevronRight size={8} style={{ minHeight: 26 }} />
									</span>
								)}
								<li key={randomUUID}>{item}</li>
							</>
						);
					})}
				</ol>
			)}
		</>
	);
};

export default Breadcrumbs;
