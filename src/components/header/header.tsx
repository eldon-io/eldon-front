import { Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/react";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { signOut, signIn } from "next-auth/react";
import Logo from "../logo.js";

import { DrawerProvider } from "../../contexts/drawer/drawer.provider.js";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import React from "react";

import LOGOELDON from "../../assets/eldonfondtransparent.png";
import { useSession } from "next-auth/react";

export default function Header({ className }) {
  const { data: session, status } = useSession();

  console.log(session);
  return (
    <DrawerProvider>
      <header>
        <Container sx={styles.header} className={className} id="header">
          <Container sx={styles.container}>
            <Logo src={LOGOELDON} sx={styles.logo} />
            <Flex as="nav" sx={styles.nav}>
              {menuItems.map(({ path, label }, i) => (
                <ScrollLink
                  activeClass="active"
                  to={path}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  key={i}
                >
                  {label}
                </ScrollLink>
              ))}
            </Flex>

            <Button
              className="donate__btn"
              variant="primary"
              aria-label="Get Started"
              onClick={
                status === "authenticated" ? () => signOut() : () => signIn()
              }
            >
              {status === "authenticated" ? "Logout" : "Login"}
            </Button>

            <MobileDrawer />
          </Container>
        </Container>
      </header>
    </DrawerProvider>
  );
}

const positionAnim = keyframes`
  from {
    position: fixed;
    opacity: 1;
  }

  to {
    position: absolute;
    opacity: 1;
    transition: all 0.4s ease;
  }
`;

const styles = {
  header: {
    color: "text",
    fontWeight: "body",
    py: 4,
    width: "100%",
    top: 0,
    left: 0,
    backgroundColor: "transparent",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: ["auto", null, null, null, 0],
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 200,
    height: 50,
    left: 26,
    top: 5,
  },

  nav: {
    mx: "auto",
    display: "none",
    "@media screen and (min-width: 1024px)": {
      display: "block",
    },
    a: {
      fontSize: 2,
      fontWeight: "body",
      px: 5,
      cursor: "pointer",
      lineHeight: "1.2",
      transition: "all 0.15s",
      "&:hover": {
        color: "primary",
      },
      "&.active": {
        color: "primary",
      },
    },
  },
};
