import React from "react";

const AboutUs = () => {
	return (
		<section className="py-16 bg-blue-50">
			<h2 className="text-3xl font-bold text-center text-blue-600">
				About Us
			</h2>
			<div className="max-w-5xl mx-auto mt-8 space-y-6">
				<div>
					<h3 className="text-xl font-semibold text-blue-600">
						Company
					</h3>
					<p className="mt-2 text-gray-700">
						Learn more about our journey, vision, and commitment to
						excellence.
					</p>
				</div>
				<div>
					<h3 className="text-xl font-semibold text-blue-600">
						Press Media
					</h3>
					<p className="mt-2 text-gray-700">
						Stay updated with our latest news and press releases.
					</p>
				</div>
				<div>
					<h3 className="text-xl font-semibold text-blue-600">
						Our Blog
					</h3>
					<p className="mt-2 text-gray-700">
						Explore insights, tips, and trends from our industry
						experts.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
