import React from "react";
import FirstTimerForm from "./first-timer-form";

const FirstTimer: React.FC = ({}) => {
	return (
		<>
			<div className="mt-[55px] h:[216px] md:h-[280px] md:mt-[75px] 3xl:container flex">
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694727954/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Collage1_lt88da.png"
						alt="frame-1"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694727954/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Collage2_deltog.png"
						alt="frame-2"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694727954/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Collage3_rvbufp.png"
						alt="frame-3"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694727954/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Collage4_xccyc2.png"
						alt="frame-4"
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
			<FirstTimerForm />
		</>
	);
};

export default FirstTimer;
