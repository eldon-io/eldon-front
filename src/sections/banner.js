import React from "react";
import { Box, Container, Grid, Button, Input, Heading, Text } from "theme-ui";
import ShapeRight from "../assets/shape-right.png";
import ShapeLeft from "../assets/shape-left.png";
import Image from "../components/image";
import img1 from "../assets/uqac.png";
import bannerImg from "../assets/banner-image-1-1.png";

const Banner = () => {
  console.log(img1);
  return (
    <Box sx={styles.banner} id="home">
      <Container sx={styles.container}>
        <Grid sx={styles.grid}>
          <Box sx={styles.content}>
            <Heading as="h1" variant="heroPrimary">
              Start spotting hate messages under your posts !
            </Heading>
            <Text as="p" variant="heroSecondary">
              Today, a third of hate messages are not deleted on social networks
              ! Let us help you with that by using ELDON who can detect very
              complex hate messages using advanced artificial intelligence
              techniques
            </Text>
            <Box sx={styles.partner}>
              <Text as="span">Sponsored by:</Text>
              <Box as="div">
                <Image
                  loading="lazy"
                  src={img1.src}
                  width="100"
                  height="28"
                  alt=""
                />
              </Box>
            </Box>
          </Box>
          <Box sx={styles.image}>
            <Image src={bannerImg.src} width="958" height="765" alt="" />
          </Box>
        </Grid>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  banner: {
    //pt: ['110px', null, null, null, '150px', '200px'],
    //pb: [null, null, null, null, '60px', null, '0'],
    overflow: "hidden",
    pt: ["140px", "145px", "155px", "170px", null, null, "180px", "215px"],
    pb: [2, null, 0, null, 2, 0, null, 5],
    position: "relative",
    "&::before": {
      position: "absolute",
      content: '""',
      bottom: 6,
      left: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeLeft.src})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center left",
      backgroundSize: "14%",
    },
    "&::after": {
      position: "absolute",
      content: '""',
      bottom: "40px",
      right: 0,
      height: "100%",
      width: "100%",
      zIndex: -1,
      backgroundImage: `url(${ShapeRight.src})`,
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "bottom right",
      backgroundSize: "12%",
    },
  },
  container: {
    width: [null, null, null, null, null, null, "1390px"],
  },
  grid: {
    display: "grid",
    gridTemplateColumns: ["1fr", null, null, "1fr 1fr"],
    gridGap: "0",
  },
  content: {
    textAlign: "center",
    mx: "auto",
    mb: ["40px", null, null, null, null, 7],
  },
  image: {
    img: {
      display: "flex",
      mixBlendMode: "darken",
      position: "relative",
      top: ["0", null, null, null, null, "-40px"],
      maxWidth: ["100%", null, null, null, null, null, "none"],
    },
  },
  partner: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    mb: ["40px"],
    "> div + div": {
      ml: ["10px", null, null, "20px", null, "30px"],
    },
    img: {
      display: "flex",
    },
    span: {
      fontSize: [1, null, null, null, 2],
      color: "#566272",
      lineHeight: [1],
      opacity: 0.6,
      display: "block",
      mb: ["20px", null, null, null, "0px"],
      mr: [null, null, null, null, "20px"],
      flex: ["0 0 100%", null, null, null, "0 0 auto"],
    },
  },
};
