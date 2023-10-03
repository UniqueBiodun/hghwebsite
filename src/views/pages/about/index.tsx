import React from "react";
import TextImgContainer from "../../../components/text-img-container";

const About: React.FC = ({}) => {
	return (
		<>
			<div className="mt-[55px] h:[216px] md:h-[280px] md:mt-[75px] 3xl:container flex">
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1695838049/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/Compressed_4_bbanwk.jpg"
						alt="frame-2"
						className="object-cover w-full h-full"
						loading="lazy"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1695837577/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/Compressed-2_yplc40.jpg"
						alt="frame-1"
						className="object-cover w-full h-full"
						loading="lazy"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1695837575/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/Compressed-1_eop9ef.jpg"
						alt="frame-4"
						className="object-cover w-full h-full"
						loading="lazy"
					/>
				</div>
				<div className="">
					<img
						src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1695838427/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/Compressed-5_ua8cxw.jpg"
						alt="frame-3"
						className="object-cover w-full h-full"
						loading="lazy"
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
				// https://res.cloudinary.com/ddypwf3iu/image/upload/v1695845347/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/IMG_2475_qlsx8c.jpg

				imgLink1="https://res.cloudinary.com/ddypwf3iu/image/upload/v1695846036/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/Who_we_are_dw1ke7.jpg"
				imgLink2="https://res.cloudinary.com/ddypwf3iu/image/upload/v1695838050/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/Compressed3_awlyne.jpg"
				imgLink3="https://res.cloudinary.com/ddypwf3iu/image/upload/v1695845350/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/IMG_1089_qknydu.jpg"
			/>
			<TextImgContainer
				flexDirection="sm:flex-row-reverse flex-col"
				sectionContent={
					<div>
						<h1 className="text-sec-400 text-xl md:text-2xl font-semibold pb-4">
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
				imgLink1="https://res.cloudinary.com/ddypwf3iu/image/upload/v1695846538/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/GroupCmp_zjuzmc.jpg"
				imgLink2="https://res.cloudinary.com/ddypwf3iu/image/upload/v1695846530/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/BisolaCmp_lnilwv.jpg"
				imgLink3="https://res.cloudinary.com/ddypwf3iu/image/upload/v1695846529/HGH%20Website%20Assets/HGH%20Website%20Pictures/Who%20We%20Are/DolaCmp_pegem9.jpg"
			/>
		</>
	);
};

export default About;
