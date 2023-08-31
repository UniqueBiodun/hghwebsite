import React from "react";
import "../../animations.css";
import { Button } from "@material-tailwind/react";

interface HeroSectionProps {
	scrollRef: React.RefObject<HTMLDivElement>;
}
const HeroSection: React.FC<HeroSectionProps> = ({ scrollRef }) => {
	const scrollToNextSectionWithDelay = () => {
		if (scrollRef.current) {
			setTimeout(() => {
				scrollRef.current?.scrollIntoView({
					behavior: "smooth",
					block: "center",
				});
			}, 200); // Set the delay in milliseconds (e.g., 1000 ms = 1 second)
		}
	};

	return (
		<div className="relative h-screen font-poppins">
			<video
				autoPlay
				muted
				loop
				className="w-full h-screen object-cover object-center absolute"
			>
				<source
					src="https://res.cloudinary.com/ddypwf3iu/video/upload/v1691609928/HGH%20Website%20Assets/Videos/5_Second_Countdown_Intro_video_YouTube_j1l5io.mp4"
					type="video/mp4"
				/>
			</video>
			<div className="relative text-black text-center flex flex-col items-center justify-center h-full">
				<h1 className="text-4xl md:text-6xl w-[80%] sm:w-[80%] font-bold mb-4">
					HERO SECTION HEADER
				</h1>
				<p className="text-lg md:text-2xl w-[70%] sm:w-[50%] animate-pulse">
					Assistive text Lorem ipsum dolor sit amet consectetur adipisicing
					elit. Quae, at iusto? Ab expedita blanditiis magnam!
				</p>
				<Button
					onClick={scrollToNextSectionWithDelay}
					variant="outlined"
					className="normal-case text-base md:text-xl font-medium mt-12 outline-0 border-black"
				>
					Get to know us
				</Button>
			</div>
		</div>
	);
};

export default HeroSection;
