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
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.",
    },
    {
      id: 2,
      iconSrc: Community.src,
      altText: "Chat",
      title: "Chat Communication",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.",
    },
    {
      id: 3,
      iconSrc: Github.src,
      altText: "Github",
      title: "Github Access",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.",
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
