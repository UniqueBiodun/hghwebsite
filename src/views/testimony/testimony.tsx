import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";

const Testimony: React.FC = () => {
	return (
		<>
			<section className="bg-[#FAFAFA] min-h-[796px] pt-20 pb-20 text-sec-200">
				<div className="container flex flex-col gap-16 text-center justify-center items-center">
					<div className="flex flex-col gap-2 items-center">
						<h3 className="text-sec-100 text-4xl font-medium">
							Testimonies of men
						</h3>
						<p className="w-[90%] sm:w-[60%] lg:w-[70%] text-base">
							This is just an assistive text and nothing more, with time we
							would find the right contents to suit here.
						</p>
					</div>
					<div className="lg:w-[90%] w-full">
						<Carousel
							transition={{ duration: 2 }}
							className="rounded-xl"
							prevArrow={({ handlePrev }) => (
								<IconButton
									variant="text"
									size="lg"
									onClick={handlePrev}
									className="!absolute sm:top-2/4 -bottom-8 left-4 -translate-y-2/4 text-[#c2c2c2]"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										className="lg:h-14 lg:w-14 w-10 h-10"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M15 19l-7-7 7-7"
										/>
									</svg>
								</IconButton>
							)}
							nextArrow={({ handleNext }) => (
								<IconButton
									variant="text"
									size="lg"
									onClick={handleNext}
									className="!absolute sm:top-2/4 !right-4 -bottom-8 -translate-y-2/4 text-[#c2c2c2]"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										className="lg:h-14 lg:w-14 w-10 h-10"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M9 5l7 7-7 7"
										/>
									</svg>
								</IconButton>
							)}
						>
							<div className="flex justify-center items-center lg:px-6">
								<div className="bg-primary min-h-[434px] lg:w-[90%] w-full lg:px-10 lg:py-14 flex lg:flex-row flex-col items-center gap-9">
									<div className="h-full lg:w-1/3 w-full">
										<div className="h-full w-full bg-blue-gray-900">
											<img
												src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
												alt="image 1"
												className="object-cover h-full w-full rounded-xl"
											/>
										</div>
										<div className="pt-2 text-white text-lg font-medium">
											<p>Ojynika OjyOkpe Rufai Dr Abati</p>
										</div>
									</div>
									<div className="h-full lg:w-2/3 w-full relative">
										<div className="bg-lquote bg-no-repeat absolute w-5 h-5 lg:w-20 lg:h-20 top-0 left-0"></div>
										<div className="lg:p-10  w-full h-full text-white">
											<p className="p-3 text-justify">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Magnam labore repudiandae, placeat ab optio
												nesciunt, aspernatur quas suscipit beatae repellendus,
												cum ex vero corrupti ullam maiores. In laboriosam optio
												numquam aut minima. Suscipit quibusdam facere quisquam,
												ut pariatur porro nihil quo voluptatibus repellat in
												ipsam, ea sed quam ad rerum facilis inventore enim id
												veniam et dignissimos. Sed quod similique dolorum nulla
												mollitia animi eos officia harum impedit doloremque
												reiciendis, vel quam alias nisi molestiae quae. Fuga
												necessitatibus voluptate nostrum, iure, eos nesciunt in
												debitis blanditiis error quidem voluptatem porro optio
												voluptates odit nam facere alias. Natus ipsa omnis
												facilis!
											</p>
										</div>
										<div className="bg-rquote bg-no-repeat absolute w-5 h-5 lg:w-20 lg:h-20 bottom-0 right-0"></div>
									</div>
								</div>
							</div>
							<div className="flex justify-center items-center lg:px-6">
								<div className="bg-primary min-h-[434px] lg:w-[90%] w-full lg:px-10 lg:py-14 flex lg:flex-row flex-col items-center gap-9">
									<div className="h-full lg:w-1/3 w-full">
										<div className="h-[90%] w-full bg-blue-gray-900">
											<img
												src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
												alt="image 1"
												className="object-cover h-full w-full"
											/>
										</div>
										<div className="pt-2 text-white text-lg font-medium">
											<p>Ojynika OjyOkpe Rufai Dr Abati</p>
										</div>
									</div>
									<div className="h-full lg:w-2/3 w-full relative">
										<div className="bg-lquote bg-no-repeat absolute w-5 h-5 lg:w-20 lg:h-20 top-0 left-0"></div>
										<div className="lg:p-10  w-full h-full text-white">
											<p className="p-3 text-justify">
												Lorem, ipsum dolor sit amet consectetur adipisicing
												elit. Magnam labore repudiandae, placeat ab optio
												nesciunt, aspernatur quas suscipit beatae repellendus,
												cum ex vero corrupti ullam maiores. In laboriosam optio
												numquam aut minima. Suscipit quibusdam facere quisquam,
												ut pariatur porro nihil quo voluptatibus repellat in
												ipsam, ea sed quam ad rerum facilis inventore enim id
												veniam et dignissimos. Sed quod similique dolorum nulla
												mollitia animi eos officia harum impedit doloremque
												reiciendis, vel quam alias nisi molestiae quae. Fuga
												necessitatibus voluptate nostrum, iure, eos nesciunt in
												debitis blanditiis error quidem voluptatem porro optio
												voluptates odit nam facere alias. Natus ipsa omnis
												facilis!
											</p>
										</div>
										<div className="bg-rquote bg-no-repeat absolute w-5 h-5 lg:w-20 lg:h-20 bottom-0 right-0"></div>
									</div>
								</div>
							</div>
						</Carousel>
					</div>
				</div>
			</section>
		</>
	);
};

export default Testimony;
