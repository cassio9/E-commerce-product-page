import "./App.css";
import Header from "./components/Header";
import ProductAbout from "./components/ProductAbout";
import ProductSect from "./components/ProductImages";
import CartAdd from "./components/CartAdd";

function App() {
	return (
		<div className="bg-white font-KumbhSans">
			<Header />
			<div className="max-w-lg mx-auto md:grid md:max-w-4xl lg:max-w-4xl md:grid-cols-[1fr_1fr] md:grid-rows-1 gap-6 items-center justify-center">
				<ProductSect />
				<div>
					<ProductAbout />
					<CartAdd />
				</div>
			</div>
		</div>
	);
}

export default App;
