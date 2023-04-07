import { jsx, Box, Grid, Container, Image, Heading, Text } from "theme-ui";
import { Link } from "../link";
import data from "./footer.data";
import FooterLogo from "../../assets/eldonfondtransparent.png";

export default function Footer() {
  return (
    <footer sx={styles.footer}>
      <Container>
        <Grid sx={styles.widgets}>
          {data.widgets.map((item) => (
            <Box
              key={`footer-widget--key${item.id}`}
              sx={styles.widgets.widgetItem}
            >
              <Image src={item.iconSrc} alt={item.altText} />
              <Box sx={styles.widgets.infoWrapper}>
                <Heading as="h3">{item.title}</Heading>
                <Text as="p">{item.description}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
        {/* End of footer widgets area */}
        <Box sx={styles.footer.footerBottomArea}>
          <Link path="/">
            <Image src={FooterLogo.src} alt="Logo" sx={styles.logo} />
          </Link>
          <Box sx={styles.footer.menus}>
            <nav>
              {data.menuItem.map(({ path, label }, i) => (
                <Link
                  path={path}
                  key={i}
                  label={label}
                  sx={styles.footer.link}
                />
              ))}
            </nav>
          </Box>
          <Text sx={styles.footer.copyright}>
            Copyright by {new Date().getFullYear()} ELDON Inc
          </Text>
        </Box>
      </Container>
    </footer>
  );
}

const styles = {
  logo: {
    width: 200,
    height: 80,
    left: 26,
    top: 5,
  },
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [6, null, 7],
      pb: ["30px", null, "8àpx"],
      textAlign: "center",
      flexDirection: "column",
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
      },
    },

    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary",
      },
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%",
    },
  },
  widgets: {
    py: [8, null, 9],
    px: [4, 0, 3, null, 7, 10],
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: ["40px 0", null, "45px 30px", null, "60px 30px", "50px 90px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      "repeat(3,1fr)",
    ],
    widgetItem: {
      textAlign: "center",
    },
    infoWrapper: {
      mt: [2, 3, null, 2, 4],
      mb: -1,
      h3: {
        fontSize: [3, null, null, 2, 3, 4],
        color: "heading_secondary",
        lineHeight: 1.4,
        fontWeight: 700,
        mb: [2, null, null, null, "15px"],
      },

      p: {
        fontSize: [1, "15px"],
        fontWeight: 400,
        lineHeight: 2,
      },
    },
  },
};
