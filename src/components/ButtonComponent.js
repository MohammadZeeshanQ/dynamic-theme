import React, { useState } from "react";
import styled from "styled-components";

export default function ButtonComponent() {
	const [color, setColor] = useState("#306EFF");

	// styled component
	const Container = styled.section`
		padding: 2rem 0;
	`;

	const Wrapper = styled.section`
		display: flex;
		align-items: center;
		justify-content: space-around;
	`;

	const ButtonTheme = styled.button`
		background-color: ${color};
		color: #fcfcfc;
		letter-spacing: 1px;
		padding: 1rem 1.5rem;
		border: none;
		border-radius: 0.3rem;
	`;

	const MainButton = styled(ButtonTheme)`
		cursor: pointer;

		&:hover {
			background-color: #6698ff;
			transition: all 0.2s linear;
		}
	`;

	const OutlineButton = styled(ButtonTheme)`
		background-color: transparent;
		border: 2px ${color} solid;
		cursor: pointer;
	`;

	const DisabledButton = styled(ButtonTheme)`
		cursor: not-allowed;
		opacity: 0.9;
	`;

	return (
		<Container>
			<Wrapper>
				<MainButton>Primary</MainButton>
				<OutlineButton>Secondary</OutlineButton>
				<DisabledButton>Disabled</DisabledButton>
			</Wrapper>
		</Container>
	);
}
