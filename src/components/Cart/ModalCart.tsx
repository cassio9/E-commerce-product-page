import CartItem from "./CartItem";
import { useCartStore } from "../../hooks/useCartStore";
import { useRef, useEffect } from "react";

type Props = {
	setOpenCartModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalCart = ({ setOpenCartModal }: Props) => {
	const ProductCart = useCartStore((state) => state.product);
	const ref = useRef<any>(null);

	//close ModalCart clicking outside
	useEffect(() => {
		function handleClickOutside(event: any): void {
			if (event.target.id !== "123") {
				if (ref.current && !ref.current.contains(event.target as Node)) {
					setOpenCartModal(false);
				}
			}
		}

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	});

	return (
		<div
			role="menu"
			ref={ref}
			className="absolute md:w-[350px] h-[250px] left-4 md:left-[52%] lg:left-[63%] md:fixed md:right-20 right-4 w-full max-w-md mx-auto md:ml-auto md:top-16 shadow-lg top-20 rounded-lg bg-white h-70 grid grid-rows-[1fr_3fr]"
			style={{ zIndex: 10 }}>
			<p className="p-4 border-b-[1px] font-bold">Cart</p>
			{ProductCart ? (
				<div className="p-4">
					<CartItem />
					<button className="flex justify-center bg-Orange w-full p-4 rounded-lg text-white items-center gap-4 mt-4">
						Checkout
					</button>
				</div>
			) : (
				<p className="m-auto text-DarkGrayishBlue font-bold">Your cart is empty.</p>
			)}
		</div>
	);
};

export default ModalCart;
