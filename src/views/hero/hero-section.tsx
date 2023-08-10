import React from "react";

const HeroSection: React.FC = () => {
	return (
		<div className="relative h-screen">
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
