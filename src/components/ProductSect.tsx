import ProductImg from "../assets/image-product-1.jpg";
import ArrowNext from "../assets/icon-next.svg";
import ArrowPrev from "../assets/icon-previous.svg";
import { useState } from "react";

const ProductSect = () => {
	const [carImg, setCarImg] = useState(1);

	return (
		<div className="relative">
			<img
				src={ArrowNext}
				alt="Arrow next"
				className="absolute p-3 pl-4 pr-3 top-[50%] -translate-y-[50%] right-4 bg-white rounded-full"
			/>
			<img
				src={ArrowPrev}
				alt="Arrow next"
				className="absolute p-3 pr-4 pl-3 top-[50%] -translate-y-[50%] left-4 bg-white rounded-full"
			/>
			<img src={ProductImg} alt="" />
		</div>
	);
};

export default ProductSect;
