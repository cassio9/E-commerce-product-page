import Hamburger from "../assets/icon-menu.svg";
import Avatar from "../assets/image-avatar.png";
import Logo from "../assets/logo.svg";
import Cart from "../assets/icon-cart1.svg";
import { useState } from "react";
import ModalMenu from "./ModalMenu";
import { useCartStore } from "../useCartStore";
import ModalCart from "./ModalCart";

const Header = () => {
	const [openModal, setOpenModal] = useState(false);
	const [openCartModal, setOpenCartModal] = useState(false);
	const product = useCartStore((state) => state.product);
	//function to make scroll stop when nav is open

	return (
		<div
			className="md:border-b-2 md:pb-8 md:mb-4 md:max-w-4xl lg:mx-auto flex justify-between items-center p-4 relative"
			style={{ zIndex: 100 }}>
			<div className="flex items-baseline gap-4">
				<img
					src={Hamburger}
					alt="menu icon"
					onClick={() => setOpenModal(true)}
					className="cursor-pointer md:hidden"
				/>
				<img src={Logo} alt="" />
				<nav className="md:flex ml-10 gap-4 text-DarkGrayishBlue hidden list-none">
					<li>Collections</li>
					<li>Men</li>
					<li>Women</li>
					<li>About</li>
					<li>Contact</li>
				</nav>
			</div>
			<div className="lg:relative flex items-center gap-4">
				<img src={Cart} alt="Cart icon" onClick={() => setOpenCartModal((prev) => !prev)} />
				<img className="w-7" src={Avatar} alt="Cart icon" />
				{product && !openCartModal ? (
					<div className="absolute px-2 leading-4 text-sm rounded-xl bg-Orange text-white translate-x-2 -translate-y-2">
						{product}
					</div>
				) : (
					""
				)}
				{openCartModal && <ModalCart />}
			</div>
			<ModalMenu setOpenModal={setOpenModal} openModal={openModal} />
		</div>
	);
};

export default Header;
