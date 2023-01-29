import CartIcon from "../assets/icon-cart.svg";
import { useCartStore } from "../useCartStore";

const Cart = () => {
	const previewProduct = useCartStore((state) => state.previewProduct);
	const increase = useCartStore((state) => state.increase);
	const decrease = useCartStore((state) => state.decrease);
	const addCart = useCartStore((state) => state.AddCart);

	return (
		<div className="p-4">
			<div className="flex justify-around bg-LightGrayishBlue px-4 py-2 items-center rounded-xl">
				<div className="text-Orange text-3xl px-4 pb-1" onClick={decrease}>
					-
				</div>
				<p className="font-bold text-xl">{previewProduct}</p>
				<div className="text-Orange text-3xl px-4 pb-1" onClick={increase}>
					+
				</div>
			</div>
			<button
				className="flex justify-center bg-Orange w-full p-4 rounded-lg text-white items-center gap-4 mt-4"
				onClick={addCart}>
				<span>
					<img src={CartIcon} alt="" />
				</span>
				Add to cart
			</button>
		</div>
	);
};

export default Cart;
