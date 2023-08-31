import React from "react";
import HGHWhiteLogo from "../../../assets/icons/hghwhitelogo.svg";
import Twitterlogo from "../../../assets/icons/twitter-logo.svg";
import Instagramlogo from "../../../assets/icons/instagram-logo.svg";
import Youtubelogo from "../../../assets/icons/youtube-logo.svg";
import Tiktoklogo from "../../../assets/icons/tiktok-logo.svg";
import Facebooklogo from "../../../assets/icons/facebook-logo.svg";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
	return (
		<>
			<footer className="bg-primary h-3/4 py-6 text-white text-base font-poppins">
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
					<div className="flex flex-row gap-7">
						<span>
							<Link
								target="_blank"
								to="https://twitter.com/hisgreathouse?s=21&t=UJfQRexptM5WlSgHaAUJGA"
							>
								<img src={Twitterlogo} alt="twitter-logo" />
							</Link>
						</span>
						<span>
							<Link
								target="_blank"
								to="https://www.instagram.com/hisgreathouse/?igshid=YmMyMTA2M2Y%3D"
							>
								<img src={Instagramlogo} alt="instagram-logo" />
							</Link>
						</span>
						<span>
							<Link
								target="_blank"
								to="https://www.youtube.com/channel/UCItivdybyQXEeNkQduXNKIA"
							>
								<img src={Youtubelogo} alt="youtube-logo" />
							</Link>
						</span>
						<span>
							<Link target="_blank" to="https://www.tiktok.com/@hisgreathouse">
								<img src={Tiktoklogo} alt="tiktok-logo" />
							</Link>
						</span>
						<span>
							<Link target="_blank" to="facebook.com/hisgreathouse">
								<img src={Facebooklogo} alt="facebook-logo" />
							</Link>
						</span>
					</div>
					<div className="border-t-2 border-white pt-8 text-sm md:text-base md:p-10 lg:w-1/2 md:w-[70%] w-[100%]">
						<p>&copy; 2023 His Great House. All rights reserved.</p>
					</div>
				</div>
			</footer>
		</>
	);
};

export default Footer;
