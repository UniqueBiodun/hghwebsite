import React from "react";
import TextImgContainer from "../../components/text-img-container";
import ImageGallery from "./image-gallery";

const About: React.FC = ({}) => {
	return (
		<>
			<TextImgContainer
				addStyle="mt-[55px]"
				flexDirection="flex-row"
				sectionHeading="Who we are"
				sectionBody="We are a church set to raise a generation of unapologetic lovers of Christ. Ours is the HOME OF PEACE. We love God radically and are held up by the pillar of the Spirit, Love, Peace, race and Truth. We embody excellence and creativity th a passionate practice of prayer and worship founded in the word of God."
				imgLink1="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
				imgLink2="https://images.unsplash.com/photo-1521178010706-baefe2334211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
				imgLink3="https://images.unsplash.com/flagged/photo-1586105665546-29a815dbee34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJheWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
			/>
			<ImageGallery />
			<TextImgContainer
				flexDirection="flex-row-reverse"
				sectionHeading="Vision and Mission Statement"
				sectionBody="We are a church set to raise a generation of unapologetic lovers of Christ. Ours is the HOME OF PEACE. We love God radically and are held up by the pillar of the Spirit, Love, Peace, race and Truth. We embody excellence and creativity th a passionate practice of prayer and worship founded in the word of God."
				imgLink1="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
				imgLink2="https://images.unsplash.com/photo-1521178010706-baefe2334211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
				imgLink3="https://images.unsplash.com/flagged/photo-1586105665546-29a815dbee34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJheWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
			/>
		</>
	);
};

export default About;
