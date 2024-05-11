import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Stats from "../components/Stats";
import { ContactUs } from "../components/ContactUs";
import Testimonial from "../components/Testimonial";
import OurLegacy from "../components/OurLegacy";
import Services from "../components/Services";

const Home = () => {
	return (
		<div>
			<Header />
			<Hero />
			<OurLegacy />
			<Stats />
			<Services />
			<Testimonial />
			<ContactUs />
			<Footer />
		</div>
	);
};

export default Home;
