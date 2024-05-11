//https://play.tailwindcss.com/eOewXQf7Wu
import React, { useState } from "react";

function Header() {
	const [activeMenu, setActiveMenu] = useState(null);
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [isNavOpen, setIsNavOpen] = useState(false);

	const handleMenuHover = (menu) => {
		setActiveMenu(menu);
	};

	const handleMenuLeave = () => {
		setActiveMenu(null);
	};

	const handleMobileMenuToggle = () => {
		setMobileMenuOpen(!isMobileMenuOpen);
	};

	const submenus = {
		"About Us": ["History", "Technical Commitee", "Gallery"],
		"Join Us": ["Student Registration", "Our Clubs"],
		Services: [],
		Events: ["Upcoming Events", "Past Events"],
		News: [],
		"Rules and Policies": [
			"Code of Conduct",
			"Grading, Syllabus  and Rule",
			"Mental Health",
			"Equality and Diversity",
			"Discipline and Grievance Policy",
		],
		FAQ: [],
		"Contact Us": [],
	};

	return (
		<header className="p-4 bg-gray-100 text-red-600">
			<div className="container flex justify-between h-16 mx-auto">
				<div className="flex">
					<nav>
						<section className="MOBILE-MENU flex lg:hidden">
							<div
								className="HAMBURGER-ICON space-y-2 pt-5"
								onClick={() => setIsNavOpen((prev) => !prev)}>
								<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
								<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
								<span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
							</div>

							<div
								className={
									isNavOpen ? "showMenuNav" : "hideMenuNav"
								}>
								<div
									className="relative top-0 right-0 px-8 py-8"
									onClick={() => setIsNavOpen(false)}>
									<svg
										className="h-8 w-8 text-red-600"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round">
										<line x1="18" y1="6" x2="6" y2="18" />
										<line x1="6" y1="6" x2="18" y2="18" />
									</svg>
								</div>
								<ul
									className={`pt-16 space-x-3 lg:flex lg:hidden`}>
									{Object.keys(submenus).map((menuItem) => (
										<li
											key={menuItem}
											className="relative flex"
											onMouseEnter={() =>
												handleMenuHover(menuItem)
											}
											onMouseLeave={handleMenuLeave}>
											<a
												rel="noopener noreferrer"
												href="#"
												className="flex items-center px-4 dark:border-">
												{menuItem}&nbsp;
												{submenus[menuItem].length !==
												0 ? (
													<svg
														class="w-3 h-3 pointer-events-none"
														xmlns="http://www.w3.org/2000/svg"
														fill="none"
														viewBox="0 0 24 24"
														stroke-width="1.5"
														stroke="currentColor"
														// class="w-6 h-6"
													>
														<path
															stroke-linecap="round"
															stroke-linejoin="round"
															d="m19.5 8.25-7.5 7.5-7.5-7.5"
														/>
													</svg>
												) : (
													""
												)}
											</a>
											{activeMenu === menuItem &&
												submenus[menuItem].length !==
													0 && (
													<div className="relative mt-20 bg-gray-800 text-red-600 p-2 rounded border">
														<ul className="items-start whitespace-nowrap space-x-3 lg:flex flex-col">
															{submenus[
																menuItem
															].map(
																(
																	submenuItem
																) => (
																	<li
																		key={
																			submenuItem
																		}>
																		<a
																			href={submenuItem
																				.toLowerCase()
																				.replace(
																					/\s/g,
																					""
																				)}>
																			{
																				submenuItem
																			}
																		</a>
																	</li>
																)
															)}
														</ul>
													</div>
												)}
										</li>
									))}
								</ul>
							</div>
						</section>
					</nav>
					<style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 50%;
        height: 75vh;
        top: 0;
        left: 0;
        background: #1F2937;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: left;
      }
    `}</style>
					<a
						rel="noopener noreferrer"
						href="#"
						aria-label="Back to homepage"
						className="flex flex-col items-center p-2">
						<img src="USKALogo.png" height="100" width="100" />
						<span className="text-red-600 text-sm mt-1 font-extrabold">
							Since 40 Years
						</span>
					</a>
					<ul
						className={`items-stretch space-x-3 lg:flex lg:block hidden`}>
						{Object.keys(submenus).map((menuItem) => (
							<li
								key={menuItem}
								className="relative flex"
								onMouseEnter={() => handleMenuHover(menuItem)}
								onMouseLeave={handleMenuLeave}>
								<a
									rel="noopener noreferrer"
									href="#"
									className="flex items-center px-4  font-semibold dark:border-">
									{menuItem}&nbsp;
									{submenus[menuItem].length !== 0 ? (
										<svg
											class="w-3 h-3 pointer-events-none"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											stroke-width="1.5"
											stroke="currentColor"
											// class="w-6 h-6"
										>
											<path
												stroke-linecap="round"
												stroke-linejoin="round"
												d="m19.5 8.25-7.5 7.5-7.5-7.5"
											/>
										</svg>
									) : (
										""
									)}
								</a>
								{activeMenu === menuItem &&
									submenus[menuItem].length !== 0 && (
										<div className="absolute mt-14 bg-gray-50 text-red-600 p-2 rounded border">
											<ul className="items-start whitespace-nowrap space-x-3 lg:flex flex-col">
												{submenus[menuItem].map(
													(submenuItem) => (
														<li key={submenuItem}>
															<a
																href={submenuItem
																	.toLowerCase()
																	.replace(
																		/\s/g,
																		""
																	)}>
																{submenuItem}
															</a>
														</li>
													)
												)}
											</ul>
										</div>
									)}
							</li>
						))}
					</ul>
				</div>
				<div className="items-center flex-shrink-0 hidden lg:flex">
					<button className="px-8 py-3 font-semibold rounded bg-red-600 text-gray-100">
						Log in
					</button>
				</div>
			</div>
		</header>
	);
}

export default Header;
