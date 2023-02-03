const ProductAbout = () => {
	return (
		<section className="p-4 md:max-w-md">
			<h2 className="text-Orange font-bold tracking-widest uppercase text-sm ">Sneaker Company</h2>
			<h1 className="text-3xl lg:text-4xl font-bold py-4 text-VeryDarkBlue">
				Fall Limited Edition Sneakers
			</h1>
			<p className="text-DarkGrayishBlue text-[15px] pb-4">
				These low-profile sneakers are your perfect casual wear companion. Featuring a durable
				rubber outer sole, they’ll withstand everything the weather can offer.
			</p>
			<div className="flex md:flex-col md:items-start justify-between items-center pr-4">
				<div className="flex gap-4 items-center">
					<p className="text-VeryDarkBlue text-3xl font-bold">$125.00</p>
					<p className="text-Orange bg-PaleOrange py-1 px-2 rounded-lg">50%</p>
				</div>
				<del className="text-lg text-DarkGrayishBlue">$250.00</del>
			</div>
		</section>
	);
};

export default ProductAbout;
