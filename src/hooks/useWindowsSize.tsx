import { useEffect, useState } from "react";

export const useWindowsSize = () => {
	const [widthSize, setWidthSize] = useState(window.innerWidth);

	useEffect(() => {
		const handleResize = () => {
			setWidthSize(window.innerWidth);
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return widthSize;
};
