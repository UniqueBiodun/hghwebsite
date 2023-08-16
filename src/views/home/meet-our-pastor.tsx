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

	const leftAnimation = useAnimation();
	const rightAnimation = useAnimation();

	useEffect(() => {
		if (inView) {
			leftAnimation.start({
				x: 0,
				opacity: 1,
				transition: {
					type: "spring",
					duration: 2,
					bounce: 0.1,
				},
			});

			rightAnimation.start({
				x: 0,
				opacity: 1,
				transition: {
					type: "spring",
					duration: 2,
					bounce: 0.1,
				},
			});
		}
		if (!inView) {
			leftAnimation.start({
				x: "-100vw",
			});

			rightAnimation.start({
				x: "100vw",
			});
		}
	}, [inView, leftAnimation, rightAnimation]);

	return (
		<>
			<section
				ref={refProp}
				className="bg-[#F9F9F9] min-h-[80vh] text-sec-400 py-[60px]"
			>
				<div
					ref={ref}
					className="container mx-auto grid gap-4 lg:grid-cols-2 grid-cols-1"
				>
					<motion.div
						initial={{ x: "-100vw", opacity: 0 }}
						animate={leftAnimation}
						className="w-full h-full text-center"
					>
						<h3 className="text-2xl font-semibold text-sec-100 pb-4">
							Meet Our Lead Pastor
						</h3>
						<p className="text-center text-xl text-sec-300">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
							voluptate et expedita repellat ea delectus nemo enim placeat cum
							porro sit, accusantium quaerat perspiciatis distinctio qui quis?
							Esse, incidunt. Fugit, vel maxime aut nemo illo illum fuga
							nesciunt aliquid. Esse, consequuntur atque? Quasi, odio voluptas.
							Nesciunt quaerat molestias saepe assumenda, repellat doloribus
							facilis adipisci obcaecati. Exercitationem optio odio harum natus
							adipisci. Deleniti error, aspernatur, harum odio nam
							exercitationem nulla neque explicabo eum autem ullam numquam
							repudiandae? Corporis, ex, cum iusto minus voluptates hic
							blanditiis laudantium consequatur unde ducimus ipsa! Fugit et
							illum labore sint possimus inventore quos, sequi dignissimos
							velit. adipisci. Deleniti error, aspernatur, harum odio nam
							exercitationem nulla neque explicabo eum autem ullam numquam
							repudiandae? Corporis, ex, cum iusto minus voluptates hic
							blanditiis laudantium consequatur unde ducimus ipsa! Fugit et
							illum labore sint possimus inventore quos, sequi dignissimos velit
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
							tempora non quis, alias expedita perferendis totam quas similique
							laboriosam molestiae enim incidunt quo ullam quos aliquid vitae
							dolore dignissimos illo? tempora non quis, alias expedita
							perferendis totam quas similique laboriosam molestiae enim
							incidunt quo ullam quos aliquid vitae dolore dignissimos illo?
						</p>
					</motion.div>
					<motion.div
						initial={{ x: "100vw", opacity: 0 }}
						animate={rightAnimation}
						className="w-full h-full relative"
					>
						<div className="w-full text-center text-white text-xl py-5 absolute bottom-5 md:bottom-10 right-0 left-0 bg-black opacity-[0.7]">
							<p>Pastor Olufemi Ibitoye</p>
						</div>
						<img
							className="rounded-xl h-full"
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1690774726/samples/look-up.jpg"
							alt="lead-pastor"
						/>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default MeetOurPastor;
