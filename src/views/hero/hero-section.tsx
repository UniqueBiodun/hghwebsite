import React, { useEffect, useState } from "react";
import "../../animations.css";
import { Button } from "@material-tailwind/react";

interface HeroSectionProps {
	scrollRef: React.RefObject<HTMLDivElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({ scrollRef }) => {
	const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 640);

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

	useEffect(() => {
		const handleResize = () => {
			setIsSmallScreen(window.innerWidth < 640);
		};

		// Attach the event listener
		window.addEventListener("resize", handleResize);

		// Remove the event listener on component unmount
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // Empty dependency array to run the effect only once

	return (
		<div className="relative h-screen font-noto text-center bg-mobile_preload sm:bg-preload bg-no-repeat bg-cover">
			<>
				<video
					autoPlay
					muted
					loop
					className="w-full h-screen object-cover object-center absolute"
				>
					<source
						src={
							isSmallScreen
								? `https://res.cloudinary.com/ddypwf3iu/video/upload/v1700031948/HGH%20Website%20Assets/Videos/HGHBgMobileVid_jdsyvz.mov`
								: `https://res.cloudinary.com/ddypwf3iu/video/upload/v1700031305/HGH%20Website%20Assets/Videos/pyy7nxogfq2xfawhicfk.mov`
						}
						type="video/mp4"
					/>
				</video>
				<div className="relative container text-black p-4 text-left md:text-center flex flex-col items-center justify-center h-full">
					<h1 className="text-[#fff] text-3xl md:text-4xl lg:leading-[70px] lg:text-[64px] uppercase text-center w-[100%] sm:w-[65%] md:w-[65%] lg:w-[75%] xl:w-[68%] 2xl:w-[55%] font-bold mb-4">
						Welcome to the home of peace
					</h1>
					<p className="text-[#fff] text-lg md:text-xl w-[100%] lg:w-[55%] text-center md:w-[80%] sm:w-[65%]">
						We are a close-knit family of young and vibrant individuals bonded
						by the Spirit of love as the centre of the house. We are passionate
						about God and we’re held up by the pillars of the Spirit, Love,
						Peace, Grace and Truth.
					</p>
					<Button
						onClick={scrollToNextSectionWithDelay}
						variant="outlined"
						className="text-[#fff] normal-case font-noto shadow-none w-[65%] sm:w-[40%] md:w-[40%] lg:w-[25%] xl:w-[25%] 2xl:w-[18%] px-2 text-base md:text-xl font-medium mt-12 outline-0 border-[#fff]"
					>
						Come journey with us
					</Button>
				</div>
			</>
		</div>
	);
};

export default HeroSection;
