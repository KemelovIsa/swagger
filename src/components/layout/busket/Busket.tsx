import React from 'react';
import { useNavigate } from 'react-router-dom';
import scss from './Busket.module.scss';
import { useGetBusketQuery } from '../../../redux/api/busket';
import { usePatchProductMutation } from '../../../redux/api/buy/index';

const Busket: React.FC = () => {
	const navigate = useNavigate();

	const { data, isLoading } = useGetBusketQuery();
	const [patchProduct] = usePatchProductMutation();

	const perevods = () => {
		navigate('/');
	};

	const handleBuy = async (id: number) => {
		try {
			const newData = {
				buyQuantity: 1
			};
			await patchProduct({ newData, id });
		} catch (error) {
			console.error('Error buying product:', error);
		}
	};

	return (
		<>
			<button onClick={perevods}>to home</button>

			{isLoading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{data?.results.map((item) => (
						<div key={item.id}>
							<img className={scss.busketImg} src={item.photo} alt="" />
							<p>{item.title}</p>
							<p>{item.price}</p>
							<p>{item.quantity}</p>
							<button onClick={() => handleBuy(item.id)}>купить</button>
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Busket;
