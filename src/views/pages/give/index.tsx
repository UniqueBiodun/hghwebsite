import React from "react";
import GiveForm from "./give-form";

const Give: React.FC = ({}) => {
	return (
		<>
			<div className="mt-[55px] h:[216px] md:h-[280px] md:mt-[75px] 3xl:container flex">
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737785/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Give1_txhsv3.png"
						alt="frame-1"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737785/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Give2_bliqap.png"
						alt="frame-2"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737786/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Give3_annwva.png"
						alt="frame-3"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737786/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Give4_ywoqon.png"
						alt="frame-4"
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
			<GiveForm />
		</>
	);
};

export default Give;
