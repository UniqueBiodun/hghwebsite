import React from "react";
import HGHLOGO from "../../assets/icons/hghburglogo.svg";
import Menu from "../../assets/icons/menu-burg.svg";

const HeroSection: React.FC = () => {
	return (
		<div className="relative h-screen">
			<nav className="flex justify-between fixed top-0 right-0 left-0 z-10 px-20 py-9">
				<div>
					<img src={HGHLOGO} alt="hgh-logo" />
				</div>
				<div>
					<img src={Menu} alt="menu-icon" />
				</div>
			</nav>
			<video
				autoPlay
				muted
				loop
				className="w-full h-screen object-cover object-center absolute z-0"
			>
				<source
					src="https://res.cloudinary.com/ddypwf3iu/video/upload/v1691609928/HGH%20Website%20Assets/Videos/5_Second_Countdown_Intro_video_YouTube_j1l5io.mp4"
					type="video/mp4"
				/>
				{/* Add more source elements for other video formats (webm, ogg) */}
				Your browser does not support the video tag.
			</video>
			<div className="relative z-10 text-black flex flex-col items-center justify-center h-full">
				<h1 className="text-6xl font-bold mb-4">HERO SECTION HEADER</h1>
				<p className="text-lg text-center lg:w-[50%]">
					Assistive text Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Quae, at iusto? Ab expedita blanditiis magnam!
				</p>
			</div>
		</div>
	);
};

export default HeroSection;
