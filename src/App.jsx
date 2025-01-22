// src/App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Expertise from "./pages/Expertise";
import Industries from "./pages/Industries";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";

function App() {
	return (
		<div className="min-h-screen flex flex-col">
			<div className="text-red-500 text-center">Hello, Tailwind!</div>
			<Header />
			<main className="flex-grow">
				{/* Add routing here if using react-router-dom */}
				<HomePage />
				<Expertise />
				<Industries />
				<AboutUs />
				<ContactUs />
			</main>
			<Footer />
		</div>
	);
}

export default App;
