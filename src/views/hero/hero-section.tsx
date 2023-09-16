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
			<div className="relative container text-black p-4 text-left md:text-center flex flex-col items-center justify-center h-full">
				<h1 className="text-5xl uppercase text-center md:text-[64px] w-[100%] sm:w-[80%] lg:w-[55%] font-bold mb-4">
					Welcome to the home of peace
				</h1>
				<p className="text-lg md:text-2xl w-[100%] lg:w-[55%] text-center md:w-[80%] sm:w-[65%] animate-pulse">
					We are a close-knit family of young and vibrant individuals bonded by
					the Spirit of love as the centre of the house. We are passionate about
					God and we’re held up by the pillars of the Spirit, Love, Peace, Grace
					and Truth.
				</p>
				<Button
					onClick={scrollToNextSectionWithDelay}
					variant="outlined"
					className="normal-case w-full sm:w-[40%] md:w-[40%] lg:w-[25%] xl:w-[20%] px-2 text-base md:text-xl font-medium mt-12 outline-0 border-black"
				>
					Come journey with us
				</Button>
			</div>
		</div>
	);
};

export default HeroSection;
