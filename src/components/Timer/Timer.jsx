import { useEffect, useState } from "react";
import "./Timer.css";

const Timer = ({
	secondsPast,
	setSecondsPast,
	secondsLeft,
	setSecondsLeft,
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
					setSecondsPast((oldSeconds) => oldSeconds + 1);
					setSecondsLeft((oldSeconds) => oldSeconds - 1);
				}, 1000);
			} else {
				firstHalfFinished = true;
			}

			if (firstHalfFinished && rightDegrees >= 180 && rightDegrees < 361) {
				interval = setInterval(() => {
					setRightDegrees((oldDegrees) => oldDegrees + deegreesToTurn);
					setSecondsPast((oldSeconds) => oldSeconds + 1);
					setSecondsLeft((oldSeconds) => oldSeconds - 1);
				}, 1000);
			} else {
				secondHalfFinished = true;
			}

			if (firstHalfFinished && secondHalfFinished) {
				setActive(false);

				setLeftDegrees(180);
				firstHalfFinished = false;

				setRightDegrees(180);
				secondHalfFinished = false;

				setSecondsPast(0);
				setSecondsLeft(minutes.pomodoroMinutes * 60 + 1);
				console.log(minutes.pomodoroMinutes, minutes.pomodoroMinutes * 60);
			}
		}

		return () => {
			clearInterval(interval);
		};
	}, [leftDegrees, rightDegrees, active, secondsPast, secondsLeft]);

	const formatTo2DigitNumber = (number) => {
		return number.toLocaleString("en-US", {
			minimumIntegerDigits: 2,
			useGrouping: false,
		});
	};

	const secondsToTimer = (seconds) => {
		if (seconds < 60) {
			return `00:${formatTo2DigitNumber(seconds)}`;
		} else {
			return `${Math.floor(seconds / 60)}:${formatTo2DigitNumber(
				seconds % 60
			)}`;
		}
	};

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
					<span id="display">
						<p className="text-center text-5xl">
							{secondsToTimer(secondsLeft)}
						</p>
						<p className="text-center text-xl">
							{secondsToTimer(secondsPast)} ({Math.round(percentage)}%)
						</p>
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
