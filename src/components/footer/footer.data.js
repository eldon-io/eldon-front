import Chat from "../../assets/widget/chat.svg";
import Community from "../../assets/widget/community.svg";
import Github from "../../assets/widget/github.svg";

export default {
  widgets: [
    {
      id: 1,
      iconSrc: Chat.src,
      altText: "Community",
      title: "Join the Community",
      description:
        "Connect with like-minded individuals and stay updated on the latest developments in online safety by joining our community.",
    },
    {
      id: 2,
      iconSrc: Community.src,
      altText: "Chat",
      title: "Chat Communication",
      description:
        "Need help or have a question? Our chat communication feature allows you to connect with our support team and other community members in real-time.",
    },
    {
      id: 3,
      iconSrc: Github.src,
      altText: "Github",
      title: "Github Access",
      description:
        "Take your involvement to the next level by accessing our open-source code and contributing to the development of our app.",
    },
  ],
  menuItem: [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "/",
      label: "Supports",
    },
    {
      path: "/",
      label: "Marketing",
    },
    {
      path: "/",
      label: "Contact",
    },
  ],
};
