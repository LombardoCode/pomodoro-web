import "./index.css";
import Timer from "./components/Timer/Timer";
import Settings from "./components/Settings/Settings";

function App() {
	return (
		<div>
			<Settings />
			<div className="container mx-auto my-10">
				<h1 className="text-white text-center text-4xl">Pomodoro</h1>
				<Timer />
			</div>
		</div>
	);
}

export default App;
