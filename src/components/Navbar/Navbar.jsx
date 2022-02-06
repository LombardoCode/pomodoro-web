import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const LogoClickeable = ({ text, route }) => {
	return (
		<Link to={route} className="fnt_secular text-white text-2xl tracking-tight">
			{text}
		</Link>
	);
};

const LinkClickable = ({ text, route }) => {
	return (
		<Link
			to={route}
			className="fnt_dosis inline-block sm:inline w-full sm:w-auto text-center text-lg text-white py-3 sm:py-2 px-5 rounded-full mt-4 sm:mt-0 sm:ml-4 hover:bg-white hover:text-black transition-all border-2 border-white"
		>
			{text}
		</Link>
	);
};

const Navbar = () => {
	return (
		<div>
			<div className="container mx-auto px-4 py-5">
				<nav>
					<ul className="flex flex-col sm:flex-row justify-between items-center">
						<div id="logo" className="mb-2 sm:mb-0">
							<LogoClickeable text={"pomodoro"} route={"/"} />
						</div>
						<div id="links" className="w-full sm:w-auto">
							<LinkClickable text={"About"} route={"/about"} />
						</div>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
