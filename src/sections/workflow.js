import { Container, Grid, Box, Heading, Text, jsx } from "theme-ui";
import SectionHeader from "../components/section-header";

import PatternBG from "../assets/patternBG.png";
import ArrowOdd from "../assets/arrowOdd.svg";
import ArrowEven from "../assets/arrowEven.svg";

const data = [
  {
    id: 1,
    title: "Login to your social media account",
    text: "To use our app, you'll need to log in to your social media account using your existing credentials. Don't worry, we take your privacy and security seriously.",
  },
  {
    id: 2,
    title: "Give us required authorizations",
    text: "In order for our app to work properly, we'll need certain authorizations from your social media account. This will allow us to access your content and identify any hateful or harmful comments, replies, or messages.",
  },
  {
    id: 3,
    title: "Filter your social media content",
    text: "Our app uses advanced algorithms to filter through your social media content and identify any harmful or offensive content. You'll be able to review and approve any potential deletions before they're removed permanently.",
  },
  {
    id: 4,
    title: "Delete hateful content",
    text: "Once you've reviewed and approved any deletions, our app will automatically remove any identified hateful or harmful content from your social media accounts. Say goodbye to negativity and hello to a more positive online experience!",
  },
];

export default function WorkFlow() {
  return (
    <section style={{backgroundColor:'#2563FF',    
    marginBottom:"80px",
    padding:"40px",
    backgroundImage: `url(${PatternBG.src})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
    py: [8, null, 9, null, null, 10],}}>
      <Container >
        <SectionHeader
          slogan="How it works ?"
          title="Let’s see how it works"
          isWhite={true}
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box sx={styles.card} key={item.id}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
const styles = {
  grid: {
    mb: -1,
    pt: 0,
    gridGap: [
      "35px 0",
      null,
      "45px 30px",
      null,
      "50px 25px",
      null,
      null,
      "50px 65px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
  card: {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    textAlign: ["center", null, "left"],
    width: ["100%", "80%", "100%"],
    mx: ["auto"],
    px: [4, null, null, 0],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: `no-repeat`,
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      "@media screen and (max-width:1220px)": {
        display: "none",
      },
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: `url(${ArrowOdd.src})`,
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: `url(${ArrowEven.src})`,
      top: 17,
    },
    "&:last-child::before": {
      display: "none",
    },
  },

  iconBox: {
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    flexShrink: 0,
    borderRadius: [15, null, 23, null, null, 30],
    backgroundColor: "white",
    display: "flex",
    alignItems: "center",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    mt: "-5px",
    title: {
      fontSize: [3, null, 4, null, null, 5],
      color: "white",
      lineHeight: [1.4, null, null, null, null, 1.55],
      pr: [0, null, null, null, null, 2],
      mb: [2, 3],
    },

    subTitle: {
      fontSize: 1,
      fontWeight: 400,
      lineHeight: [1.85, null, null, 1.9, 2],
      color: "white",
      opacity: 0.75,
      pr: [0, null, null, null, null, 5],
      textAlign: "justify"
    },
  },
};
