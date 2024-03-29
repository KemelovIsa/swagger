import scss from './Header.module.scss';
import { useGetMeQuery } from '../../../redux/api/me';
import { useNavigate } from 'react-router-dom';

const Header = () => {
	const navigate = useNavigate();

	const { data } = useGetMeQuery();
	console.log(data);

	const GoogleLogin = () => {
		window.open(
			`${import.meta.env.VITE_PUBLIC_API_URL}/api/v1/auth/login/google`,
			'_self'
		);
	};
	const perevod = () => {
		navigate('/busket');
	};
	const perevods = () => {
		navigate('/favorite');
	};
	const perevodss = () => {
		navigate('/bought');
	};

	return (
		<>
			<header className={scss.Header}>
				<div className="container">
					<div className={scss.content}>
						<div>
							<img
								className={scss.google_icon}
								onClick={GoogleLogin}
								src="src/assets/brand-google.svg"
								alt="google-icon"
							/>
						</div>
						<div className={scss.firstImage}>
							<img
								onClick={perevod}
								src="src/assets/bucket-off.svg"
								alt="busket"
							/>
							<img
								onClick={perevods}
								src="src/assets/heart (1).svg"
								alt="favorite"
							/>
							<img
								onClick={perevodss}
								src="src/assets/shopping-bag.svg"
								alt="bought"
							/>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
