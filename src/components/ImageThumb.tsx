interface Props {
	carImg: number;
	setCarImg: (value: React.SetStateAction<number>) => void;
	value: number;
	imgSrc: string;
}

const ImageContainer = ({ carImg, setCarImg, value, imgSrc }: Props) => {
	return (
		<div
			role="status"
			className={`bg-white rounded-2xl hover:opacity-60 ${
				carImg === value && "border-2 border-Orange  "
			} `}>
			<img
				className={`rounded-xl  cursor-pointer ${carImg === value && "opacity-60"}`}
				src={imgSrc}
				alt="Product Picture"
				onClick={() => setCarImg(value)}
			/>
		</div>
	);
};

export default ImageContainer;
