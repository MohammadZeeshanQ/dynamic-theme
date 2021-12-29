import React from "react";
import styled from "styled-components";

export default function Footer() {
	const Container = styled.footer`
		padding: 3rem 0;
	`;

	const Wrapper = styled.div``;

	const TextWrapper = styled.div`
		text-align: center;
	`;

	const Text = styled.p`
		font: 1rem Poppins;
		color: var(--lightTextColor);
		letter-spacing: 0.5px;
		margin-bottom: 1rem;
	`;

	const LinkText = styled.a`
		font: 1rem Poppins;
		color: var(--lightTextColor);
		text-decoration: underline;
		text-underline-position: under;
		letter-spacing: 0.5px;
	`;

	return (
		<Container>
			<Wrapper>
				<TextWrapper>
					<Text>Made by: Zeeshan</Text>
					<LinkText
						target='_blank'
						rel='noopener noreferrer'
						href='https://mohammadzeeshanq.github.io/earth-developer/#/'
					>
						Vist Portfolio
					</LinkText>
				</TextWrapper>
			</Wrapper>
		</Container>
	);
}
