import { jsx } from "theme-ui";
import { Container, Grid } from "theme-ui";
import SectionHeader from "../components/section-header";
import FeatureCard from "../components/feature-card.js";
import Performance from "../assets/feature/performance.svg";
import Partnership from "../assets/feature/partnership.svg";
import Subscription from "../assets/feature/subscription.svg";
import Support from "../assets/feature/support.svg";

const data = [
  {
    id: 1,
    imgSrc: Performance.src,
    altText: "Fast Performance",
    title: "Fast Performance",
    text: "With lightning-fast API calls and a streamlined webservice structure, our app for deleting hateful tweets is a game-changer. Say goodbye to waiting for slow load times and hello to efficient, speedy performance. Because when it comes to fighting hate online, every second counts.",
  },
  {
    id: 2,
    imgSrc: Partnership.src,
    altText: "Pro Subscription",
    title: "Pro Subscription",
    text: "Choose from three different price ranges: Free, Pro Master, and Premium Plan. With Pro Master, enjoy advanced features like real-time monitoring and custom filters, while Premium takes it to the next level with personalized support and priority access to new updates.",
  },
  {
    id: 3,
    imgSrc: Subscription.src,
    altText: "Partnership deal",
    title: "Partnership deal",
    text: "Collaborate with us through one of our partnership deals and fight online hate speech with us. Customize our app to fit your needs and leverage our technology to make a real impact. Let's team up and create a safer, more inclusive online community !",
  },
  {
    id: 4,
    imgSrc: Support.src,
    altText: "Customer Support",
    title: "Customer Support",
    text: "Our customer support is available 24/7 to assist you with any questions or concerns. With our friendly and knowledgeable team, you'll never be alone in your journey towards a more positive online experience.",
  },
];

export default function Feature() {
  return (
    <section sx={{ variant: "section.feature" }}>
      <Container style={{margin:"40px", paddingBottom:"40px"}}>
        <SectionHeader
          slogan="Quality features"
          title="Amazing useful features"
        />

        <Grid sx={styles.grid}>
          {data.map((item) => (
            <FeatureCard
              key={item.id}
              src={item.imgSrc}
              alt={item.altText}
              title={item.title}
              text={item.text}
            />
          ))}
        </Grid>
      </Container>
    </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      "40px 0",
      null,
      "45px 30px",
      null,
      "60px 50px",
      "70px 50px",
      null,
      "80px 90px",
    ],
    gridTemplateColumns: ["repeat(1,1fr)", null, "repeat(2,1fr)"],
  },
};
