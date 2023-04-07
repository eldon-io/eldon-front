import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { StickyProvider } from "../contexts/app/app.provider";
import Layout from "../components/layout";
import Banner from "../sections/banner";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <div className="test">DASHBOARD</div>
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
};

export default Dashboard;
