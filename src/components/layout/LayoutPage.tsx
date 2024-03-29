import scss from './LayoutPage.module.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './header/Header';
import Footer from './footer/Footer';
import HomePage from '../pages/HomePage';
import Busket from './busket/Busket';
import Favorite from './favorite/Favorite';
import Bought from './bought/Bought';

const LayoutPage = () => {
	return (
		<>
			<div className={scss.layout}>
				<Header />
				<main>
					<Routes>
						<Route path="/" element={<HomePage />} />
						<Route path="/busket" element={<Busket />} />
						<Route path="/favorite" element={<Favorite />} />
						<Route path="/bought" element={<Bought />} />
					</Routes>
				</main>
				<Footer />
			</div>
		</>
	);
};
export default LayoutPage;
