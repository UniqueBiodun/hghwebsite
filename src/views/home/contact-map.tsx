import React, { useState } from "react";

const ContactMap: React.FC = () => {
	const [fullName, setFullName] = useState("");
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Full Name:", fullName);
		console.log("Email:", email);
		console.log("Message:", message);
	};

	// const handleSubmit = async (e: React.FormEvent) => {
	// 	e.preventDefault();
	// 	try {
	// 	  const response = await axios.post('http://localhost:5000/submit', {
	// 		fullName,
	// 		email,
	// 		message,
	// 	  });
	// 	  console.log('Response:', response.data);
	// 	  // Clear form fields after successful submission
	// 	  setFullName('');
	// 	  setEmail('');
	// 	  setMessage('');
	// 	} catch (error) {
	// 	  console.error('Error submitting form:', error);
	// 	}

	return (
		<>
			<section className="bg-white min-h-[110vh] py-[60px]">
				<div className="container mx-auto grid grid-cols-1 justify-between gap-[60px]">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
						<div className="">
							<form onSubmit={handleSubmit}>
								<div className="mb-4">
									<input
										type="text"
										className="w-full px-4 py-[26px] text-[#7A7A7A] text-xl rounded-lg border border-[#EBEBEB] bg-[#F9F9F9]"
										value={fullName}
										placeholder="Full name"
										onChange={(e) => setFullName(e.target.value)}
										required
									/>
								</div>
								<div className="mb-4">
									<input
										type="email"
										className="w-full px-4 py-[26px] text-[#7A7A7A] text-xl rounded-lg border border-[#EBEBEB] bg-[#F9F9F9]"
										value={email}
										placeholder="Email address"
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="mb-4">
									<input
										type="tel"
										className="w-full px-4 py-[26px] text-[#7A7A7A] text-xl rounded-lg border border-[#EBEBEB] bg-[#F9F9F9]"
										value={phoneNumber}
										placeholder="Phone number"
										onChange={(e) => setPhoneNumber(e.target.value)}
										required
									/>
								</div>
								<div className="mb-4">
									<textarea
										className="w-full px-4 py-[18px] resize-none text-[#7A7A7A] text-xl rounded-lg border border-[#EBEBEB] bg-[#F9F9F9]"
										rows={4}
										value={message}
										placeholder="Message"
										onChange={(e) => setMessage(e.target.value)}
										required
									/>
								</div>
								<button
									type="submit"
									className="w-full px-4 py-[26px] text-[#fff] text-xl rounded-lg border border-[#EBEBEB] bg-[#530E25] hover:bg-[#31121c]"
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
