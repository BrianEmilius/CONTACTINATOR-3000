import React from "react";
import ReactDOM from "react-dom";
import featureToggles from "./feature-toggles";
import "./App.css";
import Icon from "../public/images/icon.svg";

export default function App() {
	return (
		<>
			<header>
				<Icon alt="Atomic icon" height="300" />
				<h1>🔥 React Starter 🔥</h1>
			</header>
			<main>
				<p>A simple React.js Starter bundled with Webpack and Babel.</p>
				{ featureToggles.stuff ? (
					<p>Stuffs!!</p>
				) : null }
			</main>
		</>
	);
}

var wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App/>, wrapper) : false;
