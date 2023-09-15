import React, { useState } from "react";
import axios from "axios";

const ContactMap: React.FC = () => {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [phone_number, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");
	const [call, setCall] = useState("");
	const [time, setTime] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			const response = await axios.post(
				"https://www.admin.hisgreathouse.org/api/contact",
				{
					fullname,
					email,
					phone_number,
					message,
				}
			);
			console.log("Response:", response.data);
			alert(response?.data.message);
			// Clear form fields after successful submission
			setFullname("");
			setEmail("");
			setPhoneNumber("");
			setMessage("");
		} catch (error) {
			console.error("Error submitting form:", error);
		}
	};

	return (
		<>
			<section className="min-h-[70vh] py-10 font-poppins">
				<div className="container bg-[#f9f9f9] mx-auto">
					<div className="w-full md:w-[90%] mx-auto">
						<div className="py-10 gap-4 text-center md:text-left">
							<span className="bg-[#F2EBEE] text-[#530E25] px-3 py-1 rounded-[40px]">
								Reach us with ease
							</span>
							<h2 className="text-xl md:text-4xl pt-2">Contact Us</h2>
						</div>
						<div className="grid grid-cols-1 gap-4">
							<div className="text-center">
								<form onSubmit={handleSubmit}>
									<div className="mb-4">
										<input
											type="text"
											className="w-full px-6 py-4 text-[#ABA9BC] text-base md:text-xl rounded border border-[#EBEBEB] bg-[#FdFdFd]"
											value={fullname}
											placeholder="Full name"
											onChange={(e) => setFullname(e.target.value)}
											required
										/>
									</div>
									<div className="mb-4 flex flex-col gap-6 md:flex-row justify-between">
										<div className="w-full">
											<input
												type="tel"
												className="w-full px-6 py-4 text-[#ABA9BC] text-base md:text-xl rounded border border-[#EBEBEB] bg-[#FdFdFd]"
												value={phone_number}
												placeholder="Phone number"
												onChange={(e) => setPhoneNumber(e.target.value)}
												required
											/>
										</div>
										<div className="w-full">
											<input
												type="email"
												className="w-full px-6 py-4 text-[#ABA9BC] text-base md:text-xl rounded border border-[#EBEBEB] bg-[#FdFdFd]"
												value={email}
												placeholder="Email address"
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
										</div>
									</div>
									<div className="mb-4">
										<textarea
											className="w-full px-6 py-4 resize-none text-[#ABA9BC] text-base md:text-xl rounded border border-[#EBEBEB] bg-[#FdFdFd]"
											rows={4}
											value={message}
											placeholder="Message"
											onChange={(e) => setMessage(e.target.value)}
											required
										/>
									</div>
									<div className="mb-4 flex flex-col gap-6 md:flex-row justify-between">
										<div className="w-full">
											<select
												className="bg-drop bg-right appearance-none bg-transparent bg-no-repeat w-full px-6 py-4 text-[#ABA9BC] text-base md:text-xl rounded border border-[#EBEBEB] bg-[#fdfdfd]"
												onChange={(e) => setCall(e.target.value)}
												value={call}
											>
												<option value="">
													Would you like to schedule a call with our Pastor?
												</option>
												<option value="yes">Yes</option>
												<option value="no">No</option>
											</select>
										</div>
										<div className="w-full">
											<select
												className="bg-drop bg-right appearance-none bg-transparent bg-no-repeat w-full px-6 py-4 text-[#ABA9BC] text-base md:text-xl rounded border border-[#EBEBEB] bg-[#fdfdfd]"
												onChange={(e) => setTime(e.target.value)}
												value={time}
											>
												<option value="">Preferred time of call</option>
												<option value="anytime">Anytime</option>
												<option value="8am">8am - 12noon</option>
												<option value="12noon">12noon - 3pm</option>
												<option value="3pm">3pm - 6pm</option>
												<option value="6pm">6pm - 8pm</option>
											</select>
										</div>
									</div>
									<button
										type="submit"
										className="w-full md:w-[30%] px-6 my-10 py-4 text-[#FEFDFF] text-base md:text-xl rounded border border-[#EBEBEB] bg-[#530E25] hover:bg-[#31121c]"
									>
										Contact Us
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
				<div className="container bg-[#fff] pt-10">
					<iframe
						width="100%"
						height="400"
						className="rounded"
						src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Elomaz%20Hotel%203/5%20Emmanuel%20Street,%20Maryland%20Lagos+(His%20Great%20House)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
					></iframe>
				</div>
			</section>
		</>
	);
};

export default ContactMap;
