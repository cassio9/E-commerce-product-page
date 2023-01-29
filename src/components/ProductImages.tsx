import ProductImg4Thumb from "../assets/image-product-4-thumbnail.jpg";
import ProductImg4 from "../assets/image-product-4.jpg";
import ProductImg3Thumb from "../assets/image-product-3-thumbnail.jpg";
import ProductImg3 from "../assets/image-product-3.jpg";
import ProductImg2Thumb from "../assets/image-product-2-thumbnail.jpg";
import ProductImg2 from "../assets/image-product-2.jpg";
import ProductImg1Thumb from "../assets/image-product-1-thumbnail.jpg";
import ProductImg1 from "../assets/image-product-1.jpg";
import ArrowNext from "../assets/icon-next.svg";
import ArrowPrev from "../assets/icon-previous.svg";
import { useState } from "react";

const ProductSect = () => {
	const [carImg, setCarImg] = useState(1);

	const setCartImgNext = () => {
		if (carImg < 4) {
			setCarImg((prev) => prev + 1);
		}
		return;
	};
	const setCartImgPrev = () => {
		if (carImg > 1) {
			setCarImg((prev) => prev - 1);
		}
		return;
	};

	return (
		<div className="relative">
			<div className="relative">
				<img
					className={`${carImg === 1 ? "block" : "hidden"}`}
					src={ProductImg1}
					alt="Product Picture"
				/>
				<img
					className={`${carImg === 2 ? "block" : "hidden"}`}
					src={ProductImg2}
					alt="Product Picture"
				/>
				<img
					className={`${carImg === 3 ? "block" : "hidden"}`}
					src={ProductImg3}
					alt="Product Picture"
				/>
				<img
					className={`${carImg === 4 ? "block" : "hidden"}`}
					src={ProductImg4}
					alt="Product Picture"
				/>
			</div>
			<img
				src={ArrowNext}
				alt="Arrow next"
				className="absolute p-3 pl-4 pr-3 top-[50%] -translate-y-[50%] right-4 bg-white rounded-full"
				onClick={setCartImgNext}
			/>
			<img
				src={ArrowPrev}
				alt="Arrow next"
				className="absolute p-3 pr-4 pl-3 top-[50%] -translate-y-[50%] left-4 bg-white rounded-full"
				onClick={setCartImgPrev}
			/>
		</div>
	);
};

export default ProductSect;
