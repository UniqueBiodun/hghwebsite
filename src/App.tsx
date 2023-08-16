import { useEffect, useState } from "react";
import ScrollToTop from "./helper/ScrollToTop";
import Navbar from "./views/containers/navbar/navbar";
import Footer from "./views/containers/footer/footer";
import Home from "./views/home";
import { Route, Routes } from "react-router-dom";
import Loader from "./views/loader/loader";

function App({}) {
	const [receivedData, setReceivedData] = useState("");
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);

	const handleDataFromChild = (data: any) => {
		setReceivedData(data);
	};

	const toggleSidebar = () => {
		console.log(receivedData);
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
					</Routes>

					<Footer />
				</>
			)}
		</>
	);
}

export default App;
