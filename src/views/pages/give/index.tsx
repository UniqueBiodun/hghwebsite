import React from "react";
import GiveForm from "./give-form";

const Give: React.FC = ({}) => {
	return (
		<>
			<div className="mt-[55px] h:[216px] md:h-[280px] md:mt-[75px] flex">
				<div className="w-full">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737785/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Give1_txhsv3.png"
						alt="frame-1"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="w-full">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696721160/HGH%20Website%20Assets/HGH%20Website%20Pictures/Contact/investment-5241253_1920_er76cm.jpg"
						alt="frame-2"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="w-full">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737786/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Give3_annwva.png"
						alt="frame-3"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="w-full">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696721073/HGH%20Website%20Assets/HGH%20Website%20Pictures/Contact/credit-cards-1583534_1280_1_iuoxem.jpg"
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
