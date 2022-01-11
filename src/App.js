import "./index.css";
import Timer from "./components/Timer/Timer";

function App() {
	return (
		<div className="container mx-auto my-10">
			<h1 className="text-white text-center text-4xl">Pomodoro</h1>
			<Timer />
		</div>
	);
}

export default App;
