import React, { useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { StickyProvider } from "../contexts/app/app.provider";
import Layout from "../components/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterFollowButton,
  TwitterHashtagButton,
  TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare,
  TwitterDMButton,
  TwitterVideoEmbed,
  TwitterOnAirButton,
} from "react-twitter-embed";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  useEffect(() => {
    const fetchdata = async () => {
      try {
        //make a fetch call with json in body and post method
        const rep = await fetch("/api/twitterinfos", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: session.user.id,
          }),
        });

        const response = await rep.json();

        console.log(await rep.json());
      } catch (err) {
        console.log(err);
      }
    };
    if (session && session.user && status === "authenticated") {
      fetchdata();
    }
  }, [session]);
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          <TwitterTweetEmbed tweetId={"933354946111705097"} />
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
};

export default Dashboard;
