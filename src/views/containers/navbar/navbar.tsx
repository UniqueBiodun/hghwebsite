import React, { useState, useEffect } from "react";
import HGHLOGO from "../../../assets/icons/hghburglogo.svg";
import HGHLOGOWhite from "../../../assets/icons/hghwhitelogo.svg";
import Menu from "../../../assets/icons/menu-burg.svg";
import MenuWhite from "../../../assets/icons/menu-white.svg";
import { Link, NavLink, useLocation } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";
import { navlinks } from "./nav-links";

interface NavbarProps {
	isOpen: boolean;
	toggleSidebar: () => void;
	sendDataToParent: (data: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({
	isOpen,
	toggleSidebar,
	sendDataToParent,
}) => {
	const [color, setColor] = useState(false);
	const location = useLocation();

	const changeColor = () => {
		if (location.pathname === "/" && window.scrollY >= 80) {
			setColor(true);
		} else if (location.pathname === "/about") {
			setColor(true);
		} else if (location.pathname === "/first-timer") {
			setColor(true);
		} else if (location.pathname === "/pray") {
			setColor(true);
		} else if (location.pathname === "/give") {
			setColor(true);
		} else if (location.pathname === "/contact") {
			setColor(true);
		} else if (location.pathname === "/hgh-i") {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	const sendAndToggle = () => {
		sendDataToParent("");
		toggleSidebar();
	};

	const handleNavlinkClick = () => {
		toggleSidebar(); // Close the sidebar when a navlink is clicked
	};

	useEffect(() => {
		// Initial background color setup based on the homepage condition
		changeColor();

		// Add event listener for scroll events
		window.addEventListener("scroll", changeColor);

		// Clean up the event listener when the component unmounts
		return () => {
			window.removeEventListener("scroll", changeColor);
		};
	}, [location.pathname]);

	return (
		<>
			<span
				className={`py-4 fixed top-0 right-0 left-0 z-30 font-noto ${
					color ? "bg-primary" : "bg-transparent backdrop-filter-none"
				}`}
			>
				<nav className={` container flex justify-between `}>
					<div className="cursor-pointer w-6 sm:w-10">
						<Link to="/">
							{color ? (
								<img src={HGHLOGOWhite} alt="hgh-logo" />
							) : (
								<img src={HGHLOGO} alt="hgh-logo" />
							)}
						</Link>
					</div>
					<div onClick={sendAndToggle} className="cursor-pointer w-6 sm:w-10">
						{color ? (
							<img src={MenuWhite} alt="menu-icon" />
						) : (
							<img src={Menu} alt="menu-icon" />
						)}
					</div>
				</nav>
			</span>
			<div
				className={`z-50 fixed top-0 right-0 h-screen w-full sm:w-[40%] md:w-[35%] lg:w-1/4 bg-[#fff] text-[#464646] hover:text-[#530E25]  font-poppins transition-transform duration-300 transform ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<span className="absolute top-4 right-4" onClick={toggleSidebar}>
					<IconButton
						variant="text"
						className="text-[#000] rounded-full text-2xl"
					>
						<i className="fas fa-close" />
					</IconButton>
				</span>
				<div className="pl-8 mt-16">
					{navlinks.map((navlink: any, i: number) => (
						<ul key={i}>
							<li className="pb-4 text-base md:text-lg font-medium font-noto">
								<NavLink
									to={navlink.link}
									onClick={handleNavlinkClick}
									target={navlink.target}
								>
									{navlink.title}
								</NavLink>
							</li>
						</ul>
					))}
				</div>
			</div>
		</>
	);
};

export default Navbar;
