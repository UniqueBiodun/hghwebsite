import React from "react";
import ContactMap from "../home/contact-map";

const Contact: React.FC = ({}) => {
	return (
		<>
			<div className="bg-white">
				<div className="mt-[55px] h:[216px] md:h-[280px] md:mt-[75px] 3xl:container flex">
					<div className="">
						<img
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737516/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Pray1_c6hast.png"
							alt="frame-1"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="">
						<img
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737516/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Pray2_ubgzrr.png"
							alt="frame-2"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="">
						<img
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737516/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Pray3_mt72ci.png"
							alt="frame-3"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="">
						<img
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737516/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Pray4_awhccw.png"
							alt="frame-4"
							className="object-cover w-full h-full"
						/>
					</div>
				</div>
			</div>
			<ContactMap />
		</>
	);
};

export default Contact;
