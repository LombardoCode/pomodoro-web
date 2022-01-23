import "./index.css";
import Timer from "./components/Timer/Timer";
import Settings from "./components/Settings/Settings";
import { useState } from "react";

function App() {
	const [active, setActive] = useState(false);
	const [leftDegrees, setLeftDegrees] = useState(180);
	const [rightDegrees, setRightDegrees] = useState(180);
	const [secondsPast, setSecondsPast] = useState(0);
	const [minutes, setMinutes] = useState({
		pomodoroMinutes: 40,
		breakMinutes: 15,
	});

	const onMinutesInitializer = (minutes) => {
		setMinutes(minutes);
	};

	const handleActive = (status) => {
		setActive(!active);
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
	};

	return (
		<div>
			<Settings
				resetTimer={onResetTimer}
				minutes={minutes}
				minutesInitializer={onMinutesInitializer}
			/>
			<div className="container mx-auto my-10">
				<h1 className="text-white text-center text-4xl">Pomodoro</h1>
				<Timer
					secondsPast={secondsPast}
					setSecondsPast={onSetSecondsPast}
					minutes={minutes}
					active={active}
					setActive={handleActive}
					leftDegrees={leftDegrees}
					setLeftDegrees={onSetLeftDegrees}
					rightDegrees={rightDegrees}
					setRightDegrees={onSetRightDegrees}
				/>
			</div>
		</div>
	);
}

export default App;
