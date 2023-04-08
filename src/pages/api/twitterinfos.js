import { getServerSession } from "next-auth/next";
import { authOptions } from "src/pages/api/auth/[...nextauth]";

export default async function handler(req, res) {
  const session = await getServerSession(req, res, authOptions);
  //console.log(session.user.id);

  const twitterInfos = await fetch(
    `https://api.twitter.com/2/users/${session.user.id}/tweets?tweet.fields=conversation_id`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
      },
    }
  );
  const originalTweets = await twitterInfos.json();

  let test = await Promise.all(
    originalTweets.data.map(async (tweet) => {
      const test = await fetch(
        `https://api.twitter.com/2/tweets/search/recent?query=conversation_id:${tweet.conversation_id}&tweet.fields=author_id,conversation_id,created_at,entities,geo,id,in_reply_to_user_id,lang,possibly_sensitive,referenced_tweets,source,text,withheld&expansions=author_id,in_reply_to_user_id,referenced_tweets.id,referenced_tweets.id.author_id&user.fields=created_at,description,entities,id,location,name,pinned_tweet_id,profile_image_url,protected,url,username,verified,withheld&place.fields=contained_within,country,country_code,full_name,geo,id,name,place_type`,
        {
          headers: {
            Authorization: `Bearer ${process.env.TWITTER_BEARER_TOKEN}`,
          },
        }
      );
      return test.json();
    })
  );
  let twiit = [];

  test.forEach((element) => {
    if (element.data) {
      element.data.forEach((tweet) => {
        twiit.push({ text: tweet.text, id: tweet.id });
      });
    }
  });
  twiit = twiit.slice(0, 20);
  //filter array to have unique id
  twiit = twiit.filter((thing, index, self) => {
    return (
      index ===
      self.findIndex((t) => {
        return t.id === thing.id;
      })
    );
  });

  //console.log(test);
  //TODO Talk with back to get answe
  twiit = twiit.map((tweet) => {
    return {
      text: tweet.text,
      id: tweet.id,
      answer: Math.floor(Math.random() * 2),
    };
  });

  console.log(twiit.length);
  res.status(200).json({ res: twiit });
}
