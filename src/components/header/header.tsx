import { Container, Flex, Button } from "theme-ui";
import { keyframes } from "@emotion/react";
import { Link as ScrollLink } from "react-scroll";
import { signOut, signIn } from "next-auth/react";
import Logo from "../logo.js";
import { DrawerProvider } from "../../contexts/drawer/drawer.provider.js";
import MobileDrawer from "./mobile-drawer";
import menuItems from "./header.data";
import React from "react";
import LOGOELDON from "../../assets/eldonfondtransparent.png";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function Header({ className }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  const header_dash = [
    {
      path: "Dashboard",
      label: "Dashboard",
    }]

  return (
    <DrawerProvider>
      <header style={styles.header} className={className} id="header">
        {router.pathname === "/" ? (
          <Container >
            <Container sx={styles.container}>
              <Logo src={LOGOELDON.src} sx={styles.logo} />
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
                  status === "authenticated"
                    ? () =>
                        signOut({
                          callbackUrl: "/",
                        })
                    : () =>
                        signIn("twitter", {
                          callbackUrl: process.env.NEXT_PUBLIC_URL + "/dashboard",
                        })
                }
              >
                {status === "authenticated" ? "Logout" : "Login"}
              </Button>

              <MobileDrawer />
            </Container>
          </Container>

          //header Dashboard
        ) : router.pathname === "/dashboard" ? (
          <Container>
            <Container sx={styles.container}>
              <Logo src={LOGOELDON.src} sx={styles.logo} />
              
              <Flex as="nav" sx={styles.nav}>
                {header_dash.map(({ path, label }, i) => (
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
                  status === "authenticated"
                    ? () =>
                        signOut({
                          callbackUrl: "/",
                        })
                    : () =>
                        signIn("twitter", {
                          callbackUrl: process.env.NEXT_PUBLIC_URL + "/dashboard",
                        })
                }
              >
                {status === "authenticated" ? "Logout" : "Login"}
              </Button>

            </Container>
          </Container>
        ) : null}
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
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "text",
    py: 4,
    top: 0,
    left: 0,
    padding : "5px",
    height:"100px",
    backgroundColor: "white",
    transition: "all 0.4s ease",
    animation: `${positionAnim} 0.4s ease`,
    ".donate__btn": {
      flexShrink: 0,
      mr: [15, 20, null, null, 0],
      ml: [null, null, null, null, 0],
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logo: {
    width: 150
  },

  nav: {
    mx: "auto",
    display: "flex",
    "@media screen and (min-width: 100%)": {
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
