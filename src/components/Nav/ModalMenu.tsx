import CloseIcon from "../../assets/icon-close.svg";
import { modalNavBarHtml } from "../../utilsNav";

type Props = {
	openModal: boolean;
	setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

const ModalMenu = ({ openModal, setOpenModal }: Props) => {
	return (
		<div className="absolute ease-in transition-all duration-1000" style={{ zIndex: 100 }}>
			<div
				className={`fixed bg-black opacity-70 w-full top-0 bottom-0  ease-in transition-all duration-300 ${
					openModal ? "left-0 " : "-left-[100%]"
				}`}
				onClick={() => setOpenModal(false)}></div>
			<div
				className={`fixed h-screen w-[75%] flex flex-col p-4 top-0 bottom-0 justify-start items-start bg-white ease-in transition-all duration-500 
                ${openModal ? "left-0 " : "-left-[100%]"}`}>
				<img
					src={CloseIcon}
					alt="Close Icon"
					className="mb-12 cursor-pointer p-4 -translate-x-4 -translate-y-4"
					onClick={() => setOpenModal(false)}
				/>
				<ul className="flex flex-col gap-6 font-bold text-VeryDarkBlue cursor-pointer">
					{modalNavBarHtml}
				</ul>
			</div>
		</div>
	);
};

export default ModalMenu;
