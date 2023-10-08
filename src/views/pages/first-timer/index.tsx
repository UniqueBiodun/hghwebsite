import React from "react";
import FirstTimerForm from "./first-timer-form";

const FirstTimer: React.FC = ({}) => {
	return (
		<>
			<div className="mt-[55px] h:[216px] md:h-[280px] md:mt-[75px] flex">
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696715272/HGH%20Website%20Assets/HGH%20Website%20Pictures/First%20Timer/firsttimer5_ups8wv.jpg"
						alt="frame-1"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696713226/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/whoweare1_duhaoc.jpg"
						alt="frame-2"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696713223/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/whoweare4_oeo2s2.jpg"
						alt="frame-3"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="">
					<img
					src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696715902/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/firsttimer6_yfjsa9.jpg"
						
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
