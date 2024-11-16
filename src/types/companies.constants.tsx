import { IExperienceImage } from ".";
import { 
  AmazonGif,
  CiscoGif,
  LexisNexisGif,
  CVSGif,
  FPTGif,
  BloombergGif
} from "../assets";

const experienceImages: IExperienceImage[] = [
  {
    imageUrl: BloombergGif,
    companyName: "Bloomberg Finance L.P.",
    position: "Software Engineer",
    timeLine: "July 2024 - Present",
    description: ``
  },
  {
    imageUrl: AmazonGif,
    companyName: "Amazon.com LLC",
    position: "Software Engineer Intern",
    timeLine: "June 2023 - September 2023",
    description: `I was lucky enough to get my chance to work at Amazon for 3 months as a Software Engineer Intern during Summer 2023.
        During my internship at Amazon, I had an incredible experience that offered me valuable insights into the corporate world. I 
        actively participated in team events, which helped me build strong relationships and understand the collaborative culture at 
        Amazon. The in-person corporate experience was enriching, allowing me to learn about the company's mission and its impact on 
        global markets.
        \n\n
        I also delved into Amazon's leadership principles, which provided me with a solid framework for career growth and personal 
        development. This internship not only enhanced my technical skills but also taught me the importance of leadership, teamwork, 
        and strategic thinking in a fast-paced corporate environment.
      `
  },
  {
    imageUrl: CiscoGif,
    companyName: "Cisco Systems",
    position: "Software Engineer Intern",
    timeLine: "June 2022 - September 2022",
    description: `My internship at Cisco was a transformative experience as my first stint at a major corporation. Being part of a 
    large cohort of interns allowed me to make numerous friends and build a strong professional network. Throughout the internship, 
    we engaged in a variety of activities, which made the experience both fun and enriching.

    It was also my first time working with AWS, presenting a steep learning curve initially. However, with determination and support, 
    I managed to overcome the challenges and successfully navigate the complexities of the platform. This internship not only expanded 
    my technical skills but also provided a solid foundation for future endeavors in the tech industry.
    `
  },
  {
    imageUrl: LexisNexisGif,
    companyName: "Lexis Nexis",
    position: "Software Engineer Intern",
    timeLine: "September 2021 - March 2022",
    description: `My internship at LexisNexis marked the beginning of my professional career, offering a wealth of invaluable 
    experiences. It was an exciting opportunity to apply the knowledge I had gained in school to real-world projects, bridging 
    the gap between academic learning and practical application.

    Additionally, I gained a comprehensive understanding of the interview process, which has been instrumental in my career 
    development. This internship laid a solid foundation for my future endeavors, equipping me with essential skills and insights 
    for the professional world.
    `
  },
  {
    imageUrl: CVSGif,
    companyName: "Computer Vision Vietnam",
    position: "Software Engineer Intern",
    timeLine: "September 2020 - March 2021",
    description: `My internship at ComputerVisionVietnam was a pivotal experience, marking my first foray into the professional 
    world and standing out as one of my most fulfilling endeavors. While I faced several challenges along the way, each obstacle 
    provided valuable learning opportunities that contributed to its overall success.
    
    In essence, my internship at ComputerVisionVietnam not only equipped me with essential technical skills but also instilled in me a 
    resilient and adaptable approach to tackling challenges in the tech industry. It laid a strong foundation for my future career 
    aspirations and continues to influence my professional growth journey significantly.
    `
  },
  {
    imageUrl: FPTGif,
    companyName: "FPT Software",
    position: "Software Engineer Intern",
    timeLine: "June 2020 - September 2020",
    description: `I spent 3 months from June 2022 to September 2022 to work at Cisco Systems as a Software Engineer. The experience was extraordinary
    as I got a chance to contribute to the company's product, but also learn to communicate with my stakeholders and team to expand my knowledge in
    solving business cases as well as asking the correct questions. Furthermore, I also got a chance to learn about the technology stack that I have 
    never learned before in a very short period of time. This proves not only that I have a great learning skills, but I can use my knowledge to understand 
    the new concepts faster.
    `
  }
]

export {
  experienceImages
}