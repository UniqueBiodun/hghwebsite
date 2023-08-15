import React from "react";
import HGHWhiteLogo from "../../../assets/icons/hghwhitelogo.svg";

const Footer: React.FC = () => {
	return (
		<>
			<footer className="bg-primary h-3/4 pt-12 pb-12 text-white text-base">
				<div className="container flex flex-col gap-10 text-center justify-center items-center">
					<div>
						<img className="w-24 h-24" src={HGHWhiteLogo} alt="hghlogo" />
					</div>
					<div className="flex flex-col gap-4">
						<p>Sundays // 09:00am (WAT)</p>
						<p>Thursdays // 07:00pm (WAT)</p>
					</div>

					<div className="flex flex-col gap-4">
						<p>talktous@hisgreathouse.org</p>
						<p>+2348137600645</p>
					</div>
					<div>
						<p>
							3/5 Emmanuel street, Elomaz hotel, Maryland, Ikeja, Lagos,
							Nigeria.
						</p>
					</div>
					{/* Socials */}
					<div>
						<p>Socials....</p>
					</div>
					<div className="border-t-2 border-white p-10 lg:w-1/2 md:w-[70%] w-[80%]">
						<p>&copy; 2023 His Great House. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
