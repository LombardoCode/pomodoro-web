import "./modal.css";

const Modal = ({ children, setShowModal }) => {
	const hideModal = (e) => {
		if (e.target == e.currentTarget) {
			setShowModal(false);
		}
	};

	return (
		<div className="overlay" onClick={hideModal}>
			<div className="modal w-96 bg-white px-5 py-2">
				<span
					id="xcross"
					className="absolute flex justify-center items-center -right-4 -top-5 bg-red-600 hover:bg-red-700 transition-all w-12 h-12 rounded-full cursor-pointer"
					onClick={hideModal}
				>
					<i
						className="fas fa-times text-white font-bold text-xl"
						onClick={hideModal}
					></i>
				</span>
				<div>{children}</div>
			</div>
		</div>
	);
};

export default Modal;
