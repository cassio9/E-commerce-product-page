import ProductImg4Thumb from "../assets/image-product-4-thumbnail.jpg";
import ProductImg4 from "../assets/image-product-4.jpg";
import ProductImg3Thumb from "../assets/image-product-3-thumbnail.jpg";
import ProductImg3 from "../assets/image-product-3.jpg";
import ProductImg2Thumb from "../assets/image-product-2-thumbnail.jpg";
import ProductImg2 from "../assets/image-product-2.jpg";
import ProductImg1Thumb from "../assets/image-product-1-thumbnail.jpg";
import ProductImg1 from "../assets/image-product-1.jpg";
import ArrowNext from "../assets/icon-next.svg";
import ArrowNextHover from "../assets/icon-nextHover.svg";
import ArrowPrev from "../assets/icon-previous.svg";
import ArrowPrevHover from "../assets/icon-previousHover.svg";
import { useState } from "react";
import ImageThumb from "./ImageThumb";

const ProductSect = () => {
	const [carImg, setCarImg] = useState(1);
	const [nextFlipSvg, setNextFlipSvg] = useState(false);
	const [prevFlipSvg, setPrevFlipSvg] = useState(false);

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
		<div role="productImages" className="max-w-sm md:pl-4">
			<div className="relative">
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
				src={!nextFlipSvg ? ArrowNext : ArrowNextHover}
				style={{ zIndex: 100 }}
				alt="Arrow next"
				className={`absolute p-3 pl-4 pr-3 top-[45%] -translate-y-[50%] -right-5 bg-white rounded-full cursor-pointer ${
					carImg === 4 && "cursor-not-allowed"
				}`}
				onClick={setCartImgNext}
				onMouseEnter={() => setNextFlipSvg(true)}
				onMouseLeave={() => setNextFlipSvg(false)}
			/>

			<img
				src={!prevFlipSvg ? ArrowPrev : ArrowPrevHover}
				alt="Arrow next"
				className={`absolute p-3 pr-4 pl-3 top-[45%] -translate-y-[50%] -left-1 bg-white rounded-full cursor-pointer ${
					carImg === 1 && "cursor-not-allowed"
				}`}
				onClick={setCartImgPrev}
				onMouseEnter={() => setPrevFlipSvg(true)}
				onMouseLeave={() => setPrevFlipSvg(false)}
			/>

			<div className="hidden md:grid md:grid-cols-4 md:gap-6 md:my-6">
				<div className="bg-white rounded-2xl w-[101%]">
					<ImageThumb carImg={carImg} setCarImg={setCarImg} value={1} imgSrc={ProductImg1Thumb} />
				</div>
				<div className="bg-white rounded-2xl w-[101%]">
					<ImageThumb carImg={carImg} setCarImg={setCarImg} value={2} imgSrc={ProductImg2Thumb} />
				</div>
				<div className="bg-white rounded-2xl w-[101%]">
					<ImageThumb carImg={carImg} setCarImg={setCarImg} value={3} imgSrc={ProductImg3Thumb} />
				</div>
				<div className="bg-white rounded-2xl w-[101%]">
					<ImageThumb carImg={carImg} setCarImg={setCarImg} value={4} imgSrc={ProductImg4Thumb} />
				</div>
			</div>
		</div>
	);
};

export default ProductSect;
