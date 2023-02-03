import "./App.css";
import Header from "./components/Nav/Header";
import ProductAbout from "./components/ProductAbout";
import ProductImages from "./components/ProductImages";
import CartAdd from "./components/Cart/CartAdd";
import ProductImagesLightBox from "./components/ProductImagesLightBox";
import { useState, useRef } from "react";
import CloseModal from "./assets/icon-close.svg";
import CloseModalHover from "./assets/icon-closeHover.svg";

function App() {
	const [openLightBoxImage, setOpenLightBoxImage] = useState(false);
	const [hoverClose, setHoverClose] = useState(false);

	return (
		<main className="bg-white font-KumbhSans relative">
			<Header />
			<div className="max-w-lg mx-auto md:grid md:max-w-4xl lg:max-w-4xl md:grid-cols-[1fr_1fr] md:grid-rows-1 gap-6 items-center justify-center md:mt-10">
				<ProductImages setOpenLightBoxImage={setOpenLightBoxImage} />
				<div>
					<ProductAbout />
					<CartAdd />
				</div>
			</div>

			{openLightBoxImage && (
				<div>
					<div
						className={`fixed bg-black opacity-80 w-full top-0 bottom-0  ease-in transition-all duration-300`}
						onClick={() => setOpenLightBoxImage(false)}></div>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
						<img
							className="ml-auto my-5 cursor-pointer w-5"
							src={hoverClose ? CloseModalHover : CloseModal}
							alt="Close Modal"
							onClick={() => setOpenLightBoxImage(false)}
							onMouseEnter={() => setHoverClose(true)}
							onMouseLeave={() => setHoverClose(false)}
						/>
						<ProductImagesLightBox />
					</div>
				</div>
			)}
		</main>
	);
}

export default App;
