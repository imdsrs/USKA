// src/components/Footer.js
import React from "react";

const Footer = () => {
	return (
		<footer className="bg-blue-600 text-white mt-10">
			<div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
				<div>
					<h3 className="font-bold">Quick Links</h3>
					<ul>
						<li>
							<a href="#" className="hover:underline">
								Home
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Expertise
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Industries
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								About Us
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact Us
							</a>
						</li>
					</ul>
				</div>
				<div>
					<h3 className="font-bold">Follow Us</h3>
					<div className="flex space-x-4">
						<a href="#" className="hover:underline">
							Facebook
						</a>
						<a href="#" className="hover:underline">
							Twitter
						</a>
						<a href="#" className="hover:underline">
							LinkedIn
						</a>
					</div>
				</div>
				<div>
					<h3 className="font-bold">Contact Info</h3>
					<p>1234 Blue Street, Blue City</p>
					<p>Email: contact@company.com</p>
					<p>Phone: (123) 456-7890</p>
				</div>
			</div>
			<div className="text-center py-4 border-t border-blue-500">
				© 2025 Company Name. All rights reserved.
			</div>
		</footer>
	);
};

export default Footer;
