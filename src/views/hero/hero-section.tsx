import React, { useState } from "react";
import Navbar from "../containers/navbar";
import { IconButton } from "@material-tailwind/react";

const HeroSection: React.FC = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleSidebar = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative h-screen">
			<Navbar sidebarToggler={toggleSidebar} />
			<div
				className={`z-20 fixed top-0 right-0 h-screen w-full sm:w-[40%] md:w-[35%] lg:w-1/4 bg-gray-800 text-white transition-transform duration-300 transform ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<span className="absolute top-4 right-4" onClick={toggleSidebar}>
					<IconButton
						variant="text"
						className="text-white rounded-full text-3xl"
					>
						<i className="fas fa-close" />
					</IconButton>
				</span>
				<div className="p-4">{/* Sidebar content goes here */}</div>
			</div>
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
			</video>
			<div className="relative text-black text-center flex flex-col items-center justify-center h-full">
				<h1 className="text-4xl sm:text-6xl w-[80%] sm:w-[80%] font-bold mb-4">
					HERO SECTION HEADER
				</h1>
				<p className="text-lg w-[70%] sm:w-[50%]">
					Assistive text Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Quae, at iusto? Ab expedita blanditiis magnam!
				</p>
			</div>
		</div>
	);
};

export default HeroSection;
