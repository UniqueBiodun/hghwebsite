// import React from "react";
// import {
// 	Navbar,
// 	MobileNav,
// 	Typography,
// 	Button,
// 	IconButton,
// } from "@material-tailwind/react";

// export function StickyNavbar() {
// 	const [openNav, setOpenNav] = React.useState(false);

// 	React.useEffect(() => {
// 		window.addEventListener(
// 			"resize",
// 			() => window.innerWidth >= 960 && setOpenNav(false)
// 		);
// 	}, []);

// 	const navList = (
// 		<ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
// 			<Typography
// 				as="li"
// 				variant="small"
// 				color="blue-gray"
// 				className="p-1 font-normal"
// 			>
// 				<a href="#" className="flex items-center">
// 					Pages
// 				</a>
// 			</Typography>
// 			<Typography
// 				as="li"
// 				variant="small"
// 				color="blue-gray"
// 				className="p-1 font-normal"
// 			>
// 				<a href="#" className="flex items-center">
// 					Account
// 				</a>
// 			</Typography>
// 			<Typography
// 				as="li"
// 				variant="small"
// 				color="blue-gray"
// 				className="p-1 font-normal"
// 			>
// 				<a href="#" className="flex items-center">
// 					Blocks
// 				</a>
// 			</Typography>
// 			<Typography
// 				as="li"
// 				variant="small"
// 				color="blue-gray"
// 				className="p-1 font-normal"
// 			>
// 				<a href="#" className="flex items-center">
// 					Docs
// 				</a>
// 			</Typography>
// 		</ul>
// 	);

// 	return (
// 		<div className="-m-6 max-h-[768px] w-[calc(100%+48px)] overflow-scroll">
// 			<Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
// 				<div className="flex items-center justify-between text-blue-gray-900">
// 					<Typography
// 						as="a"
// 						href="#"
// 						className="mr-4 cursor-pointer py-1.5 font-medium"
// 					>
// 						Material Tailwind
// 					</Typography>
// 					<div className="flex items-center gap-4">
// 						<div className="mr-4 hidden lg:block">{navList}</div>
// 						<Button
// 							variant="gradient"
// 							size="sm"
// 							className="hidden lg:inline-block"
// 						>
// 							<span>Buy Now</span>
// 						</Button>
// 						<IconButton
// 							variant="text"
// 							className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
// 							ripple={false}
// 							onClick={() => setOpenNav(!openNav)}
// 						>
// 							{openNav ? (
// 								<svg
// 									xmlns="http://www.w3.org/2000/svg"
// 									fill="none"
// 									className="h-6 w-6"
// 									viewBox="0 0 24 24"
// 									stroke="currentColor"
// 									strokeWidth={2}
// 								>
// 									<path
// 										strokeLinecap="round"
// 										strokeLinejoin="round"
// 										d="M6 18L18 6M6 6l12 12"
// 									/>
// 								</svg>
// 							) : (
// 								<svg
// 									xmlns="http://www.w3.org/2000/svg"
// 									className="h-6 w-6"
// 									fill="none"
// 									stroke="currentColor"
// 									strokeWidth={2}
// 								>
// 									<path
// 										strokeLinecap="round"
// 										strokeLinejoin="round"
// 										d="M4 6h16M4 12h16M4 18h16"
// 									/>
// 								</svg>
// 							)}
// 						</IconButton>
// 					</div>
// 				</div>
// 				<MobileNav open={openNav}>
// 					{navList}
// 					<Button variant="gradient" size="sm" fullWidth className="mb-2">
// 						<span>Buy Now</span>
// 					</Button>
// 				</MobileNav>
// 			</Navbar>
// 			{/* <div className="mx-auto max-w-screen-md py-12">
// 				<Card className="mb-12 overflow-hidden">
// 					<img
// 						alt="nature"
// 						className="h-[32rem] w-full object-cover object-center"
// 						src="https://images.unsplash.com/photo-1485470733090-0aae1788d5af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2717&q=80"
// 					/>
// 				</Card>
// 				<Typography variant="h2" color="blue-gray" className="mb-2">
// 					What is Material Tailwind
// 				</Typography>
// 				<Typography color="gray" className="font-normal">
// 					Can you help me out? you will get a lot of free exposure doing this
// 					can my website be in english?. There is too much white space do less
// 					with more, so that will be a conversation piece can you rework to make
// 					the pizza look more delicious other agencies charge much lesser can
// 					you make the blue bluer?. I think we need to start from scratch can my
// 					website be in english?, yet make it sexy i&apos;ll pay you in a week
// 					we don&apos;t need to pay upfront i hope you understand can you make
// 					it stand out more?. Make the font bigger can you help me out? you will
// 					get a lot of free exposure doing this that&apos;s going to be a chunk
// 					of change other agencies charge much lesser. Are you busy this
// 					weekend? I have a new project with a tight deadline that&apos;s going
// 					to be a chunk of change. There are more projects lined up charge extra
// 					the next time.
// 				</Typography>
// 			</div> */}
// 		</div>
// 	);
// }

import React, { useState } from "react";
import HGHLOGO from "../../../assets/icons/hghburglogo.svg";
import HGHLOGOWhite from "../../../assets/icons/hghwhitelogo.svg";
import Menu from "../../../assets/icons/menu-burg.svg";
import MenuWhite from "../../../assets/icons/menu-white.svg";
import { Link } from "react-router-dom";
import { IconButton } from "@material-tailwind/react";

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

	const changeColor = () => {
		window.scrollY >= 100 ? setColor(true) : setColor(false);
	};

	window.addEventListener("scroll", changeColor);

	const sendAndToggle = () => {
		sendDataToParent("Sidebar");
		toggleSidebar();
	};

	return (
		<>
			<span
				className={`py-3 fixed top-0 right-0 left-0 z-10 ${
					color ? "bg-primary" : "bg-transparent backdrop-filter-none"
				}`}
			>
				<nav className={` container flex justify-between `}>
					<div className="cursor-pointer">
						<Link to="/">
							{color ? (
								<img src={HGHLOGOWhite} alt="hgh-logo" />
							) : (
								<img src={HGHLOGO} alt="hgh-logo" />
							)}
						</Link>
					</div>
					<div onClick={sendAndToggle} className="cursor-pointer">
						{color ? (
							<img src={MenuWhite} alt="menu-icon" />
						) : (
							<img src={Menu} alt="menu-icon" />
						)}
					</div>
				</nav>
			</span>
			<div
				className={`z-20 fixed top-0 right-0 h-screen w-full sm:w-[40%] md:w-[35%] lg:w-1/4 bg-gray-800 text-white transition-transform duration-300 transform ${
					isOpen ? "translate-x-0" : "translate-x-full"
				}`}
			>
				<span className="absolute top-4 right-4" onClick={toggleSidebar}>
					<IconButton
						variant="text"
						className="text-white rounded-full text-3xl"
					>
						<i className="fas fa-close" />
					</IconButton>
				</span>
				<div className="p-4">{/* Sidebar content goes here */}</div>
			</div>
		</>
	);
};

export default Navbar;
