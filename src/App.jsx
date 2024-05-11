import { useState } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FAQ from "./components/FAQ";
import Tables from "./components/Tables";
import { ContactUs } from "./components/ContactUs";
import Home from "./pages/Home";

function App() {
	return (
		<div className="bg-gray-200">
			<Routes>
				<Route exact path="/" element={<Home />} />
			</Routes>
			{/* <Header />
			<Hero />
			<Tables />
			Stats, FAQ and Footer Section
			<Stats />
			<FAQ />
			<Footer />
			<ContactUs /> */}
		</div>
	);
}

export default App;
