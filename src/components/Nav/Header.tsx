import Hamburger from "../../assets/icon-menu.svg";
import Avatar from "../../assets/image-avatar.png";
import Logo from "../../assets/logo.svg";
import Cart from "../../assets/icon-cart1.svg";
import { useState, useEffect } from "react";
import ModalMenu from "./ModalMenu";
import { useCartStore } from "../../hooks/useCartStore";
import ModalCart from "../Cart/ModalCart";
import { navBarHtml } from "../../utilsNav";

const Header = () => {
	const [openModal, setOpenModal] = useState(false);
	const [openCartModal, setOpenCartModal] = useState(false);
	const product = useCartStore((state) => state.product);

	//function to make scroll stop when nav is open
	useEffect(() => {
		openModal ? (document.body.style.overflow = "hidden") : (document.body.style.overflow = "auto");
	}, [openModal]);

	return (
		<header className="md:border-b-[1px] md:h-20 md:mb-4 md:max-w-5xl mx-auto max-w-lg  flex justify-between items-center p-4 md:relative">
			<div className="flex items-center md:h-20 gap-4">
				<img
					src={Hamburger}
					alt="menu icon"
					onClick={() => setOpenModal(true)}
					className="cursor-pointer md:hidden"
				/>
				<img src={Logo} alt="" />
				<ul className="md:flex ml-10 gap-4 text-DarkGrayishBlue hidden list-none items-center md:h-20 md:translate-y-4">
					{navBarHtml}
				</ul>
			</div>
			<div className="flex items-center gap-4">
				<img
					id="123"
					src={Cart}
					className="cursor-pointer relative"
					alt="Cart icon"
					onClick={() => setOpenCartModal((prev) => !prev)}
				/>
				<img
					className="w-7 cursor-pointer hover:outline-none hover:outline-Orange rounded-full"
					src={Avatar}
					alt="Cart icon"
				/>
				{product && !openCartModal ? (
					<div
						className="absolute px-2 leading-4 text-sm rounded-xl bg-Orange text-white translate-x-2 -translate-y-2 cursor-pointer"
						onClick={() => setOpenCartModal((prev) => !prev)}>
						{product}
					</div>
				) : (
					""
				)}
			</div>
			{openCartModal && <ModalCart setOpenCartModal={setOpenCartModal} />}
			<ModalMenu setOpenModal={setOpenModal} openModal={openModal} />
		</header>
	);
};

export default Header;
