import scss from './Welcome.module.scss';
import { useGetProductsQuery } from '../../../redux/api/product';
import { useFavoritePatchMutation } from '../../../redux/api/favorite';
import { useBusketPatchMutation } from '../../../redux/api/busket';

const Welcome = () => {
	const { data, isLoading } = useGetProductsQuery();
	const [toggleFavoriteProduct] = useFavoritePatchMutation();
	const [toggleBusketProduct] = useBusketPatchMutation();

	const handleChanegeFavorite = async (id: number) => {
		await toggleFavoriteProduct(id);
	};

	const handleChangeBusket = async (id: number) => {
		await toggleBusketProduct(id);
	};

	return (
		<>
			<section className={scss.Welcome}>
				<div className="container">
					<div className={scss.content}>
						<h1>Welcome Developer!</h1>
						<div>
							{isLoading ? (
								<h1>Loading...</h1>
							) : (
								<>
									<div className={scss.fragma}>
										{data?.results.map((item) => (
											<div key={item.id} className={scss.product}>
												<img
													className={scss.vendor_img}
													src={item.vendor.photo}
													alt={item.vendor.name}
												/>
												<img
													className={scss.product_img}
													src={item.photo}
													alt={item.title}
												/>
												<h2>{item.title}</h2>
												<p>{item.price}</p>
												<p>{item.quantity}</p>
												<p>{item.createdAt}</p>
												<div className={scss.vendor}>
													<h3>{item.vendor.name}</h3>
													<p>{item.vendor.login}</p>
													<div className={scss.twos}>
														<img
															onClick={() => {
																handleChangeBusket(item.id);
															}}
															src="src/assets/bucket-off.svg"
															alt="busket"
														/>
														<label className={scss.containerss}>
															<input
																type="checkbox"
																onChange={() => {
																	handleChanegeFavorite(item.id);
																}}
															/>
															<svg
																onClick={() => {
																	handleChanegeFavorite(item.id);
																}}
																id="Layer_1"
																version="1.0"
																viewBox="0 0 24 24"
																xmlSpace="preserve"
																xmlns="http://www.w3.org/2000/svg"
																xmlnsXlink="http://www.w3.org/1999/xlink"
															>
																<path d="M16.4,4C14.6,4,13,4.9,12,6.3C11,4.9,9.4,4,7.6,4C4.5,4,2,6.5,2,9.6C2,14,12,22,12,22s10-8,10-12.4C22,6.5,19.5,4,16.4,4z"></path>
															</svg>
														</label>
													</div>
												</div>
											</div>
										))}
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Welcome;
