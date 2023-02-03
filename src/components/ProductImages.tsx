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
import ImageThumb from "./ImageThumb";
import { useWindowsSize } from "../hooks/useWindowsSize";

type Props = {
	setOpenLightBoxImage: React.Dispatch<React.SetStateAction<boolean>>;
};

const ProductSect = ({ setOpenLightBoxImage }: Props) => {
	const [carImg, setCarImg] = useState(1);
	const size = useWindowsSize();

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
		<div role="banner" className="relative md:pl-4">
			<div
				className="relative md:cursor-pointer"
				onClick={size >= 768 ? () => setOpenLightBoxImage(true) : undefined}>
				<img
					className={`${carImg === 1 ? "block" : "hidden"} md:rounded-3xl `}
					src={ProductImg1}
					alt="Product Picture"
				/>
				<img
					className={`${carImg === 2 ? "block" : "hidden"} md:rounded-3xl`}
					src={ProductImg2}
					alt="Product Picture"
				/>
				<img
					className={`${carImg === 3 ? "block" : "hidden"} md:rounded-3xl`}
					src={ProductImg3}
					alt="Product Picture"
				/>
				<img
					className={`${carImg === 4 ? "block" : "hidden"} md:rounded-3xl`}
					src={ProductImg4}
					alt="Product Picture"
				/>
			</div>
			<img
				src={ArrowNext}
				alt="Arrow next"
				className={`absolute p-3 pl-4 pr-3 top-[50%] -translate-y-[50%] right-4 bg-white rounded-full md:hidden cursor-pointer ${
					carImg === 4 && "cursor-not-allowed"
				}`}
				onClick={setCartImgNext}
			/>
			<img
				src={ArrowPrev}
				alt="Arrow next"
				className={`absolute p-3 pr-4 pl-3 top-[50%] -translate-y-[50%] left-4 bg-white rounded-full md:hidden cursor-pointer ${
					carImg === 1 && "cursor-not-allowed"
				}`}
				onClick={setCartImgPrev}
			/>
			<div className="hidden md:grid md:grid-cols-4 md:gap-6 md:my-6">
				<ImageThumb carImg={carImg} setCarImg={setCarImg} value={1} imgSrc={ProductImg1Thumb} />
				<ImageThumb carImg={carImg} setCarImg={setCarImg} value={2} imgSrc={ProductImg2Thumb} />
				<ImageThumb carImg={carImg} setCarImg={setCarImg} value={3} imgSrc={ProductImg3Thumb} />
				<ImageThumb carImg={carImg} setCarImg={setCarImg} value={4} imgSrc={ProductImg4Thumb} />
			</div>
		</div>
	);
};

export default ProductSect;
