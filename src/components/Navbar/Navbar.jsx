import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

const LogoClickeable = ({ text, route }) => {
	return (
		<Link to={route} className="fnt_nanum text-white text-4xl px-4">
			{text}
		</Link>
	);
};

const LinkClickable = ({ text, route }) => {
	return (
		<Link
			to={route}
			className="fnt_dosis text-lg text-white py-2 px-5 rounded-full ml-4 hover:bg-white hover:text-black transition-all border-2 border-white"
		>
			{text}
		</Link>
	);
};

const Navbar = () => {
	return (
		<div>
			<div className="container mx-auto py-5">
				<nav>
					<ul className="flex justify-between items-center">
						<div id="logo">
							<LogoClickeable text={"pomodoro"} route={"/"} />
						</div>
						<div id="links">
							<LinkClickable text={"About"} route={"/about"} />
						</div>
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
