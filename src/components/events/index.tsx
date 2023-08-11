import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { eventsData } from "../../mockdata/data";

interface EventProps {
	columns?: string;
	borderPosition?: string;
	placement?: string;
}

const EventCard: React.FC<EventProps> = ({
	columns,
	borderPosition,
	placement,
}) => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const onItemClick = (index: number) => {
		setActiveIndex(index);
	};

	return (
		<>
			<section className="w-[90%] mx-auto">
				<div
					className={`container flex justify-center ${columns} gap-10 md:gap-16 lg:gap-20`}
				>
					<div
						className={`lg:w-[50%] w-full ${placement} animate-fade-in-slide-right`}
					>
						<div className="">
							<div
								className={`w-full md:w-[336px] flex flex-col gap-6 md:gap-12 ${borderPosition} border-[#E1E1E1]`}
							>
								{eventsData.map((event, index) => (
									<div
										key={index}
										className={`cursor-pointer flex  flex-col gap-2 md:gap-3 text-left opacity-50 ${
											index === activeIndex
												? `${borderPosition} border-primary opacity-100`
												: ""
										}`}
										onClick={() => onItemClick(index)}
									>
										<h1 className="text-sec-100 text-lg font-medium pl-6">
											{event.title}
										</h1>
										<p className="text-sec-200 text-base md:text-xl pl-6">
											{event.para}
										</p>
									</div>
								))}
							</div>
						</div>
						<div>
							<Button
								variant="filled"
								className="bg-primary capitalize flex items-center gap-2"
							>
								View more{" "}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={2}
									stroke="currentColor"
									className="h-5 w-5"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
									/>
								</svg>
							</Button>
						</div>
					</div>
					<div className="hidden md:block md:w-full w-[50%]">
						{eventsData.map((event, index) => (
							<img
								key={index}
								src={event.image}
								alt={`Image ${index}`}
								className={`rounded-xl h-[540px] w-full ${
									index === activeIndex ? "block" : "hidden"
								}`}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
};

export default EventCard;
