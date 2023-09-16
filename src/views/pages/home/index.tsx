import React, { useRef } from "react";
import HeroSection from "../../hero/hero-section";
import MeetOurPastor from "./meet-our-pastor";
import EventsGallery from "./events-gallery";
import ContactMap from "./contact-map";

const Home: React.FC = () => {
	const meetOurPastorRef = useRef<HTMLDivElement | null>(null);

	return (
		<>
			<HeroSection scrollRef={meetOurPastorRef} />
			<MeetOurPastor refProp={meetOurPastorRef} />
			<EventsGallery />
			<ContactMap />
		</>
	);
};

export default Home;
