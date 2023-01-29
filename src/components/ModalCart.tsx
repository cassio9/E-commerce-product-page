import CartItem from "./CartItem";
import { useCartStore } from "../useCartStore";

const ModalCart = () => {
	const ProductCart = useCartStore((state) => state.product);

	return (
		<div className="lg:absolute lg:top-10 fixed left-4 right-4 top-20 rounded-lg bg-white h-70 grid grid-rows-[1fr_3fr]">
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
