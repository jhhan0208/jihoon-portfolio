import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@jhhan0208",
    icon: Icons.gitHub,
    link: "https://github.com/jhhan0208",
  },
  {
    name: "LinkedIn",
    username: "Jihoon Han",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/namanbarkiya",
  },
  {
    name: "Twitter",
    username: "@namanbarkiya",
    icon: Icons.twitter,
    link: "https://twitter.com/namanbarkiya",
  },
  {
    name: "Gmail",
    username: "Jihoon Han",
    icon: Icons.gmail,
    link: "mailto:jhhan0208@gmail.com",
  },
];
