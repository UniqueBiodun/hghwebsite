import React, { useState } from "react";
import axios from "axios";
import CustomAlert from "../../../components/message-alert";

const FirstTimerForm: React.FC = () => {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [phone_number, setPhoneNumber] = useState("");
	const [profession, setProfession] = useState("");
	const [gender, setGender] = useState("");
	const [date, setDate] = useState("");
	const [address, setAddress] = useState("");
	const [location, setLocation] = useState("");
	const [referral, setReferral] = useState("");
	const [preferredtime, setPreferredtime] = useState("");
	const [otherReferral, setOtherReferral] = useState("");
	const [isLoading, setIsLoading] = React.useState<boolean>(false);
	const [success, setSuccess] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		try {
			const response = await axios.post(
				"https://admin.hisgreathouse.org/api/first-timer",
				{
					fullname,
					email,
					phone_number,
					profession,
					gender,
					address,
					location,
					date,
					referral: referral === "others" ? otherReferral : referral,
					// referral,
					preferredtime,
				}
			);
			setSuccess(response?.data.message);

			// Clear form fields after successful submission
			setFullname("");
			setEmail("");
			setPhoneNumber("");
			setProfession("");
			setGender("");
			setAddress("");
			setLocation("");
			setDate("");
			setReferral("");
			setOtherReferral("");
			setPreferredtime("");
			setIsLoading(false);

			// Clear the success message after 5 seconds
			setTimeout(() => {
				setSuccess(null);
			}, 5000);
		} catch (error) {
			console.error("Error submitting form:", error);
			setIsLoading(false);
		}
	};

	return (
		<>
			<section className="min-h-[70vh] py-10 font-noto">
				<div className="container bg-[#f9f9f9] mx-auto">
					<div className="w-full md:w-[90%] mx-auto">
						<div className="py-10 text-center">
							<span className="bg-[#F2EBEE] text-[#530E25] text-xs px-3 py-1 rounded-[40px]">
								First timers form
							</span>
							<h2 className="text-xl md:text-4xl py-4">Welcome home!</h2>
							<p className="text-lg text-[#2f2f2f] mx-auto w-[100%] lg:w-[70%] text-center md:w-[80%] sm:w-[65%]">
								Holla!!! Welcome to the home of peace and we’re super excited to
								have you. We’d love to know you better, it would only take a
								minute, we promise.
							</p>
						</div>
						<div className="grid grid-cols-1 gap-4">
							<div className="text-center">
								<form onSubmit={handleSubmit}>
									<div className="mb-4 flex flex-col gap-6 md:flex-row justify-between">
										<div className="w-full">
											<input
												type="text"
												className="w-full px-6 py-4 placeholder:text-[#ABA9BC] text-[#2f2f2f] text-base md:text-lg rounded border border-[#EBEBEB] bg-[#FdFdFd]"
												value={fullname}
												placeholder="Full name"
												onChange={(e) => setFullname(e.target.value)}
												required
											/>
										</div>
										<div className="w-full">
											<input
												type="email"
												className="w-full px-6 py-4 placeholder:text-[#ABA9BC] text-[#2f2f2f] text-base md:text-lg rounded border border-[#EBEBEB] bg-[#FdFdFd]"
												value={email}
												placeholder="Email address"
												onChange={(e) => setEmail(e.target.value)}
												required
											/>
										</div>
									</div>
									<div className="mb-4 flex flex-col gap-6 md:flex-row justify-between">
										<div className="w-full">
											<input
												type="tel"
												className="w-full px-6 py-4 placeholder:text-[#ABA9BC] text-[#2f2f2f] text-base md:text-lg rounded border border-[#EBEBEB] bg-[#FdFdFd]"
												value={phone_number}
												placeholder="Phone number"
												onChange={(e) => setPhoneNumber(e.target.value)}
												required
											/>
										</div>
										<div className="w-full">
											<input
												type="text"
												className="w-full px-6 py-4 placeholder:text-[#ABA9BC] text-[#2f2f2f] text-base md:text-lg rounded border border-[#EBEBEB] bg-[#FdFdFd]"
												value={profession}
												placeholder="Profession"
												onChange={(e) => setProfession(e.target.value)}
											/>
										</div>
									</div>
									<div className="mb-4 flex flex-col gap-6 md:flex-row justify-between">
										<div className="w-full">
											<select
												className="bg-drop bg-[95%] appearance-none bg-transparent bg-no-repeat w-full px-6 py-4 text-[#2f2f2f] text-base md:text-lg rounded border border-[#EBEBEB] bg-[#fdfdfd]"
												onChange={(e) => setGender(e.target.value)}
												value={gender}
											>
												<option
													value=""
													disabled
													selected
												>
													Gender
												</option>
												<option value="male">Male</option>
												<option value="female">Female</option>
											</select>
										</div>
										<div className="w-full">
											<input
												type="date"
												className="w-full px-6 py-4 placeholder:text-[#ABA9BC] text-[#2f2f2f] text-base md:text-lg rounded border border-[#EBEBEB] bg-[#FdFdFd]"
												value={date}
												placeholder="Birthday"
												onChange={(e) => setDate(e.target.value)}
												required
											/>
										</div>
									</div>
									<div className="mb-4 flex flex-col gap-6 md:flex-row justify-between">
										<div className="w-full">
											<input
												type="text"
												className="w-full px-6 py-4 placeholder:text-[#ABA9BC] text-[#2f2f2f] text-base md:text-lg rounded border border-[#EBEBEB] bg-[#FdFdFd]"
												value={address}
												placeholder="House address"
												onChange={(e) => setAddress(e.target.value)}
												required
											/>
										</div>
										<div className="w-full">
											<input
												type="text"
												className="w-full px-6 py-4 placeholder:text-[#ABA9BC] text-[#2f2f2f] text-base md:text-lg rounded border border-[#EBEBEB] bg-[#FdFdFd]"
												value={location}
												placeholder="Location (e.g Ogba, Lagos)"
												onChange={(e) => setLocation(e.target.value)}
											/>
										</div>
									</div>
									<div className="mb-4 flex flex-col gap-6 md:flex-row justify-between">
										<div className="w-full">
											<select
												className="bg-drop bg-[95%] appearance-none bg-transparent bg-no-repeat w-full px-6 py-4 text-[#2f2f2f] text-base md:text-lg rounded border border-[#EBEBEB] bg-[#fdfdfd]"
												onChange={(e) => setReferral(e.target.value)}
												value={referral}
											>
												<option
													value=""
													disabled
													selected
												>
													How did you hear about us?
												</option>
												<option value="social_media">Social Media</option>
												<option value="evangelism">Evangelism</option>
												<option value="family_friend">Family/Friend</option>
												<option value="others">Others</option>
											</select>
											{/* Display input field for custom referral if "Others" is selected */}
											{referral === "others" && (
												<input
													type="text"
													className="bg-[95%] appearance-none bg-transparent w-full px-6 py-4 text-[#2f2f2f] text-base md:text-lg border-b-2 focus:outline-none border-[#EBEBEB] bg-[#fdfdfd] mt-2"
													placeholder="Tell us how you heard about us"
													value={otherReferral}
													onChange={(e) => setOtherReferral(e.target.value)}
												/>
											)}
										</div>

										<div className="w-full">
											<select
												className="bg-drop bg-[95%] appearance-none bg-transparent bg-no-repeat w-full px-6 py-4 text-[#2f2f2f] text-base md:text-lg rounded border border-[#EBEBEB] bg-[#fdfdfd]"
												onChange={(e) => setPreferredtime(e.target.value)}
												value={preferredtime}
											>
												<option
													value=""
													disabled
													selected
												>
													Preferred time of call
												</option>
												<option value="anytime">Anytime</option>
												<option value="8am">8am - 12noon</option>
												<option value="12noon">12noon - 3pm</option>
												<option value="3pm">3pm - 6pm</option>
												<option value="6pm">6pm - 8pm</option>
											</select>
										</div>
									</div>
									{isLoading ? (
										<button
											disabled
											type="submit"
											className="w-full md:w-[30%] px-6 my-10 py-4 text-[#FEFDFF] text-base md:text-lg rounded border border-[#EBEBEB] bg-[#530E25] hover:bg-[#31121c]"
										>
											<svg
												aria-hidden="true"
												role="status"
												className="inline w-4 h-4 mr-3 text-white animate-spin"
												viewBox="0 0 100 101"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
													fill="#E5E7EB"
												/>
												<path
													d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
													fill="currentColor"
												/>
											</svg>
											Sending...
										</button>
									) : (
										<button
											type="submit"
											className="w-full md:w-[30%] px-6 my-10 py-4 text-[#FEFDFF] text-base md:text-xl rounded border border-[#EBEBEB] bg-[#530E25] hover:bg-[#31121c]"
										>
											Submit
										</button>
									)}
								</form>
							</div>
						</div>
						{success && <CustomAlert message={success} />}
					</div>
				</div>
			</section>
		</>
	);
};

export default FirstTimerForm;
