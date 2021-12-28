import { Typography } from "@material-ui/core"
import CVS from "../../assets/companies/cvs.svg"
import FPT from "../../assets/companies/fpt.png"
import LNX from "../../assets/companies/lexisnexis.png"

const experiences = [
    {
        name: "LexisNexis Corporation",
        role: "Software Engineer Coop",
        time: "September 2021 - Present",
        description:
            <Typography style={{
                fontSize: '1em',
                fontWeight: 200
            }}>
                - Implementing Graph Traversing algorithm to traverse through 
                random patents in the Citation Network to build sample dataset.
                <br />
                - Customizing and implementing Centrality Algorithms to calculate 
                the influential score of patents in Citation Network.
            </Typography>,
        logo: LNX,
        link: "https://www.lexisnexis.com/en-us/gateway.page"
    },
    {
        name: "Computer Vision Vietnam",
        role: "Software Engineer Coop",
        time: "September 2020 - March 2021",
        description:
            <Typography style={{
                fontSize: '1em',
                fontWeight: 200
            }}>
                - Designed and developed backend system for SaaS web application demo integrated with OCR Technology 
                with REST endpoints that allow users to extract and manage identity cards using Flask, Redis, Celery and MySQL.
                <br />
                - Containerized application with Docker, configured domain with NGINX and deployed on Linux-based server for production 
            </Typography>,
        logo: CVS,
        link: "https://www.computervision.com.vn/"
    },
    {
        name: "FPT Software",
        role: "Data Engineer Internship",
        time: "June 2020 - September 2020",
        description:
            <Typography style={{
                fontSize: '1em',
                fontWeight: 200
            }}>
                - Computed a short Python script using Pandas to process and validate data
                in Excel file.
                <br/>
                - Integrated the script with Flask HTTP endpoint and deployed the API to 
                internal company's server for internal usage.
            </Typography>,
        logo: FPT,
        link: "https://www.fpt-software.com/"
    },
]

export default experiences;