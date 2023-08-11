import React from "react";
import HeroSection from "../hero/hero-section";
import UpcomingEvents from "./upcoming-events";
import BibleTeaching from "./bible-teachings";

const Home: React.FC = () => {
	return (
		<>
			<HeroSection />
			<UpcomingEvents />
			<BibleTeaching />
		</>
	);
};

export default Home;
