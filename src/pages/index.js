import React from "react";
import { ThemeProvider } from "theme-ui";
import { StickyProvider } from "../contexts/app/app.provider";
import theme from "../theme";
import SEO from "../components/seo";
import Layout from "../components/layout";
import Banner from "../sections/banner";
import ServiceSection from "../sections/service-section";
import Feature from "../sections/feature";
import WorkFlow from "../sections/workflow";
import Package from "../sections/package";
import TeamSection from "../sections/team-section";
import TestimonialCard from "../sections/testimonial";
import Subscribe from "../sections/subscribe";

export default function IndexPage() {
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <SEO title="Eldon" />
          <Banner />
          <ServiceSection />
          <Feature />
          <WorkFlow />
          <Package />
          <TeamSection />
          <TestimonialCard />
          <Subscribe />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
}
