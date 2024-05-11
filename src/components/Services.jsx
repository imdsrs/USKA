import React from "react";

const Services = () => {
	return (
		<section className=" bg-gray-200 text-gray-800">
			<div className="container flex flex-col items-center mx-auto p-8">
				<h1 className="text-4xl font-semibold leading-none text-center">
					Serivces Offered
				</h1>
			</div>
			<div className="container grid gap-2 mx-auto text-start lg:grid-cols-2 xl:grid-cols-12">
				<div className="w-full rounded-md px-8 xl:col-span-3">
					<div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
						<img
							src="https://source.unsplash.com/random/100x100/?2"
							alt=""
							className="object-cover object-center w-full rounded-t-md h-36 bg-gray-500"
						/>
						<div className="flex flex-col justify-between p-6 space-y-2">
							<div className="">
								<h2 className="text-3xl font-semibold tracking-wide">
									Service Title
								</h2>
								<p className="text-gray-800">
									Service details Lorem ipsum dolor sit amet,
									consectetur adipiscing elit.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full rounded-md px-8 xl:col-span-3">
					<div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
						<img
							src="https://source.unsplash.com/random/100x100/?2"
							alt=""
							className="object-cover object-center w-full rounded-t-md h-36 bg-gray-500"
						/>
						<div className="flex flex-col justify-between p-6 space-y-2">
							<div className="">
								<h2 className="text-3xl font-semibold tracking-wide">
									Service Title
								</h2>
								<p className="text-gray-800">
									Service details Lorem ipsum dolor sit amet,
									consectetur adipiscing elit.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full rounded-md px-8 xl:col-span-3">
					<div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
						<img
							src="https://source.unsplash.com/random/100x100/?2"
							alt=""
							className="object-cover object-center w-full rounded-t-md h-36 bg-gray-500"
						/>
						<div className="flex flex-col justify-between p-6 space-y-2">
							<div className="">
								<h2 className="text-3xl font-semibold tracking-wide">
									Service Title
								</h2>
								<p className="text-gray-800">
									Service details Lorem ipsum dolor sit amet,
									consectetur adipiscing elit.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="w-full rounded-md px-8 xl:col-span-3">
					<div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800">
						<img
							src="https://source.unsplash.com/random/100x100/?2"
							alt=""
							className="object-cover object-center w-full rounded-t-md h-36 bg-gray-500"
						/>
						<div className="flex flex-col justify-between p-6 space-y-2">
							<div className="">
								<h2 className="text-3xl font-semibold tracking-wide">
									Service Title
								</h2>
								<p className="text-gray-800">
									Service details Lorem ipsum dolor sit amet,
									consectetur adipiscing elit.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Services;
