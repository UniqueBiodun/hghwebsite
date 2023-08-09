import axios from "axios";
import { useEffect, useState } from "react";
import HeroSection from "./views/hero/hero-section";
// import { StickyNavbar } from "./views/navbar";

function App() {
	const [math, setMath] = useState<any>();
	const [newdata, setNewdata] = useState<any>();

	const fetchMathFact = async () => {
		try {
			const response = await axios.get("http://numbersapi.com/random/math");
			const data = response.data;
			setMath(data);
		} catch (error) {
			console.log(error);
		}
	};

	const newApi = async () => {
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
		newApi();
	}, []);

	useEffect(() => {
		// Initial API call
		fetchMathFact();

		// Schedule the API call to happen every 10 seconds
		const intervalId = setInterval(fetchMathFact, 5000);

		// Clean up the interval when the component is unmounted
		return () => clearInterval(intervalId);
	}, []);

	return (
		<>
			{/* <StickyNavbar /> */}
			<HeroSection />
			<div className="min-h-screen flex flex-col justify-center items-center">
				<div>
					<p className="text-2xl font-bold text-blue-600">
						Here comes the math facts
					</p>
					<p>{math}</p>
				</div>
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
