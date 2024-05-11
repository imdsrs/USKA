import React from "react";

const Hero = () => {
	return (
		<section className="pt-6 pr-6 pl-6 bg-gray-200 text-gray-100">
			<div className="container grid gap-6 mx-auto text-start lg:grid-cols-2 xl:grid-cols-6">
				<div className="w-full px-6 py-10 rounded-md sm:px-12 md:px-16 xl:col-span-3 bg-gray-50">
					<h1 className="uppercase text-center text-3xl font-extrabold text-red-600">
						Find a Club
					</h1>
					<div className="flex flex-row">
						<p className="w-[50%] my-4">
							<span className="font-medium text-gray-900">
								Find out where your nearest USKA club is get
								yourself signed up today!
							</span>
						</p>
						<p className="w-[50%] my-4">
							<img
								src="https://source.unsplash.com/random/200x100"
								alt=""
								className="rounded-md"
							/>
						</p>
					</div>
				</div>

				<div className="w-full px-6 py-10 rounded-md sm:px-12 md:px-16 xl:col-span-3 bg-gray-50">
					<h1 className="uppercase text-center text-3xl font-extrabold text-red-600">
						Manage you Membership
					</h1>
					<div className="flex flex-row">
						<p className="w-[50%] my-4">
							<span className="font-medium text-gray-900">
								Renew your membership, sign up for courses,
								enter competitions and more.
							</span>
						</p>
						<p className="w-[50%] my-4">
							<img
								src="https://source.unsplash.com/random/200x100"
								alt=""
								className="rounded-md"
							/>
						</p>
					</div>
				</div>
				{/* <img
					src="https://source.unsplash.com/random/480x400"
					alt=""
					className="object-cover w-full rounded-md xl:col-span-3 bg-gray-500"
				/> */}
			</div>
		</section>
	);
};

export default Hero;
