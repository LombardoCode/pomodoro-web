import "./index.css";
import Pomodoro from "./components/pages/Pomodoro/Pomodoro";
import About from "./components/pages/About/About";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Pomodoro />}></Route>
				<Route path="/about" element={<About />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
