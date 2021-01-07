import ruby from "../images/ruby-icon.png";
import rubySmall from "../images/ruby-icon-small.png";
import gatsby from "../images/gatsby-icon.png";
import gatsbySmall from "../images/gatsby-icon-small.png";
import react from "../images/react-icon.png";
import reactSmall from "../images/react-icon-small.png";
import design from "../images/figma-icon.png";
import designSmall from "../images/figma-icon-small.png";
import mkLogo from "../images/mkLogoBlue.png";
import mkLogoSmall from "../images/mkLogoBlue-small.png";

export const projectDetails = [
  {
    icon: mkLogo,
    smallIcon: mkLogoSmall,
    iconWidth: 75,
    title: "MK Decision",
    framework: "React.js, Moqui (Java, XML), GraphQL",
    description:
      "Developed major features for Dashboard, SalesFunnel, AppFlow, and Dynamic document generation. Supported minor features and bug fixes for DecisionTime and CreditConnect",
    websiteLink: "https://mkdecision.com/",
  },
  {
    icon: react,
    smallIcon: reactSmall,
    iconWidth: 75,
    title: "Portfolio Website",
    framework: "React.js",
    description:
      "Developed a portfolio website using React.js. Utilized Figma for web design.",
    websiteLink: "https://michelle-misun-choi.netlify.com/",
    githubLink: "https://github.com/misunchoi/portfolio",
  },
  {
    icon: design,
    smallIcon: designSmall,
    iconWidth: 75,
    title: "Portfolio Design",
    framework: "Figma",
    description: "Developed design for the portfolio website using Figma.",
    websiteLink:
      "https://www.figma.com/file/x5U5vlgK7Mr78DLod449Wl/Portfolio-2.0?node-id=0%3A1",
  },
  {
    icon: gatsby,
    smallIcon: gatsbySmall,
    iconWidth: 75,
    title: "GND Website",
    framework: "Gatsby(React), Moqui(Java)",
    description:
      "Developed a static website utilizing Material-UI for styling, Yup and Formik for form validations, and Stripe to process donations.",
    websiteLink: "https://gnd.alpha.mkdecision.com/",
    githubLink: "https://github.com/tfe-gnd-project/GND-website",
  },
  {
    icon: ruby,
    smallIcon: rubySmall,
    iconWidth: 75,
    title: "Apartment App",
    framework: "Ruby on Rails, React.js",
    description:
      "Logged in users can create, edit, and delete apartment information.",
    websiteLink: "https://apartment-frontend.netlify.com/",
    githubLink:
      "https://github.com/misunchoi?utf8=%E2%9C%93&tab=repositories&q=apartment&type=&language=",
  },
];