import React from "react";
import PrayerForm from "./prayer-form";

const LetsPray: React.FC = ({}) => {
	return (
		<>
			<div className="bg-white">
				<div className="mt-[55px] h:[216px] md:h-[280px] md:mt-[75px] flex">
					<div className="w-full">
						<img
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737516/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Pray1_c6hast.png"
							alt="frame-1"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="w-full">
						<img
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696717283/HGH%20Website%20Assets/HGH%20Website%20Pictures/Let%27s%20Pray/letspray1_nsjmkp.jpg"
							alt="frame-2"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="w-full">
						<img
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737516/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Pray3_mt72ci.png"
							alt="frame-3"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="w-full">
						<img
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696717282/HGH%20Website%20Assets/HGH%20Website%20Pictures/Let%27s%20Pray/letspray2_ot1jbp.jpg"
							alt="frame-4"
							className="object-cover w-full h-full"
						/>
					</div>
				</div>
				<PrayerForm />
			</div>
		</>
	);
};

export default LetsPray;
