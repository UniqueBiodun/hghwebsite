import React, { useState } from "react";
import axios from "axios";

const ContactMap: React.FC = () => {
	const [fullname, setFullname] = useState("");
	const [email, setEmail] = useState("");
	const [phone_number, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");

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
			<section className="bg-white min-h-[110vh] py-[60px] font-poppins">
				<div className="container mx-auto grid grid-cols-1 justify-between gap-[60px]">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div className="">
							<form onSubmit={handleSubmit}>
								<div className="mb-4">
									<input
										type="text"
										className="w-full px-4 py-5 text-[#7A7A7A] text-base md:text-xl rounded-lg border border-[#EBEBEB] bg-[#F9F9F9]"
										value={fullname}
										placeholder="Full name"
										onChange={(e) => setFullname(e.target.value)}
										required
									/>
								</div>
								<div className="mb-4">
									<input
										type="email"
										className="w-full px-4 py-5 text-[#7A7A7A] text-base md:text-xl rounded-lg border border-[#EBEBEB] bg-[#F9F9F9]"
										value={email}
										placeholder="Email address"
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="mb-4">
									<input
										type="tel"
										className="w-full px-4 py-5 text-[#7A7A7A] text-base md:text-xl rounded-lg border border-[#EBEBEB] bg-[#F9F9F9]"
										value={phone_number}
										placeholder="Phone number"
										onChange={(e) => setPhoneNumber(e.target.value)}
										required
									/>
								</div>
								<div className="mb-4">
									<textarea
										className="w-full px-4 py-[18px] resize-none text-[#7A7A7A] text-base md:text-xl rounded-lg border border-[#EBEBEB] bg-[#F9F9F9]"
										rows={4}
										value={message}
										placeholder="Message"
										onChange={(e) => setMessage(e.target.value)}
										required
									/>
								</div>
								<button
									type="submit"
									className="w-full px-4 py-5 text-[#fff] text-base md:text-xl rounded-lg border border-[#EBEBEB] bg-[#530E25] hover:bg-[#31121c]"
								>
									Contact Us
								</button>
							</form>
						</div>
						<div className="">
							<img
								src="https://res.cloudinary.com/ddypwf3iu/image/upload/v1690774723/samples/two-ladies.jpg"
								alt="contact-image"
								className="h-full w-full object-cover rounded-xl"
							/>
						</div>
					</div>
					<div className="w-full">
						<iframe
							width="100%"
							height="400"
							className="rounded-xl"
							src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=Elomaz%20Hotel%203/5%20Emmanuel%20Street,%20Maryland%20Lagos+(His%20Great%20House)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
						></iframe>
					</div>
				</div>
			</section>
		</>
	);
};

export default ContactMap;
