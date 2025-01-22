import React from "react";

const Expertise = () => {
	return (
		<section className="py-16 bg-white">
			<h2 className="text-3xl font-bold text-center text-blue-600">
				Our Expertise
			</h2>
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600">
						Web Development
					</h3>
					<p className="mt-2 text-gray-700">
						Building scalable, responsive, and secure websites
						tailored to your needs.
					</p>
				</div>
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600">
						Graphics Design
					</h3>
					<p className="mt-2 text-gray-700">
						Creating visually stunning designs that captivate your
						audience.
					</p>
				</div>
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600">
						Digital Marketing
					</h3>
					<p className="mt-2 text-gray-700">
						Helping you reach your target audience with effective
						strategies.
					</p>
				</div>
				<div className="bg-blue-100 p-4 rounded-lg shadow-md">
					<h3 className="text-xl font-semibold text-blue-600">
						UI/UX Design
					</h3>
					<p className="mt-2 text-gray-700">
						Crafting intuitive and user-friendly interfaces for
						better engagement.
					</p>
				</div>
			</div>
		</section>
	);
};

export default Expertise;
