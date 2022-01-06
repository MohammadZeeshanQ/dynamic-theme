import React, { useState } from "react";
import NavBar from "./components/NavBar.js";
import Footer from "./components/Footer.js";
import Index from "./Routes/Index.js";

import styled from "styled-components";
import "./App.css";

// styled-components
const Container = styled.section``;

const Wrapper = styled.div`
	width: 80%;
	margin: auto;
`;

function App() {
	const [nightMode, setNightMode] = useState(false);

	return (
		<Container>
			<Wrapper>
				<NavBar nightMode={nightMode} setNightMode={setNightMode} />
				<Index />
				<Footer />
			</Wrapper>
		</Container>
	);
}

export default App;
