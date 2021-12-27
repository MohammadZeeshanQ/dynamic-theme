import React, { useState } from "react";
import NavBar from "./components/NavBar.js";
import Index from "./Routes/Index.js";

import "./App.css";

function App() {
	const [nightMode, setNightMode] = useState(false);

	return (
		<div className='App'>
			<NavBar nightMode={nightMode} setNightMode={setNightMode} />
			<Index />
		</div>
	);
}

export default App;
