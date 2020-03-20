import React, { useState } from "react";

function App() {
	const [x] = useState(Math.random());

	return <>App {x}</>; // <--- modify this, App's and all parent's state is retained
}

export default App;
