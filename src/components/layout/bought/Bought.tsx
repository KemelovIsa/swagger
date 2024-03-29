import { useGetHistoryQuery } from '../../../redux/api/buy';
import { useNavigate } from 'react-router-dom';

const Bought = () => {
	const navigate = useNavigate();
	const { data } = useGetHistoryQuery();
	console.log(data);

	const perevodsss = () => {
		navigate('/');
	};

	return (
		<div>
			<button onClick={perevodsss}>to home</button>
			{data?.results.map((item) => (
				<div>
					{item.buyer.name}
					<img src={item.buyer.photo} alt={item.buyer.name} />
					<h2>{item.title}</h2>
					<p>{item.product.photo}</p>
					<p>{item.product.price}</p>
					<p>{item.product.quantity}</p>
				</div>
			))}
		</div>
	);
};

export default Bought;
