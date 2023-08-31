import React from "react";
import HGHLogo from "../../assets/icons/hghwhitelogo.svg";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
	const rotationVariants = {
		anticlockwise: {
			rotate: 0,
			scale: 0.1,
			transition: {
				duration: 2,
				ease: "linear",
			},
		},
		clockwise: {
			rotate: [0, 90, 180, 270, 360, 0, 0],
			scale: [0.1, 0.5, 0.8, 0.9, 1.0],
			transition: {
				repeat: Infinity,
				duration: 5,
				ease: "linear",
			},
		},
	};

	return (
		<>
			<section className="bg-primary flex justify-center items-center fixed z-40 h-[100vh] w-full font-poppins">
				<motion.img
					initial="anticlockwise"
					animate="clockwise"
					variants={rotationVariants}
					className="w-[15%]"
					src={HGHLogo}
					alt="hghlogo"
				/>
			</section>
		</>
	);
};

export default Loader;
