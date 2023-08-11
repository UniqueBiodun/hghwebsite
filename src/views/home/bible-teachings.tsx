import React from "react";
import EventCard from "../../components/events";

const BibleTeaching: React.FC = ({}) => {
	return (
		<>
			<section className="bg-white min-h-screen pt-16 pb-36 text-sec-200">
				<div className="container flex flex-col gap-10 text-center justify-center items-center">
					<div className="flex flex-col gap-2 items-center">
						<h3 className="text-sec-100 text-4xl font-medium">
							Bible teachings
						</h3>
						<p className="w-[90%] sm:w-[60%] lg:w-[70%] text-base">
							This is just an assistive text and nothing more, with time we
							would find the right contents to suit here.
						</p>
					</div>
					<div>
						<EventCard
							columns="lg:flex-row-reverse flex-col"
							borderPosition="border-r-4 -mr-1"
							placement="flex flex-col items-end gap-10"
						/>
					</div>
				</div>
			</section>
		</>
	);
};

export default BibleTeaching;
