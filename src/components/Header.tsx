import Hamburger from "../assets/icon-menu.svg";
import Avatar from "../assets/image-avatar.png";
import Cart from "../assets/icon-cart.svg";
import { useState } from "react";
import ModalMenu from "./ModalMenu";

const Header = () => {
	const [OpenModal, setOpenModal] = useState(false);

	//function to make scroll stop when nav is open

	return (
		<div className="flex justify-between items-center p-4 relative">
			<div className="flex items-baseline gap-4">
				<img
					src={Hamburger}
					alt="menu icon"
					onClick={() => setOpenModal(true)}
					className="cursor-pointer lg:hidden"
				/>
				<h1 className="text-3xl font-bold opacity-70">sneakers</h1>
				<nav className="lg:flex ml-10 gap-4 text-DarkGrayishBlue hidden list-none">
					<li>Collections</li>
					<li>Men</li>
					<li>Women</li>
					<li>About</li>
					<li>Contact</li>
				</nav>
			</div>
			<div className="flex items-center gap-4">
				<img src={Cart} alt="Cart icon" />
				<img className="w-7" src={Avatar} alt="Cart icon" />
			</div>
			<ModalMenu setOpenModal={setOpenModal} OpenModal={OpenModal} />
		</div>
	);
};

export default Header;
