import React, { useEffect } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import Headset from "../../assets/icons/headset-mic.svg";
import { Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const EventsGallery: React.FC = () => {
	const [ref, inView] = useInView({
		threshold: 0.2, // Percentage of element visible to trigger
	});

	const animation = useAnimation();

	useEffect(() => {
		if (inView) {
			animation.start({
				y: 0,
				opacity: 1,
				transition: {
					type: "spring",
					duration: 2,
				},
			});
		}
		if (!inView) {
			animation.start({
				y: "-5vh",
				opacity: 0,
			});
		}
	}, [inView]);

	return (
		<>
			<section className="bg-white min-h-[calc(100vh-100px)] text-sec-200 py-[60px]">
				<div
					ref={ref}
					className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4"
				>
					<div className="h-full w-full relative overflow-hidden">
						<div className="shadow-md transform -rotate-45 z-10 w-[350px] text-center text-white text-xl py-2 absolute top-[50px] -left-[100px] bg-black opacity-[0.8]">
							<p>Upcoming event</p>
						</div>
						<Carousel
							autoplay
							autoplayDelay={5000}
							loop
							transition={{ duration: 2, type: "spring" }}
							className="rounded-xl"
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
							<img
								src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1690774727/samples/man-on-a-street.jpg"
								alt="image 1"
								className="h-full w-full object-cover"
							/>
							<img
								src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1690774727/samples/man-on-a-escalator.jpg"
								alt="image 2"
								className="h-full w-full object-cover"
							/>
							<img
								src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1690774729/cld-sample-3.jpg"
								alt="image 3"
								className="h-full w-full object-cover"
							/>
							<img
								src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1690774727/samples/man-on-a-street.jpg"
								alt="image 4"
								className="h-full w-full object-cover"
							/>
						</Carousel>
					</div>

					<div className="flex flex-col gap-4 h-full w-full">
						<motion.div
							initial={{ y: "-100vh", opacity: 0 }}
							animate={animation}
							className="h-[40vh] w-full relative"
						>
							<div className="w-full rounded-b-xl text-center text-white text-xl py-4 absolute bottom-0 right-0 left-0 bg-black opacity-[0.7]">
								<div>
									<Link
										target="_blank"
										to="https://linktr.ee/hisgreathouse"
										className="flex gap-2 justify-center items-center"
									>
										<img src={Headset} alt="headset" />
										<span className="underline text-xl font-medium">
											Listen now
										</span>
									</Link>
								</div>
							</div>
							<img
								src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1690774727/samples/man-on-a-street.jpg"
								alt="image 1"
								className="rounded-xl h-full w-full object-cover"
							/>
						</motion.div>
						<div className="h-[40vh] w-full relative">
							<Carousel
								autoplay
								loop
								prevArrow={() => (
									<IconButton className="hidden">
										<></>
									</IconButton>
								)}
								nextArrow={() => (
									<IconButton className="hidden">
										<></>
									</IconButton>
								)}
								autoplayDelay={10000}
								transition={{ duration: 2, type: "spring" }}
								className="rounded-xl"
								navigation={() => <div className="hidden"></div>}
							>
								<img
									src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1690774727/samples/man-on-a-street.jpg"
									alt="image 1"
									className="h-full w-full object-cover"
								/>
								<img
									src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1690774699/sample.jpg"
									alt="image 2"
									className="h-full w-full object-cover"
								/>
							</Carousel>
							<div className="w-full rounded-b-xl text-center text-white text-xl py-4 absolute bottom-0 right-0 left-0 bg-black opacity-[0.7]">
								<div>
									<Link
										to=""
										className="flex gap-2 justify-center items-center"
									>
										<img src={Headset} alt="headset" />
										<span className="underline text-xl font-medium">
											Listen now
										</span>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default EventsGallery;
