import React from "react";

const ImageGallery: React.FC = () => {
	return (
		<>
			<section className="py-[60px] min-h-[50vh] lg:min-h-screen">
				<div className="container h-full mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4">
					<div className="flex flex-col gap-4">
						<div className="block sm:hidden text-xl text-sec-400 font-semibold">
							<h2>Our Gallery</h2>
						</div>
						<div className="h-[191px] lg:h-[704px]">
							<img
								className="object-cover rounded-xl h-full w-full"
								src="https://images.unsplash.com/photo-1521178010706-baefe2334211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByYXlpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
								alt="someone-1"
							/>
						</div>
						<div className="h-[95.5px] lg:h-[382px]">
							<img
								className="object-cover rounded-xl h-full w-full"
								src="https://images.unsplash.com/photo-1600739139952-eb01c3508c11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJheWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
								alt="someone-1"
							/>
						</div>
					</div>
					<div className="flex flex-col gap-4">
						<div className="h-[95.5px] lg:h-[382px]">
							<img
								className="object-cover rounded-xl h-full w-full"
								src="https://images.unsplash.com/photo-1521178010706-baefe2334211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByYXlpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
								alt="someone-1"
							/>
						</div>
						<div className="h-[191px] lg:h-[704px]">
							<img
								className="object-cover rounded-xl h-full w-full"
								src="https://images.unsplash.com/photo-1600739139952-eb01c3508c11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJheWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
								alt="someone-1"
							/>
						</div>
					</div>
					{/* This Div will be hidden by default and only visible on large screens */}
					<div className="hidden lg:flex flex-col gap-4 ">
						<div className="h-[704px]">
							<img
								className="object-cover rounded-xl h-full w-full"
								src="https://images.unsplash.com/photo-1521178010706-baefe2334211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByYXlpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60"
								alt="someone-1"
							/>
						</div>
						<div className="h-[382px]">
							<img
								className="object-cover rounded-xl h-full w-full"
								src="https://images.unsplash.com/photo-1600739139952-eb01c3508c11?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJheWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
								alt="someone-1"
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default ImageGallery;
