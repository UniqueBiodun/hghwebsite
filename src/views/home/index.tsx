import React from "react";
import HeroSection from "../hero/hero-section";
import UpcomingEvents from "./upcoming-events";
import BibleTeaching from "./bible-teachings";
import Testimony from "../testimony/testimony";

const Home: React.FC = () => {
	return (
		<>
			<HeroSection />
			<UpcomingEvents />
			<BibleTeaching />
			<Testimony />
		</>
	);
};

export default Home;
