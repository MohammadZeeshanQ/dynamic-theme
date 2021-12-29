import React, { useState, useEffect } from "react";
import styled from "styled-components";

// components
import NameComponent from "./NameComponent.js";

export default function Index() {
	// variables
	const [name, setName] = useState("");

	useEffect(() => {}, [name]);

	// style components
	const Container = styled.section`
		border: 1px #fff solid;
		margin-top: 7rem;
	`;

	const Wrapper = styled.div`
		padding: 2rem;
	`;

	const HeaderWrapper = styled.div`
		text-align: center;
	`;

	return (
		<Container>
			<Wrapper>
				<NameComponent name={name} setName={setName} />
			</Wrapper>
		</Container>
	);
}
