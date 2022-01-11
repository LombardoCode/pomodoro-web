import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = () => {
	const [leftDegrees, setLeftDegrees] = useState(180);
	const [rightDegrees, setRightDegrees] = useState(180);
	useEffect(() => {
		let interval = null;
		let firstHalfFinished = false;
		let secondHalfFinished = false;

		if (leftDegrees >= 180 && leftDegrees < 360) {
			interval = setInterval(() => {
				setLeftDegrees((oldDegrees) => oldDegrees + 1);
			}, 10);
		} else {
			firstHalfFinished = true;
		}

		if (firstHalfFinished && rightDegrees >= 180 && rightDegrees < 360) {
			interval = setInterval(() => {
				setRightDegrees((oldDegrees) => oldDegrees + 1);
			}, 10);
		} else {
			secondHalfFinished = true;
		}

		if (firstHalfFinished && secondHalfFinished) {
			setLeftDegrees(180);
			firstHalfFinished = false;

			setRightDegrees(180);
			secondHalfFinished = false;
		}

		return () => clearInterval(interval);
	}, [leftDegrees, rightDegrees]);

	const firstHalfStyle = {
		transform: `rotate(${leftDegrees}deg)`,
	};

	const secondHalfStyle = {
		transform: `rotate(${rightDegrees}deg)`,
	};

	return (
		<div className="flex justify-center">
			<div
				id="circle"
				className="relative flex flex-row-reverse text-white bg-blue-900 w-96 h-96 my-5 rounded-full overflow-hidden"
			>
				<div
					id="mini-circle"
					className="flex justify-center items-center rounded-full w-24 h-24 bg-blue-900"
				>
					<span id="display" className="text-3xl">
						Time
					</span>
				</div>
				<div id="first-half" className="w-1/2 h-full overflow-hidden">
					<div
						className="progress bg-white w-full h-full"
						style={firstHalfStyle}
					></div>
				</div>
				<div id="second-half" className="w-1/2 h-full overflow-hidden">
					<div
						className="progress bg-white w-full h-full"
						style={secondHalfStyle}
					></div>
				</div>
			</div>
		</div>
	);
};

export default Timer;
