import React, { useEffect, useState } from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../theme";
import { StickyProvider } from "../contexts/app/app.provider";
import Layout from "../components/layout";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton,
  TwitterTweetEmbed,
  TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton,
} from "react-twitter-embed";
import PuffLoader from "react-spinners/PuffLoader";

const DUMMYTWTILIST = [...Array(5)].map((_, i) => {
  return {
    text: "Ballec",
    id: "1643805095480492033",
    result: i % 2,
  };
});

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  const [tweets, setTweets] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
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
        setIsLoading(false);
        setTweets(response.res);
      } catch (err) {
        console.log(err);
      }
    };
    if (session && session.user && status === "authenticated") {
      fetchdata();
    }
  }, [session]);
  //console.log(tweets.length);

  const hateTweets = tweets.filter((elem) => elem.result === 1);
  const loveTweets = tweets.filter((elem) => elem.result === 0);

  return (
    <ThemeProvider theme={theme}>
      <StickyProvider>
        <Layout>

          <div style={{ display: "flex", justifyContent: "center", padding :"50px" }}>
          {
            isLoading ?
            
                    <PuffLoader
                    color={'#23A9E2'}
                    loading={isLoading}
                    size={300}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                    /> 
                  :

            <div id='Dashboard' style={{ display: "flex", justifyContent: "center", padding :"20px" }}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0 50px"
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>These replies are hateful</h3>
                {hateTweets.length === 0 ? (
                  <div>no tweets</div>
                ) : (
                  <div
                    style={{
                      backgroundColor: "#f58c8c",
                      borderRadius: "10px",
                      padding: "10px",
                      boxShadow: "0 4px 6px rgba(0,0,0,.1)",
                      width : "500px"
                    }}
                  >
                    {hateTweets.map((elem) => {
                      return (
                        <>
                          <TwitterTweetEmbed
                            tweetId={`${elem.id}`}
                            options={{ width: 600, height: 300 }}
                          />
                          <br />
                        </>
                      );
                    })}
                  </div>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  margin: "0 50px",
                }}
              >
                <h3 style={{ marginBottom: "10px" }}>These replies are not hateful</h3>
                {loveTweets.length === 0 ? (
                  <div>no tweets</div>
                ) : (
                  <div
                    style={{
                      backgroundColor: "#b4fab4",
                      borderRadius: "10px",
                      padding: "10px",
                      boxShadow: "0 4px 6px rgba(0,0,0,.1)",
                      width : "500px"
                    }}
                  >
                    {loveTweets.map((elem) => {
                      return (
                        <>
                          <TwitterTweetEmbed
                            tweetId={`${elem.id}`}
                            options={{ width: 600, height: 300 }}
                          />
                          <br />
                        </>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          }
          </div>
        
        </Layout>
      </StickyProvider>
    </ThemeProvider>
  );
};

export default Dashboard;
