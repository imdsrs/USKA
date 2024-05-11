import React from "react";

export const ContactUs = () => {
	return (
		<section className="text-gray-800 border-b">
			<form
				noValidate=""
				className="container w-full max-w-4xl p-8 mx-auto space-y-6 mb-2 rounded-md shadow bg-gray-50">
				<h2 className="w-full text-3xl font-bold leading-tight text-red-600">
					Contact us
				</h2>
				<div>
					<label htmlFor="name" className="block mb-1 ml-1">
						Name
					</label>
					<input
						id="name"
						type="text"
						placeholder="Your name"
						required=""
						className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-red-400 bg-gray-100"
					/>
				</div>
				<div>
					<label htmlFor="email" className="block mb-1 ml-1">
						Email
					</label>
					<input
						id="email"
						type="email"
						placeholder="Your email"
						required=""
						className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-red-400 bg-gray-100"
					/>
				</div>
				<div>
					<label htmlFor="message" className="block mb-1 ml-1">
						Message
					</label>
					<textarea
						id="message"
						type="text"
						placeholder="Message..."
						className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-red-600 bg-gray-100"></textarea>
				</div>
				<div>
					<button
						type="submit"
						className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-red-600 focus:ring-red-600 hover:ring-red-600 text-gray-50">
						Send
					</button>
				</div>
			</form>
		</section>
	);
};
