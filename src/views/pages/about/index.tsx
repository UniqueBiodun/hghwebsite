import React from "react";
import TextImgContainer from "../../../components/text-img-container";

const About: React.FC = ({}) => {
	return (
		<>
			<div className="mt-[55px] h:[216px] md:h-[280px] md:mt-[75px] 3xl:container flex">
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694727954/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Collage1_lt88da.png"
						alt="frame-1"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694727954/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Collage2_deltog.png"
						alt="frame-2"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694727954/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Collage3_rvbufp.png"
						alt="frame-3"
						className="object-cover w-full h-full"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694727954/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Collage4_xccyc2.png"
						alt="frame-4"
						className="object-cover w-full h-full"
					/>
				</div>
			</div>
			<TextImgContainer
				flexDirection="sm:flex-row flex-col"
				sectionContent={
					<div>
						<h1 className="text-sec-400 text-2xl md:text-3xl font-semibold pb-4">
							Who we are
						</h1>
						<p className="text-sec-300 text-base md:text-2xl">
							We are a church set to raise a generation of unapologetic lovers
							of Christ. Ours is the HOME OF PEACE. We love God radically and
							are held up by the pillar of the Spirit, Love, Peace, race and
							Truth. We embody excellence and creativity th a passionate
							practice of prayer and worship founded in the word of God.
						</p>
					</div>
				}
				imgLink1="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
				imgLink2="https://images.unsplash.com/photo-1521178010706-baefe2334211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
				imgLink3="https://images.unsplash.com/flagged/photo-1586105665546-29a815dbee34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJheWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
			/>
			<TextImgContainer
				flexDirection="sm:flex-row-reverse flex-col"
				sectionContent={
					<div>
						<h1 className="text-sec-400 text-2xl md:text-3xl font-semibold pb-4">
							Vision statement
						</h1>
						<p className="text-sec-300 pb-10 text-base md:text-2xl">
							We are a church set to raise a generation of unapologetic lovers
							of Christ. Ours is the HOME OF PEACE.
						</p>
						<h1 className="text-sec-400 text-2xl md:text-3xl font-semibold pb-4">
							Mission statement
						</h1>
						<p className="text-sec-300 text-base md:text-2xl">
							We love God radically and are held up by the pillar of the Spirit,
							Love, Peace, race and Truth. We embody excellence and creativity
							th a passionate practice of prayer and worship founded in the word
							of God.
						</p>
					</div>
				}
				imgLink1="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
				imgLink2="https://images.unsplash.com/photo-1521178010706-baefe2334211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
				imgLink3="https://images.unsplash.com/flagged/photo-1586105665546-29a815dbee34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJheWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
			/>
		</>
	);
};

export default About;
