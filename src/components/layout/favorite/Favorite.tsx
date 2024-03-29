import React from 'react';
import { useGetFavoriteQuery } from '../../../redux/api/favorite';
import { useNavigate } from 'react-router-dom';
import scss from './Favorite.module.scss';

const Favorite: React.FC = () => {
	const navigate = useNavigate();

	const { data, isLoading } = useGetFavoriteQuery();

	const perevods = () => {
		navigate('/');
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
						</div>
					))}
				</div>
			)}
		</>
	);
};

export default Favorite;
