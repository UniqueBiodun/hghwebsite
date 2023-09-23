import { useEffect, useState } from "react";
import ScrollToTop from "./helper/ScrollToTop";
import Navbar from "./views/containers/navbar/navbar";
import Footer from "./views/containers/footer/footer";
import Home from "./views/pages/home";
import { Route, Routes } from "react-router-dom";
import Loader from "./views/loader/loader";
import About from "./views/pages/about";
import FirstTimer from "./views/pages/first-timer";
import LetsPray from "./views/pages/lets-pray";
import Give from "./views/pages/give";
import Contact from "./views/pages/contact";
import HGHI from "./views/pages/hgh-i";

function App({}) {
	const [receivedData, setReceivedData] = useState("");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const handleDataFromChild = (data: any) => {
		setReceivedData(data);
	};

	const toggleSidebar = () => {
		// console.log(receivedData);
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			setIsLoading(false);
		}, 4000);

		return () => {
			clearTimeout(timeoutId); // Clear the timeout when the component unmounts
		};
	}, []);

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<>
					<ScrollToTop />

					<Navbar
						isOpen={isOpen}
						toggleSidebar={toggleSidebar}
						sendDataToParent={handleDataFromChild}
					/>

					{isOpen && (
						<div
							className="fixed z-10 top-0 left-0 w-full h-full bg-black opacity-50"
							onClick={toggleSidebar}
						></div>
					)}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/first-timer" element={<FirstTimer />} />
						<Route path="/pray" element={<LetsPray />} />
						<Route path="/give" element={<Give />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/hgh-i" element={<HGHI />} />
						<Route path="*" element={<Home />} />
					</Routes>

					<Footer />
				</>
			)}
		</>
	);
}

export default App;
