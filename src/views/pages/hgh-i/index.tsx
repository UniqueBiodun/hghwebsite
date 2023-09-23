import React from "react";
import TextImgContainer from "../../../components/text-img-container";
import { Button } from "@material-tailwind/react";

const HGHI: React.FC = ({}) => {
	return (
		<>
			<div className="bg-white">
				<div className="mt-[55px] h:[216px] md:h-[280px] md:mt-[75px] 3xl:container flex">
					<div className="">
						<img
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737516/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Pray1_c6hast.png"
							alt="frame-1"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="">
						<img
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737516/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Pray2_ubgzrr.png"
							alt="frame-2"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="">
						<img
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737516/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Pray3_mt72ci.png"
							alt="frame-3"
							className="object-cover w-full h-full"
						/>
					</div>
					<div className="">
						<img
							src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1694737516/HGH%20Website%20Assets/HGH%20Placeholder%20Pictures/Pray4_awhccw.png"
							alt="frame-4"
							className="object-cover w-full h-full"
						/>
					</div>
				</div>
			</div>
			<TextImgContainer
				flexDirection="sm:flex-row flex-col"
				sectionContent={
					<div>
						<h1 className="text-sec-400 text-xl md:text-2xl font-semibold pb-4">
							Believer's Class
						</h1>
						<p className="text-sec-300 text-base md:text-xl">
							Congratulations on being born again, Here, we’d teach you all you
							need to know about being a believer and living the new life you
							now have in Christ.
						</p>
						<div className="pt-8">
							<Button className="w-1/2 font-noto hover:opacity-90 bg-primary text-[#FEFDFF] text-xl font-medium text-center py-5 normal-case rounded">
								Join now
							</Button>
						</div>
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
						<h1 className="text-sec-400 text-xl md:text-2xl font-semibold pb-4">
							Membership Class
						</h1>
						<p className="text-sec-300 text-base md:text-xl">
							Congratulations on being born again, Here, we’d teach you all you
							need to know about being a believer and living the new life you
							now have in Christ.
						</p>
						<div className="pt-8">
							<Button className="w-1/2 font-noto hover:opacity-90 bg-primary text-[#FEFDFF] text-xl font-medium text-center py-5 normal-case rounded">
								Join now
							</Button>
						</div>
					</div>
				}
				imgLink1="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
				imgLink2="https://images.unsplash.com/photo-1521178010706-baefe2334211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
				imgLink3="https://images.unsplash.com/flagged/photo-1586105665546-29a815dbee34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJheWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
			/>
			<TextImgContainer
				flexDirection="sm:flex-row flex-col"
				sectionContent={
					<div>
						<h1 className="text-sec-400 text-xl md:text-2xl font-semibold pb-4">
							The Vessels’ Course (The Work Force)
						</h1>
						<p className="text-sec-300 text-base md:text-xl">
							It’s not enough to be a member, let us take you through journey of
							ministry, maturity and the mission of becoming a vessel unto
							honour.
						</p>
						<div className="pt-8">
							<Button className="w-1/2 font-noto hover:opacity-90 bg-primary text-[#FEFDFF] text-xl font-medium text-center py-5 normal-case rounded">
								Join now
							</Button>
						</div>
					</div>
				}
				imgLink1="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
				imgLink2="https://images.unsplash.com/photo-1521178010706-baefe2334211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByYXllcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
				imgLink3="https://images.unsplash.com/flagged/photo-1586105665546-29a815dbee34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJheWluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60"
			/>
		</>
	);
};

export default HGHI;
