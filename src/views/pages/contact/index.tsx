import React from "react";
import ContactMap from "../home/contact-map";

const Contact: React.FC = ({}) => {
	return (
		<>
			<div className="bg-white">
				<div className="mt-[55px] h:[216px] md:h-[280px] md:mt-[75px] flex">
					<div className="w-full">
						<img
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696717557/HGH%20Website%20Assets/HGH%20Website%20Pictures/Contact/contact_hcmxd4.png"
							alt="frame-1"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="w-full">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696718069/HGH%20Website%20Assets/HGH%20Website%20Pictures/Contact/return-1825515_1920_p3riud.jpg"
						alt="frame-2"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="w-full">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696718068/HGH%20Website%20Assets/HGH%20Website%20Pictures/Contact/ask-2341784_1920_zz5tnp.jpg"
						alt="frame-3"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="w-full">
					<img
					src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696718067/HGH%20Website%20Assets/HGH%20Website%20Pictures/Contact/contact-us-2355449_1920_w3i8ht.jpg"
						
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
