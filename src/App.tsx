import axios from "axios";
import { useEffect, useState } from "react";
import HeroSection from "./views/hero/hero-section";
import ScrollToTop from "./helper/ScrollToTop";
import Navbar from "./views/containers/navbar/navbar";
import Footer from "./views/containers/footer/footer";
// import { Route, Routes } from "react-router-dom";

function App({}) {
	const [newdata, setNewdata] = useState<any>();

	const [receivedData, setReceivedData] = useState("");
	const [isOpen, setIsOpen] = useState(false);

	const handleDataFromChild = (data: any) => {
		setReceivedData(data);
	};

	const toggleSidebar = () => {
		console.log(receivedData);
		setIsOpen(!isOpen);
	};

	const fetchEvents = async () => {
		try {
			const response = await axios.get(
				"https://admin.hisgreathouse.org/api/events"
			);
			const data = response.data;
			console.log(data);
			setNewdata(data);
		} catch (error) {
			console.log(error);
		}
	};

	useEffect(() => {
		fetchEvents();
	}, []);

	return (
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
			<HeroSection />
			<div className="min-h-screen flex flex-col justify-center items-center">
				<div>
					<p className="mt-16 text-2xl font-bold text-blue-600">
						Program details
					</p>
					{newdata &&
						newdata.map((item: any, index: number) => (
							<>
								<p key={index}>{item?.title}</p>
							</>
						))}
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
