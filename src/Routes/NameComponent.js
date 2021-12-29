import React, { useState, useEffect } from "react";
import styled from "styled-components";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

// icons
import CachedIcon from "@mui/icons-material/Cached";

export default function NameComponent({ name, setName }) {
	// state
	const [modalDisplay, setModalDisplay] = useState(true);
	const [modalOpen, setModalOpen] = useState(false);

	// open and close modal handlers
	const modalHandler = () => {
		setModalOpen(!modalOpen);
	};

	// display Modal for name input
	const nameHandler = (event) => {
		setName(event.target.value);
	};

	// styled components
	const Container = styled.section``;

	const Wrapper = styled.div`
		text-align: center;
	`;

	const HeaderText = styled.h1`
		font: 3rem Poppins;
		font-weight: 500;
		color: var(--darkTextColor);
		letter-spacing: 1px;
	`;

	const HeaderTextSpan = styled.span`
		font-weight: 600;
		color: var(--lightTextColor);
	`;

	const IconWrapper = styled.span`
		cursor: pointer;
	`;

	// Modal styled
	const ModalWrapper = styled.div``;

	const InputName = styled.input`
		font: 1.2rem Poppins;
		letter-spacing: 1px;
		border: none;
		border-bottom: 1px var(--buttonHover) solid;

		&:focus {
			outline: none;
		}
	`;

	const SubmitBtn = styled.button`
		font: 0.9rem Poppins;
		background: #0909ff;
		color: var(--lightTextColor);
		cursor: pointer;
		border: none;
		letter-spacing: 0.5px;
		border-radius: 0.3rem;
		padding: 0.5rem 1rem;
	`;

	return (
		<Container>
			<Wrapper>
				<HeaderText>
					Your Name: <HeaderTextSpan>{name}</HeaderTextSpan>
					<IconWrapper onClick={modalHandler}>
						<CachedIcon sx={{ fontSize: "1.6rem", color: "var(--buttonHover)" }} />
					</IconWrapper>
				</HeaderText>

				{/* Modal Upon Triggered */}

				<Dialog open={modalOpen} onClose={modalHandler} onOpen={modalHandler} maxWidth='md'>
					<DialogTitle>Enter your name:</DialogTitle>
					<DialogContent>
						<ModalWrapper>
							<InputName type='text' placeholder='Name' />
						</ModalWrapper>
					</DialogContent>
					<DialogActions>
						<SubmitBtn type='submit' onClick={nameHandler}>
							Submit
						</SubmitBtn>
					</DialogActions>
				</Dialog>
			</Wrapper>
		</Container>
	);
}
