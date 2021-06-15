import { Typography } from "@material-ui/core"
import CVS from "../../assets/companies/cvs.svg"
import FPT from "../../assets/companies/fpt.png"
import KPIM from "../../assets/companies/kpim.png"

const experiences = [
    {
        name: "KPIM Joint Stock",
        role: "Frontend Developer Internship",
        time: "April 2021 - Present",
        description:
            <Typography style={{
                fontSize: '1em',
                fontWeight: 200
            }}>
                - Participating in the early development process
                of an E-Learning Platform for the company's product.
                <br />
                - Building basic structure and functionlaties for the
                Frontend Client Side using NextJS, ReactJS and MaterialUI
            </Typography>,
        logo: KPIM,
        link: "https://kpim.vn/"
    },
    {
        name: "Computer Vision Vietnam",
        role: "Fullstack Developer Internship",
        time: "September 2020 - March 2021",
        description:
            <Typography style={{
                fontSize: '1em',
                fontWeight: 200
            }}>
                - Participated in the development cycle of the Software Engineer team, 
                working on Hotel Management product
                <br />
                - Successfully finished building a Backend System for a Demo Company's 
                web application
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