import { useEffect, useState } from "react";
import "./Timer.css";
import Settings from "../Settings/Settings";

const Timer = ({
	pomodoroMode,
	setPomodoroMode,
	secondsPast,
	setSecondsPast,
	secondsLeft,
	setSecondsLeft,
	minutes,
	setMinutes,
	active,
	setActive,
	leftDegrees,
	setLeftDegrees,
	rightDegrees,
	setRightDegrees,
	resetTimer,
}) => {
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		let interval = null;
		let firstHalfFinished = false;
		let secondHalfFinished = false;
		const seconds = pomodoroMode
			? minutes.pomodoroMinutes * 60
			: minutes.breakMinutes * 60;
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
				setSecondsLeft(
					pomodoroMode
						? minutes.pomodoroMinutes * 60 + 1
						: minutes.breakMinutes * 60 + 1
				);
			}
		} else {
			if (secondsPast == 0) {
				setSecondsPast(0);
				setSecondsLeft(
					pomodoroMode
						? minutes.pomodoroMinutes * 60
						: minutes.breakMinutes * 60
				);
			}
		}

		return () => {
			clearInterval(interval);
		};
	}, [
		leftDegrees,
		rightDegrees,
		active,
		secondsPast,
		secondsLeft,
		pomodoroMode,
		resetTimer,
	]);

	const onMinutesInitializer = (minutes) => {
		setMinutes(minutes);
	};

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

	const onChangeMode = () => {
		setPomodoroMode(pomodoroMode);
		resetTimer();
	};

	const firstHalfStyle = {
		transform: `rotate(${leftDegrees}deg)`,
	};

	const secondHalfStyle = {
		transform: `rotate(${rightDegrees}deg)`,
	};

	return (
		<div className="flex justify-center relative">
			<div id="timer-container" className="relative">
				<div
					id="circle"
					className={`relative flex flex-row-reverse text-white ${
						pomodoroMode ? "bg-blue-900" : "bg-pink-900"
					} transition-all w-64 h-64 sm:w-96 sm:h-96 my-5 rounded-full overflow-hidden cursor-pointer`}
					onClick={() => setActive(!active)}
				>
					<div
						id="mini-circle"
						className={`flex justify-center items-center rounded-full w-24 h-24 transition-all ${
							pomodoroMode ? "bg-blue-800" : "bg-pink-800"
						}`}
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
							className="progress bg-white w-full h-full transition-all"
							style={firstHalfStyle}
						></div>
					</div>
					<div id="second-half" className="w-1/2 h-full overflow-hidden">
						<div
							className="progress bg-white w-full h-full transition-all"
							style={secondHalfStyle}
						></div>
					</div>
				</div>
				<div
					id="switcher"
					className={`absolute -right-4 bottom-0 w-20 h-20 ${
						pomodoroMode
							? "bg-pink-600 hover:bg-pink-700"
							: "bg-blue-600 hover:bg-blue-700"
					} transition-all z-10 rounded-full flex justify-center items-center cursor-pointer`}
					onClick={() => onChangeMode()}
				>
					<span className="text-3xl text-white">
						{pomodoroMode && <i className="fas fa-coffee"></i>}
						{!pomodoroMode && <i className="fas fa-brain"></i>}
					</span>
				</div>
				<div className="absolute -right-20 bottom-20 w-20 h-20">
					<Settings
						resetTimer={resetTimer}
						minutes={minutes}
						minutesInitializer={onMinutesInitializer}
					/>
				</div>
			</div>
		</div>
	);
};

export default Timer;
