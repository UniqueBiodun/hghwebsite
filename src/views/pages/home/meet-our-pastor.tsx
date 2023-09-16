import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface MeetOurPastorProps {
	refProp: React.RefObject<HTMLDivElement>;
}

const MeetOurPastor: React.FC<MeetOurPastorProps> = ({ refProp }) => {
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
					type: "smooth",
					duration: 4,
				},
			});
		}
		if (!inView) {
			animation.start({
				y: "10vh",
				opacity: 0,
				transition: {
					type: "tween",
					duration: 5,
				},
			});
		}
	}, [inView]);

	return (
		<>
			<section
				ref={refProp}
				className="bg-[#fff] min-h-[60vh] text-sec-400 pt-[60px] pb-10 font-poppins"
			>
				<div
					ref={ref}
					className="container mx-auto flex gap-4 md:gap-[38px] flex-col md:flex-row justify-center items-center"
				>
					<motion.div
						initial={{ y: "-10vh", opacity: 0 }}
						animate={animation}
						className="w-full text-left"
					>
						<h3 className="text-2xl md:text-4xl font-semibold text-sec-100 pb-4">
							Welcome address
						</h3>
						<p className="text-left text-base md:text-xl text-sec-300 pb-3">
							We are more than thrilled that you have chosen to come and have an
							experience of Peace as we’re called to cater to a generation that
							seeks answers to things that seem unanswerable. Our atmosphere
							fulfils your core life need which is to be solidly founded in
							Christ. With giant hugs and so much love in our hearts, we’re
							stoked to let you know that you have a home with us. At His Great
							House, you will find the peace of God that passeth all
							understanding as you come to the knowledge of who you are in
							Christ and take your place as a son of God.
						</p>
						<p className="text-left text-base md:text-xl text-sec-300">
							Love, <br /> Olufemi Ibitoye, <br /> Lead Pastor.
						</p>
					</motion.div>
					<div className="w-full relative">
						{/* <div className="w-full rounded-b-[4px] text-center text-white text-base md:text-xl py-[14px] absolute bottom-0 right-0 left-0 bg-primary">
							<p>Pastor Olufemi Ibitoye</p>
						</div> */}
						<img
							className="rounded h-[224px] md:h-[424px] w-full object-cover"
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694701110/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/MeetOurPastor_h5dmci.png"
							alt="lead-pastor"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default MeetOurPastor;
