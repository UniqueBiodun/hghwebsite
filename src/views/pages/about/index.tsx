import React from "react";
import TextImgContainer from "../../../components/text-img-container";

const About: React.FC = ({}) => {
	return (
		<>
			<div className="mt-[55px] h:[216px] md:h-[280px] md:mt-[75px] flex">
				<div className="w-full">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696713226/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/whoweare1_duhaoc.jpg"
						alt="frame-2"
						className="object-cover w-full h-full"
						
					/>
				</div>
				<div className="w-full">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696713220/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/whoweare7_ecsjs2.jpg"
						alt="frame-1"
						className="object-cover w-full h-full"
						
					/>
				</div>
				<div className="w-full">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696713224/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/whoweare2_nux4m1.jpg"
						alt="frame-4"
						className="object-cover w-full h-full"
						
					/>
				</div>
				<div className="w-full">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696713224/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/whoweare3_d7epn1.jpg"
						alt="frame-3"
						className="object-cover w-full h-full"
						
					/>
				</div>
			</div>
			<TextImgContainer
				flexDirection="sm:flex-row flex-col"
				sectionContent={
					<div>
						<h1 className="text-sec-400 text-xl md:text-2xl font-semibold pb-4">
							Our Family
						</h1>
						<p className="text-sec-300 text-base md:text-xl">
							We are a church set to raise a generation of adept lovers of
							Christ. Ours is the HOME OF PEACE. We love God radically and we’re
							held up by the pillars of the Spirit, Love, Peace, Grace and
							Truth. We embody excellence and creativity with a passionate
							practice of prayer and worship founded in the word of God. We are
							a close-knit family of young and vibrant individuals bonded by the
							Spirit of love as the centre of the house. Our family goes beyond
							the church as we’re our cheerleaders and we find inspiration and
							friendship in ourselves in our times of need.
						</p>
					</div>
				}

				imgLink1="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696713220/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/whoweare9_qum2yw.jpg"
				imgLink2="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696713222/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/whoweare5_xckvix.jpg"
				imgLink3="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696713221/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/whoweare6_e61dn2.jpg"
			/>
			<TextImgContainer
				flexDirection="sm:flex-row-reverse flex-col"
				sectionContent={
					<div>
						<h1 className="text-sec-400 text-xl md:text-2xl font-semibold pb-4 4xl:container">
							Our Vision
						</h1>
						<p className="text-sec-300 pb-10 text-base md:text-xl">
							To raise a generation who can unapologetically express themselves
							rightly in and through Christ.
						</p>
						<h1 className="text-sec-400 text-xl md:text-2xl font-semibold pb-4">
							Our Mission
						</h1>
						<p className="text-sec-300 text-base md:text-xl">
							To show Christ Jesus to the young ones and help them locate their
							divine placement in the plan and purposes of God. Equip them by
							identifying, building up and creating a platform for the gifts
							inherent in them to be fully expressed Infuse the kingdom in them
							through the teaching of the Word of God as well as raising
							spirit-filled youths that will be blessed financially and in all
							spheres of life.
						</p>
					</div>
				}
				imgLink1="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696713218/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/whoweare10_jhsbq8.jpg"
				imgLink2="https://res.cloudinary.com/ddypwf3iu/image/upload/v1696713220/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/whoweare8_h51ous.jpg"
				imgLink3="https://res.cloudinary.com/ddypwf3iu/image/upload/v1695845347/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/IMG_2475_qlsx8c.jpg"
			/>
		</>
	);
};

export default About;
