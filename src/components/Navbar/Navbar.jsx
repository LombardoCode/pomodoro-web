import React from "react";
import { Link } from "react-router-dom";

const links = [
	{
		text: "Pomodoro",
		route: "/",
	},
	{
		text: "About",
		route: "/about",
	},
];

const LinkClickable = ({ text, route }) => {
	return (
		<Link
			to={route}
			className="text-white py-2 px-5 rounded-full ml-4 hover:bg-white hover:text-black transition-all border-2 border-white"
		>
			{text}
		</Link>
	);
};

const Navbar = () => {
	return (
		<div>
			<div className="container mx-auto flex justify-end py-3">
				<nav>
					<ul className="flex">
						{links.map((l, index) => (
							<LinkClickable text={l.text} route={l.route} key={index} />
						))}
					</ul>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;
