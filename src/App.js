import "./index.css";
import About from "./components/pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import Timer from "./components/Timer/Timer";
import Settings from "./components/Settings/Settings";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	const [active, setActive] = useState(false);
	const [pomodoroMode, setPomodoroMode] = useState(true);
	const [leftDegrees, setLeftDegrees] = useState(180);
	const [rightDegrees, setRightDegrees] = useState(180);
	const [minutes, setMinutes] = useState({
		pomodoroMinutes: 1,
		breakMinutes: 2,
	});
	const [secondsPast, setSecondsPast] = useState(0);
	const [secondsLeft, setSecondsLeft] = useState(minutes.pomodoroMinutes * 60);

	const onMinutesInitializer = (minutes) => {
		setMinutes(minutes);
		setSecondsLeft(minutes.pomodoroMinutes * 60);
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
		setSecondsLeft(
			pomodoroMode ? minutes.pomodoroMinutes * 60 : minutes.breakMinutes * 60
		);
	};

	const onSetPomodoroMode = (mode) => {
		setPomodoroMode(!mode);
	};

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={
						<div>
							<Settings
								resetTimer={onResetTimer}
								minutes={minutes}
								minutesInitializer={onMinutesInitializer}
							/>
							<div className="container mx-auto my-10">
								<h1 className="text-white text-center text-4xl">Pomodoro</h1>
								<Timer
									pomodoroMode={pomodoroMode}
									setPomodoroMode={onSetPomodoroMode}
									secondsPast={secondsPast}
									setSecondsPast={onSetSecondsPast}
									secondsLeft={secondsLeft}
									setSecondsLeft={setSecondsLeft}
									minutes={minutes}
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
					}
				></Route>
				<Route path="/about" element={<About />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
