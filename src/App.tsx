import axios from "axios";
import { useEffect, useState } from "react";
import HeroSection from "./views/hero/hero-section";
import ScrollToTop from "./helper/ScrollToTop";
// import { Route, Routes } from "react-router-dom";

function App() {
	const [newdata, setNewdata] = useState<any>();

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

	// useEffect(() => {
	// 	// Initial API call
	// 	fetchMathFact();

	// 	// Schedule the API call to happen every 10 seconds
	// 	const intervalId = setInterval(fetchMathFact, 5000);

	// 	// Clean up the interval when the component is unmounted
	// 	return () => clearInterval(intervalId);
	// }, []);

	return (
		<>
			<ScrollToTop />
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
		</>
	);
}

export default App;
