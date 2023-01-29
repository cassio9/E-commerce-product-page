import "./App.css";
import Header from "./components/Header";
import ProductAbout from "./components/ProductAbout";
import ProductSect from "./components/ProductImages";
import CartAdd from "./components/CartAdd";

function App() {
	return (
		<div className="bg-white font-KumbhSans">
			<Header />
			<ProductSect />
			<ProductAbout />
			<CartAdd />
		</div>
	);
}

export default App;
