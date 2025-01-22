import React from "react";

const ContactUs = () => {
	return (
		<section className="py-16 bg-white">
			<h2 className="text-3xl font-bold text-center text-blue-600">
				Contact Us
			</h2>
			<form className="max-w-3xl mx-auto mt-8 space-y-6">
				<div>
					<label className="block text-gray-700">Name</label>
					<input
						type="text"
						className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
						placeholder="Your Name"
					/>
				</div>
				<div>
					<label className="block text-gray-700">Email</label>
					<input
						type="email"
						className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
						placeholder="Your Email"
					/>
				</div>
				<div>
					<label className="block text-gray-700">Message</label>
					<textarea
						className="w-full border border-gray-300 rounded px-4 py-2 mt-1"
						rows="4"
						placeholder="Your Message"></textarea>
				</div>
				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
					Send Message
				</button>
			</form>
		</section>
	);
};

export default ContactUs;
