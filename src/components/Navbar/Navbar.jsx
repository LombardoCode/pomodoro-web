import React from "react";

const links = [
	{
		text: "Link 1",
		route: "/link1",
	},
	{
		text: "Link 2",
		route: "/link2",
	},
	{
		text: "Link 3",
		route: "/link3",
	},
];

const LinkClickable = ({ text, route }) => {
	return (
		<div className="text-white">
			<p>{text}</p>
			<p>{route}</p>
		</div>
	);
};

const Navbar = () => {
	return (
		<div>
			<div className="container mx-auto flex justify-end py-1">
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
