const About = () => {
	return (
		<div>
			<div className="container mx-auto px-4 text-white fnt-quicksand my-6">
				<p className="text-center text-2xl md:text-3xl mb-4">
					This project has been done by:
				</p>
				<p className="text-center text-4xl md:text-5xl mb-4">
					Lombardo Moreno Rodríguez
				</p>
				<p className="text-center text-xl md:text-2xl mb-10">2022</p>
				<div className="flex flex-col md:flex-row justify-center">
					<a
						href="https://www.linkedin.com/in/lombardo-m-bba399218/"
						className="text-2xl border-2 border-white px-3 py-6 md:py-2 rounded-md transition-all duration-200 hover:bg-white hover:text-white mb-5 md:mb-0 md:mr-5 text-center"
					>
						<i className="fab fa-linkedin mr-2"></i>
						Linked in
					</a>
					<a
						href="https://github.com/LombardoCode/MusicNow"
						className="text-2xl border-2 border-white px-3 py-6 md:py-2 rounded-md transition-all duration-200 hover:bg-white hover:text-white mb-5 md:mb-0 text-center"
					>
						<i className="fab fa-github mr-2"></i>
						Github
					</a>
				</div>
			</div>
		</div>
	);
};

export default About;
