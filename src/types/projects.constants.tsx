import { IProjectImage } from ".";
import {
  ProjectMealBuddy,
  ProjectVimepharco,
  ProjectRapidSigning,
  Project2MAway,
  ProjectLeecher,
  ProjectMockNRoll,
  ProjectSellOnUs
} from "../assets";

const projectImages: IProjectImage[] = [
  {
    title: "Vimepharco",
    github: "https://vimepharco.vn/",
    content: `Working on a project that helps local pharmacy business to display and manage their selling products on website. 
    Responsible for building REST API, data storage, deploying to cloud server, maintain product to avoid downtime.`,
    image: ProjectVimepharco
  },
  {
    title: "Meal Buddy",
    github: "https://github.com/nhd36/MealBuddy",
    content: `Collaborate with 3 other teammates to build a mobile application that allow to match meals between students 
    in Drexel University. Responsible for building the functionalities for mobile application such as authentication, matching, ...`,
    image: ProjectMealBuddy
  },
  {
    title: "Rapid Signing",
    github: "https://github.com/nhd36/rapid-signing",
    content: `Collaborate with 3 other teammates to build a web application that allow to user to sign document online and store 
    data document. Responsible for building the frontend for web application such as authentication, signing, sharing document, ...`,
    image: ProjectRapidSigning
  },
  {
    title: "Leecher",
    github: "https://github.com/nhd36/Leecher",
    content: `Collaborate with 2 other teammates to build a scraping tool that allow to user to scrap data from news site and store 
    and process data to feed Machine Learning algorithm. Application includes Thread Pool to support parallel scraping, engine to scrap data
    using Selenium`,
    image: ProjectLeecher
  },
  {
    title: "2MAway",
    github: "https://devpost.com/software/2maway",
    content: `Collaborate with another team member to build a web interface that allow to user to keep track of interaction between users and
    prevent spreading of Covid-19. Responsible for building the frontend and backend for web application: GoogleMap Integration, Authentication with Firebase,
    Designing algorithm to calculate distance between 2 users.`,
    image: Project2MAway
  },
  {
    title: "SellOnUs",
    github: "https://github.com/EZSell/EZSell",
    content: `Collaborate with 4 team members to build a web application that allow to retailers to keep track of selling items on multiple sources 
    on a single source. Responsible for designing and building the infrastructure for application, maintain CI/CD pipeline and leading Backend team.`,
    image: ProjectSellOnUs
  },
  {
    title: "Mock&Roll",
    github: "https://github.com/Mock-Roll/Mock-Roll",
    content: `Collaborate with other team members to build a web application that support user doing mock behavioral interview (similar to Leetcode)
    but taylor on behavioral aspect. Responsible to desinging and building the infrastructure for application`,
    image: ProjectMockNRoll
  },
]

export { projectImages };