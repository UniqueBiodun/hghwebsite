import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
	const [math, setMath] = useState<any>();

	const fetchMathFact = async () => {
		try {
			const response = await axios.get("http://numbersapi.com/random/math");
			const data = response.data;
			setMath(data);
		} catch (error) {
			console.log(error);
		}
	};

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
			<div className="min-h-screen flex justify-center items-center">
				<div>
					<p className="text-2xl font-bold text-blue-600">
						Here comes the math facts
					</p>
					<p>{math}</p>
				</div>
			</div>
		</>
	);
}

export default App;
