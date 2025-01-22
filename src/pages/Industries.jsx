import React from "react";

const Industries = () => {
	return (
		<section className="py-16 bg-gray-50">
			<h2 className="text-3xl font-bold text-center text-blue-600">
				Industries We Serve
			</h2>
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600">IT</h3>
					<p className="mt-2 text-gray-700">
						Providing cutting-edge solutions for the technology
						sector.
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600">
						Healthcare
					</h3>
					<p className="mt-2 text-gray-700">
						Enhancing patient care with innovative digital
						solutions.
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600">
						Retail
					</h3>
					<p className="mt-2 text-gray-700">
						Driving customer engagement through retail technology.
					</p>
				</div>
				<div className="bg-white p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600">
						Banking & Finance
					</h3>
					<p className="mt-2 text-gray-700">
						Streamlining operations with secure and scalable
						solutions.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Industries;
