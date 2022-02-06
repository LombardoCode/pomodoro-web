import Timer from "../../Timer/Timer";
import { useState } from "react";
import "./pomodoro.css";

const Pomodoro = () => {
	const [active, setActive] = useState(false);
	const [pomodoroMode, setPomodoroMode] = useState(true);
	const [leftDegrees, setLeftDegrees] = useState(180);
	const [rightDegrees, setRightDegrees] = useState(180);
	const [minutes, setMinutes] = useState({
		pomodoroMinutes: 45,
		breakMinutes: 15,
	});
	const [secondsPast, setSecondsPast] = useState(0);
	const [secondsLeft, setSecondsLeft] = useState(minutes.pomodoroMinutes * 60);

	const handleActive = (status) => {
		setActive(!active);
	};

	const onSetMinutes = (minutes) => {
		setMinutes(minutes);
	};

	const onSetSecondsPast = (seconds) => {
		setSecondsPast(seconds);
	};

	const onSetLeftDegrees = (degrees) => {
		setLeftDegrees(degrees);
	};

	const onSetRightDegrees = (degrees) => {
		setRightDegrees(degrees);
	};

	const onResetTimer = () => {
		setActive(false);
		setLeftDegrees(180);
		setRightDegrees(180);
		setSecondsPast(0);
		setSecondsLeft(
			pomodoroMode ? minutes.pomodoroMinutes * 60 : minutes.breakMinutes * 60
		);
	};

	const onSetPomodoroMode = (mode) => {
		setPomodoroMode(!mode);
	};

	return (
		<div>
			<div className="container mx-auto my-10">
				<h1 className="text-white text-center text-3xl sm:text-5xl fnt_dosis">
					{pomodoroMode ? "Pomodoro time" : "Break time"}
				</h1>
				<Timer
					pomodoroMode={pomodoroMode}
					setPomodoroMode={onSetPomodoroMode}
					secondsPast={secondsPast}
					setSecondsPast={onSetSecondsPast}
					secondsLeft={secondsLeft}
					setSecondsLeft={setSecondsLeft}
					minutes={minutes}
					setMinutes={onSetMinutes}
					active={active}
					setActive={handleActive}
					leftDegrees={leftDegrees}
					setLeftDegrees={onSetLeftDegrees}
					rightDegrees={rightDegrees}
					setRightDegrees={onSetRightDegrees}
					resetTimer={onResetTimer}
				/>
			</div>
		</div>
	);
};

export default Pomodoro;
