import React, { useState } from "react";
import { AppBar, Toolbar, SwipeableDrawer, List, ListItem, IconButton, Divider } from "@mui/material";
import styled from "styled-components";

// icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

// styled
const Wrapper = styled.div`
	display: flex;
	align-items: center;
	width: 88%;
	margin: auto;
	@media (max-width: 600px) {
		width: 95%;
	}
	@media (min-width: 601px) and (max-width: 1024px) {
		width: 90%;
	}
`;

const LogoWrapper = styled.div`
	flex-grow: 1;
`;

const Logo = styled.a`
	color: var(--textColor);
	font: 1.4rem Poppins;
	font-weight: 500;
	letter-spacing: 1px;
	text-decoration: none;
`;

const DesktopWrapper = styled.div`
	flex-grow: 1;
	@media (max-width: 1024px) {
		display: none;
	}
`;

const MobileWrapper = styled.div``;

const MobileButton = styled.button`
	font: 0.9rem Poppins;
	background: transparent;
	border: none;
	color: var(--purple);
	letter-spacing: 0.5px;
	margin: 0.5rem 0;
	padding: 0.5rem 0;
	width: 100%;
	cursor: pointer;
	display: flex;
	justify-content: flex-start;
`;

export default function NavBar() {
	const [drawer, setDrawer] = useState(false);

	const drawerHandler = () => {
		setDrawer(!drawer);
	};

	return (
		<AppBar
			position='fixed'
			elevation={8}
			sx={{
				background: "var(--background)",
			}}
		>
			<Toolbar>
				<Wrapper>
					<LogoWrapper>
						<Logo href='/'>DIETPUP</Logo>
					</LogoWrapper>

					<MobileWrapper onClick={drawerHandler} style={{ cursor: "pointer" }}>
						<MenuIcon sx={{ fontSize: "2rem", color: "var(--buttonHover)" }} />
					</MobileWrapper>
				</Wrapper>

				<SwipeableDrawer anchor='right' open={drawer} onOpen={drawerHandler} onClose={drawerHandler}>
					<List sx={{ width: 280 }}>
						<ListItem sx={{ justifyContent: "flex-end" }}>
							<IconButton onClick={drawerHandler}>
								<CloseIcon sx={{ color: "var(--buttonHover)", fontSize: "2rem" }} />
							</IconButton>
						</ListItem>
						<Divider />
						<ListItem>
							<MobileButton>Home</MobileButton>
						</ListItem>
						<Divider />
						<ListItem>
							<MobileButton>Pricing</MobileButton>
						</ListItem>
						<Divider />
						<ListItem>
							<MobileButton>Blog</MobileButton>
						</ListItem>
						<Divider />
						<ListItem>
							<MobileButton>Career</MobileButton>
						</ListItem>
						<Divider />
					</List>
				</SwipeableDrawer>
			</Toolbar>
		</AppBar>
	);
}
