import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = ({
	minutes,
	active,
	setActive,
	leftDegrees,
	setLeftDegrees,
	rightDegrees,
	setRightDegrees,
}) => {
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		let interval = null;
		let firstHalfFinished = false;
		let secondHalfFinished = false;
		const seconds = minutes.pomodoroMinutes * 60;
		const deegreesToTurn = 180 / (seconds / 2);

		let leftPercentage = (50 / 180) * (leftDegrees - 180);
		let rightPercentage = (50 / 180) * (rightDegrees - 180);
		setPercentage(leftPercentage + rightPercentage);

		if (active) {
			if (leftDegrees >= 180 && leftDegrees < 360) {
				interval = setInterval(() => {
					setLeftDegrees((oldDegrees) => oldDegrees + deegreesToTurn);
				}, 1000);
			} else {
				firstHalfFinished = true;
			}

			if (firstHalfFinished && rightDegrees >= 180 && rightDegrees < 361) {
				interval = setInterval(() => {
					setRightDegrees((oldDegrees) => oldDegrees + deegreesToTurn);
				}, 1000);
			} else {
				secondHalfFinished = true;
			}

			if (firstHalfFinished && secondHalfFinished) {
				setLeftDegrees(180);
				firstHalfFinished = false;

				setRightDegrees(180);
				secondHalfFinished = false;
			}
		}

		return () => {
			clearInterval(interval);
		};
	}, [leftDegrees, rightDegrees, active]);

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
				className="relative flex flex-row-reverse text-white bg-blue-900 w-96 h-96 my-5 rounded-full overflow-hidden cursor-pointer"
				onClick={() => setActive(!active)}
			>
				<div
					id="mini-circle"
					className="flex justify-center items-center rounded-full w-24 h-24 bg-blue-900"
				>
					<span id="display" className="text-3xl">
						<p>Left: {leftDegrees}</p>
						<p>Right: {rightDegrees}</p>
						<p className="text-center">{Math.round(percentage)}%</p>
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
