// src/components/Header.js
import React from "react";

const Header = () => {
	return (
		<header className="fixed top-0 left-0 w-full bg-blue-600 text-white shadow-md z-10">
			<div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
				<div className="font-bold text-lg">Logo</div>
				<nav className="hidden md:flex space-x-6">
					<div className="group relative">
						<button className="hover:text-gray-200">Home</button>
					</div>
					<div className="group relative">
						<button className="hover:text-gray-200">
							Expertise
						</button>
						<div className="absolute left-0 hidden group-hover:block bg-white text-black p-2 mt-1 rounded shadow-md">
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100">
								Web Development
							</a>
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100">
								Graphics Design
							</a>
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100">
								Digital Marketing
							</a>
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100">
								UI/UX Design
							</a>
						</div>
					</div>
					<div className="group relative">
						<button className="hover:text-gray-200">
							Industries
						</button>
						<div className="absolute left-0 hidden group-hover:block bg-white text-black p-2 mt-1 rounded shadow-md">
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100">
								IT
							</a>
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100">
								Healthcare
							</a>
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100">
								Retail
							</a>
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100">
								Banking & Finance
							</a>
						</div>
					</div>
					<div className="group relative">
						<button className="hover:text-gray-200">
							About Us
						</button>
						<div className="absolute left-0 hidden group-hover:block bg-white text-black p-2 mt-1 rounded shadow-md">
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100">
								Company
							</a>
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100">
								Press Media
							</a>
							<a
								href="#"
								className="block px-4 py-2 hover:bg-gray-100">
								Our Blog
							</a>
						</div>
					</div>
					<div>
						<button className="hover:text-gray-200">
							Contact Us
						</button>
					</div>
				</nav>
				<button className="md:hidden p-2">☰</button>
			</div>
		</header>
	);
};

export default Header;
