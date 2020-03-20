import React, { useState } from "react";
import { render } from "react-dom";

import App from "./App";

function Main() {
	const [x] = useState(Math.random());

	// changes in here necessarily cause a reload (because `ReactDOM.render` is in this file)
	return (
		<>
			Main {x}
			<br />
			<App />
		</>
	);
}

render(<Main />, document.getElementById("app"));
