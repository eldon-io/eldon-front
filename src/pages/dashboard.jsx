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

const DUMMYTWTILIST = [...Array(5)].map((_, i) => {
  return {
    text: "Ballec",
    id: "1643805095480492033",
    answer: i % 2,
  };
});

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const [tweets, setTweets] = React.useState([]);

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
        //console.log(response);
        setTweets(response.res);
      } catch (err) {
        console.log(err);
      }
    };
    if (session && session.user && status === "authenticated") {
      fetchdata();
    }
  }, [session]);
  console.log(tweets.length);
  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>
          {tweets.map((elem) => {
            return (
              <>
                <br />
                TWEET EN BAS = {`${elem.answer === 1 ? "HATE" : "LOVE"}`}
                <TwitterTweetEmbed tweetId={`${elem.id}`} />
              </>
            );
          })}
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
};

export default Dashboard;
