import ProductImg1Thumb from "../../assets/image-product-1-thumbnail.jpg";
import TrashIcon from "../../assets/icon-delete.svg";
import { useCartStore } from "../../hooks/useCartStore";

const CartItem = () => {
	const ProductCart = useCartStore((state) => state.product);
	const deleteProducts = useCartStore((state) => state.deleteProducts);

	return (
		<div className="grid grid-cols-[1fr_4fr_.5fr] gap-4 items-center justify-center place-content-start">
			<img src={ProductImg1Thumb} alt="" />
			<div className="text-sm text-DarkGrayishBlue">
				<p className="">Fall Limited Edition Sneakers</p>
				<p className="">
					$125.00 x {ProductCart}
					<span className="text-VeryDarkBlue font-bold"> ${ProductCart * 125}.00</span>
				</p>
			</div>
			<img className="cursor-pointer" src={TrashIcon} alt="" onClick={deleteProducts} />
		</div>
	);
};

export default CartItem;
