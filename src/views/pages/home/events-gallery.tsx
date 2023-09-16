import { Carousel, IconButton } from "@material-tailwind/react";
import Headset from "../../../assets/icons/headset-mic.svg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

interface EventProps {
	start_date?: string;
	end_date?: string;
	imageLink?: string;
}

const EventsGallery: React.FC = () => {
	const [events, setEvents] = useState<EventProps[]>([]);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const response = await axios.get<EventProps[]>(
					"https://admin.hisgreathouse.org/api/events"
				);
				setEvents(response?.data);
				console.log("Events", events);
				console.log("Response", response?.data);
			} catch (error) {
				console.error("Error fetching events:", error);
			}
		};

		fetchEvents();
	}, []);

	return (
		<>
			<section className="bg-[#f9f9f9] min-h-[calc(100vh-300px)] text-sec-200 pt-10 pb-[80px] font-poppins">
				<div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
					<div className="w-full h-[244px] md:h-[560px] relative rounded border-2 bg-blue-gray-500">
						<div className="w-full rounded-b-[4px] text-center text-white text-base md:text-xl py-[14px] absolute bottom-0 right-0 left-0 bg-primary">
							<p>Upcoming events</p>
						</div>
						<Carousel
							autoplay
							autoplayDelay={5000}
							loop
							transition={{ duration: 2, type: "spring" }}
							className="rounded-xl"
							prevArrow={({ handlePrev }) => (
								<IconButton
									variant="text"
									color="white"
									size="lg"
									onClick={handlePrev}
									className="!absolute bottom-1 left-4"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="41"
										viewBox="0 0 40 41"
										fill="none"
									>
										<mask
											id="mask0_601_2403"
											maskUnits="userSpaceOnUse"
											x="0"
											y="0"
											width="40"
											height="41"
										>
											<rect
												x="40"
												y="40.5"
												width="40"
												height="40"
												transform="rotate(-180 40 40.5)"
												fill="#D9D9D9"
											/>
										</mask>
										<g mask="url(#mask0_601_2403)">
											<path
												d="M19.0004 20.5L26.6671 28.1667L24.3338 30.5L14.3338 20.5L24.3338 10.5L26.6671 12.8333L19.0004 20.5Z"
												fill="white"
											/>
										</g>
									</svg>
								</IconButton>
							)}
							nextArrow={({ handleNext }) => (
								<IconButton
									variant="text"
									color="white"
									size="lg"
									onClick={handleNext}
									className="!absolute bottom-1 !right-4"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="40"
										height="41"
										viewBox="0 0 40 41"
										fill="none"
									>
										<mask
											id="mask0_601_2400"
											maskUnits="userSpaceOnUse"
											x="0"
											y="0"
											width="40"
											height="41"
										>
											<rect y="0.5" width="40" height="40" fill="#D9D9D9" />
										</mask>
										<g mask="url(#mask0_601_2400)">
											<path
												d="M20.9996 20.5L13.3329 12.8333L15.6662 10.5L25.6662 20.5L15.6662 30.5L13.3329 28.1667L20.9996 20.5Z"
												fill="white"
											/>
										</g>
									</svg>
								</IconButton>
							)}
							navigation={({ setActiveIndex, activeIndex, length }) => (
								<div className="absolute bottom-4 left-2/4 flex -translate-x-2/4 gap-2">
									{new Array(length).fill("").map((_, i) => (
										<span
											key={i}
											className={`block h-2 w-2 cursor-pointer rounded-2xl transition-all content-[''] ${
												activeIndex === i ? "bg-white" : "bg-white/50"
											}`}
											onClick={() => setActiveIndex(i)}
										/>
									))}
								</div>
							)}
						>
							{events.map((evt: any, i: number) => (
								<img
									key={i}
									src={evt.imageLink}
									alt="image 1"
									className="rounded h-[244px] md:h-[560px] w-full object-cover"
								/>
							))}
						</Carousel>
					</div>

					<div className="w-full relative">
						<div className="w-full rounded-b-[4px] text-center text-white text-base md:text-xl py-[14px] absolute bottom-0 right-0 left-0 bg-primary">
							<div>
								<Link
									target="_blank"
									to="https://mainstack.me/hisgreathouse"
									className="flex gap-2 justify-center items-center"
								>
									<img src={Headset} alt="headset" />
									<span className="underline text-base md:text-xl font-medium">
										Catch up on our messages
									</span>
								</Link>
							</div>
						</div>
						<img
							className="rounded h-[244px] md:h-[560px] w-full object-cover"
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694701110/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/DeeperInTheWord_iz89ff.png"
							alt="messages"
						/>
					</div>
					<div className="w-full relative">
						<div className="w-full rounded-b-[4px] text-center text-white text-base md:text-xl py-[14px] absolute bottom-0 right-0 left-0 bg-primary">
							<div>
								<Link
									target="_blank"
									to="https://mainstack.me/hisgreathouse"
									className="flex gap-2 justify-center items-center"
								>
									<img src={Headset} alt="headset" />
									<span className="underline text-base md:text-xl font-medium">
										Catch up on our messages
									</span>
								</Link>
							</div>
						</div>
						<img
							className="rounded h-[244px] md:h-[560px] w-full object-cover"
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694701110/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/FaithSeminar_cahwf6.png"
							alt="deeper-in-the-word"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default EventsGallery;
