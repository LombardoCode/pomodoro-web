import { useEffect, useRef, useState } from "react";
import "./settings.css";

const Settings = ({ resetTimer, minutesInitializer, minutes }) => {
	const settingsForm = useRef(null);
	const [displaySettings, setDisplaySettings] = useState(true);
	const [formValues, setFormValues] = useState(minutes);

	useEffect(() => {
		minutesInitializer(formValues);
	}, [formValues]);

	const changeMinutes = (e) => {
		e.preventDefault();
		// 1 minute to 1 day:
		if (Number(e.target.value) >= 1 && Number(e.target.value) <= 1440) {
			setFormValues({
				...formValues,
				[e.target.name]: Number(e.target.value),
			});
			console.log("minutes changed!");
			minutesInitializer(formValues);
			resetTimer();
		}
	};

	return (
		<div className="relative">
			<button
				id="settings-button"
				className="w-20 h-20 text-white bg-gray-700 rounded-full font-4xl hover:bg-gray-800 transition-all duration-200"
				onClick={() => setDisplaySettings(!displaySettings)}
			>
				<i className="fas fa-cog"></i>
			</button>
			{displaySettings && (
				<div id="settings-tab" className="bg-blue-900 text-white font-4xl py-5">
					<div className="container mx-auto">
						<h1 className="text-2xl font-bold mb-2">Settings</h1>
						<form
							id="timer-settings"
							className="flex justify-between"
							ref={settingsForm}
						>
							<div id="pomodoro-timer-settings">
								<p>Pomodoro time (minutes)</p>
								<input
									id="pomodoro-minutes"
									name="pomodoroMinutes"
									type="number"
									value={formValues.pomodoroMinutes}
									onChange={changeMinutes}
									className="input-number"
								/>
							</div>
							<div id="break-timer-settings">
								<p>Break time (minutes)</p>
								<input
									id="break-minutes"
									name="breakMinutes"
									type="number"
									value={formValues.breakMinutes}
									onChange={changeMinutes}
									className="input-number"
								/>
							</div>
						</form>
					</div>
				</div>
			)}
		</div>
	);
};

export default Settings;
