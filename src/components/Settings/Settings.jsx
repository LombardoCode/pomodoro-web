import { useState } from "react";
import "./settings.css";

const Settings = () => {
	const [displaySettings, setDisplaySettings] = useState(false);
	return (
		<div className="relative">
			<button
				id="settings-button"
				className="text-white border-2 border-white rounded-xl font-4xl hover:bg-white hover:text-black transition-all duration-200"
				onClick={() => setDisplaySettings(!displaySettings)}
			>
				<i className="fas fa-cog"></i>
			</button>
			{displaySettings && (
				<div id="settings-tab" className="bg-blue-900 text-white font-4xl py-5">
					<div className="container mx-auto">
						<h1 className="text-2xl font-bold">Settings</h1>
					</div>
				</div>
			)}
		</div>
	);
};

export default Settings;
