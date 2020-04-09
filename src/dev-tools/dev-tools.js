import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import featureToggles, {enable, disable} from "./feature-toggles";
import "./dev-tools.css";

function install() {
	window.devToolsEnabled = true;
	const requireDevToolsLocal = require.context(
		"./",
		false,
		/dev-tools\.local\.js/
	);
	const local = requireDevToolsLocal.keys()[0];
	let LocalDevTools;
	if (local) {
		LocalDevTools = requireDevToolsLocal(local).default;
	}
	LocalDevTools = LocalDevTools || (() => null);

	function StuffToggle() {
		const [stuff, setStuff] = useState(featureToggles.stuff);

		useEffect(() => {
			if (stuff) {
				enable("stuff");
			} else {
				disable("stuff");
			}
		}, [stuff]);

		return (
			<div>
				<label>
					Enable stuff:{" "}
					<input
						type="checkbox"
						checked={stuff}
						onChange={e => setStuff(e.target.checked)}
					/>
				</label>
			</div>
		)
	}

	function DevTools() {
		return (
			<div id="devTools">
				<h1>🛠 DevTools</h1>
				<div className="tools">
					<LocalDevTools />
					<StuffToggle />
				</div>
			</div>
		);
	}

	const devToolsRoot = document.createElement("div");
	document.body.insertBefore(devToolsRoot, document.getElementById("app"));
	ReactDOM.render(<DevTools/>, devToolsRoot);
}

export {install};
