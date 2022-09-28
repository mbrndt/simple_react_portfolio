import Project1 from "../assets/portfolio-mbrndt.vercel.app_.png";
import Project2 from "../assets/cloud.jpeg";
import Project3 from "../assets/diary.jpeg";
import Portfolio from "../Projects/Portfolio";

export const projectList = [
  {
    name: "Portfolio",
    image: Project1,
    discription: "A portfolio website that is a bit ... different.",
    longText: <Portfolio />,
  },

  {
    name: "E-commercial",
    image: Project2,
    discription: "Providing an amazing online experience.",
    longText:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Therefore it is importantt that ...  ",
  },
  {
    name: "Online Art Gallery",
    image: Project3,
    discription:
      "A website that allows users to create posts and share them with their friends.",
  },
];
