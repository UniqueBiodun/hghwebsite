import React, { useState } from "react";
import axios from "axios";

const PrayerForm: React.FC = () => {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [phone_number, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");
	const [aboutUs, setAboutUs] = useState("");
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
				}
			);
			console.log("Response:", response.data);
			alert(response?.data.message);
			// Clear form fields after successful submission
			setFullname("");
			setEmail("");
			setPhoneNumber("");
			setAboutUs("");
			setTime("");
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
						<div className="py-10 gap-4 text-center">
							<span className="bg-[#F2EBEE] text-[#530E25] px-3 py-1 rounded-[40px]">
								Prayer request form
							</span>
							<h2 className="text-xl md:text-4xl pt-2">Let's Pray</h2>
						</div>
						<div className="grid grid-cols-1 gap-4">
							<div className="text-center">
								<form onSubmit={handleSubmit}>
									<div className="w-full mb-4">
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
											placeholder="Prayer request"
											onChange={(e) => setMessage(e.target.value)}
											required
										/>
									</div>

									<div className="mb-4 flex flex-col gap-6 md:flex-row justify-between">
										<div className="w-full">
											<select
												className="bg-drop bg-right appearance-none bg-transparent bg-no-repeat w-full px-6 py-4 text-[#ABA9BC] text-base md:text-xl rounded border border-[#EBEBEB] bg-[#fdfdfd]"
												onChange={(e) => setAboutUs(e.target.value)}
												value={aboutUs}
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
										Submit
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default PrayerForm;
