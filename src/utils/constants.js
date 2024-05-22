import {
  FaHtml5,
  FaCss3,
  FaReact,
  FaSass,
  FaPython,
  FaNodeJs,
  FaDocker,
  FaGithub,
  FaStripe,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

import {
  TbBrandTypescript,
  TbBrandJavascript,
  TbBrandCpp,
  TbBrandRedux,
  TbBrandBootstrap,
} from "react-icons/tb";
import { BiLogoJquery, BiLogoPostgresql } from "react-icons/bi";
import {
  SiD3Dotjs,
  SiExpress,
  SiPostman,
  SiGnubash,
  SiNextdotjs,
  SiCypress,
  SiThreedotjs,
  SiUpwork,
} from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { FaHashnode } from "react-icons/fa6";
import {
  BsGlobe,
  BsCodeSlash,
  BsRobot,
  BsFileBarGraph,
  BsGit,
  BsMarkdown,
} from "react-icons/bs";
import { GiArchiveResearch, GiArtificialIntelligence } from "react-icons/gi";
import { FcElectronics } from "react-icons/fc";

export const links = [
  { text: "Home", path: "/" },
  { text: "Projects", path: "/projects" },
];

export const interestsData = [
  {
    interest: "Frontend Engineer",
    icon: BsCodeSlash,
  },
  {
    interest: "Tech Blog",
    icon: FaHashnode,
  },
  {
    interest: "Internet of Things",
    icon: FcElectronics,
  },
  {
    interest: "Market Research",
    icon: GiArchiveResearch,
  },
  {
    interest: "Visualization",
    icon: BsFileBarGraph,
  },
  {
    interest: "Software Development",
    icon: AiFillCode,
  },
  {
    interest: "Robotics",
    icon: BsRobot,
  },
  {
    interest: "GIS",
    icon: BsGlobe,
  },
];

export const skillsData = [
  {
    name: "HTML5",
    icon: FaHtml5,
  },
  {
    name: "CSS3",
    icon: FaCss3,
  },
  {
    name: "Javascript",
    icon: TbBrandJavascript,
  },
  {
    name: "Jquery",
    icon: BiLogoJquery,
  },
  {
    name: "Typescript",
    icon: TbBrandTypescript,
  },
  {
    name: "SASS",
    icon: FaSass,
  },
  {
    name: "Bootstrap",
    icon: TbBrandBootstrap,
  },
  {
    name: "D3.js",
    icon: SiD3Dotjs,
  },
  {
    name: "Three.js",
    icon: SiThreedotjs,
  },
  {
    name: "ReactJS",
    icon: FaReact,
  },
  {
    name: "NextJS",
    icon: SiNextdotjs,
  },
  {
    name: "Redux",
    icon: TbBrandRedux,
  },
  {
    name: "NodeJs",
    icon: FaNodeJs,
  },
  {
    name: "Stripe",
    icon: FaStripe,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "Docker",
    icon: FaDocker,
  },
  {
    name: "Postgres",
    icon: BiLogoPostgresql,
  },
  {
    name: "Postman",
    icon: SiPostman,
  },
  {
    name: "Git",
    icon: BsGit,
  },
  {
    name: "Github",
    icon: FaGithub,
  },
  {
    name: "ChatGPT",
    icon: GiArtificialIntelligence,
  },
  {
    name: "Bash",
    icon: SiGnubash,
  },
  {
    name: "Cypress",
    icon: SiCypress ,
  },
];

export const workData = [
  {
    company: "1Digitalstack.ai",
    designation: "Software Engineer 1",
    duration: "March 2022 - Present",
    companyImg: "1ds.jpg",
    description: (
      <>
        <ul>
          <li>
            I work on Reviniti, an analytics product designed for e-commerce
            players in the bid management domain. Solely migrated the old
            codebase from a templating engine (PugJS) to React with TypeScript.
          </li>
          <li>
            Engaged in developing new features, refactoring code, enhancing
            product performance, bug fixes and contributing towards achieving
            high scalability for the product.
          </li>
        </ul>
      </>
    ),
  },
  {
    company: "Fact.MR",
    designation: "Associate Consultant Level 01",
    duration: "Dec 2020 - July 2021",
    companyImg: "fmr.svg",
    description: (
      <>
        <ul>
          <li>
            Engaged in creating comprehensive client-specific and syndicated
            research reports, along with SEO-focused articles and collateral
            materials within the domains of chemicals, materials, consumer
            goods, and industrial goods.
          </li>
          <li>
            Expertly estimated market valuations and conducted primary research
            in collaboration with industry experts to validate data, extract
            valuable market insights.
          </li>
        </ul>
      </>
    ),
  },
];

export const projectsData = [
  {
    type: "WEB-APP",
    title: "Movie Magnet",
    image: "movie-magnet",
    link: "https://movie-magnet-smoky.vercel.app/",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "Media Place",
    image: "mediaPL",
    link: "https://medio-dashboard.netlify.app ",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "MPOD",
    image: "MPOD",
    link: "https://epod-gsap.netlify.app/",
    source: null,
  },
  {
    type: "PROJECT",
    title: "3D City",
    image: "3D-City",
    link: "https://city-viewer.netlify.app/p",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "Hoodie Viewer",
    image: "3D-Hoodie-View",
    link: "https://hoodies-viewer.netlify.app/",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "3D Player",
    image: "3D-Player",
    link: "https://jingleboy-playground.netlify.app/",
    source: null,
  },
  {
    type: "PROJECT",
    title: "3D Earth",
    image: "cesium",
    link: "https://cesium-satellites.netlify.app",
    source: null,
  },
  {
    type: "PROJECT",
    title: "TW Dashboard",
    image: "twReact",
    link: "https://twdashboardr.netlify.app/",
    source: null,
  },
  {
    type: "WEB-APP",
    title: "Data Chart",
    image: "data-chart",
    link: "https://chart-ecommerce.netlify.app/",
    source: null,
  },
];


export const socialMediaLinks = [
  {
    href: "https://www.upwork.com/freelancers/~013a1399ba8da18bb4?mp_source=share",
    icon: SiUpwork,
    backgroundColor: "gray.700",
    hoverColor: "gray.600",
  },
];

export const query = `
query Publication($after: String) {
  publication(host: "codersk36.hashnode.dev") {
    posts(first: 20, after: $after) {
      totalDocuments
      pageInfo {
        hasNextPage
        endCursor
      }
      edges {
        node {
          title
          brief
          slug
          publishedAt
          coverImage {
            url
          }
        }
      }
    }
  }
}

`;
