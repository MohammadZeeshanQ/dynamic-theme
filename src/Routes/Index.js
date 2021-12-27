import React from "react";
import styled from "styled-components";

export default function Index() {
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

	const HeaderText = styled.h1`
		font: 3rem Poppins;
		font-weight: 400;
		color: var(--darkTextColor);
		letter-spacing: 1px;
	`;

	const HeaderTextSpan = styled.span`
		font-weight: 600;
		color: var(--lightTextColor);
	`;

	return (
		<Container>
			<Wrapper>
				<HeaderWrapper>
					<HeaderText>
						Your Name: <HeaderTextSpan>Zeeshan</HeaderTextSpan>
					</HeaderText>
				</HeaderWrapper>
			</Wrapper>
		</Container>
	);
}
