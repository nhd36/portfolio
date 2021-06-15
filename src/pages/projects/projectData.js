import Python from "../../assets/languages/python.svg"
import Ubuntu from "../../assets/languages/ubuntu.svg"
import Flask from "../../assets/languages/flask.svg"
import MySQL from "../../assets/languages/mysql.svg"
import Celery from "../../assets/languages/celery.png"
import Redis from "../../assets/languages/redis.svg"
import React from "../../assets/languages/react.svg"
import Mui from "../../assets/languages/mui.svg"
import NextJS from "../../assets/languages/next.svg"
import Docker from "../../assets/languages/docker.svg"
import SQLAlchemy from "../../assets/languages/sql_alchemy.png"
import SQLite from "../../assets/languages/sqlite.svg"
import Golang from "../../assets/languages/golang.svg"
import JavasScript from "../../assets/languages/javascript.svg"
import FireBase from "../../assets/languages/firebase.svg"
import GoogleMap from "../../assets/languages/googlemap.svg"
import HTML from "../../assets/languages/html.svg"


import Document from "../../assets/projects/document.gif"
import OCRManagement from "../../assets/projects/ocr_management.gif"
import SmartTravel from "../../assets/projects/smartTravel.gif"
import Educa from "../../assets/projects/educa.svg"
import TwoMAway from "../../assets/projects/2maway.jpg"
import RapidSign from "../../assets/projects/rapidsign.gif"
import SkillRank from "../../assets/projects/skillrank.gif"

import { Typography } from "@material-ui/core"

export const group = [
    {
        name: "DocumentAI",
        role: "Backend Developer",
        stacks: [Python, Flask, Celery, MySQL, Ubuntu, Redis, SQLAlchemy],
        image: Document,
        link: "https://document.computervision.vn/",
        desc:
            <Typography style={{ fontSize: 18 }}>
                - A web application integrated with a computer vision technology
                that has the capability of receiving images of identity cards
                from clients and will be able to extract the information and
                save them on our system.
                <br />
                - In this project, I worked mainly as a Backend Developer developing
                a web server and a task queue system that has the capability of handling
                the time extracting and processing each image.
            </Typography>,
        time: "Decemeber 2020 - March 2021",
        github: null
    },
    {
        name: "Educa+",
        role: "Frontend Developer",
        stacks: [React, Mui],
        image: Educa,
        link: "https://savethechildren-educa-dev.web.app",
        desc:
            <Typography style={{ fontSize: 18 }}>
                - A web application integrated with a computer vision product
                that has the capability of receiving images of identity cards
                from clients and will be able to extract the information and
                save them on our system.
                <br />
                - In this project, I worked mainly as a Backend Developer developing
                a web server and a task queue system that has the capability of handling
                the time extracting and processing each image.
            </Typography>,
        time: "April 2021 - Present",
        github: null
    },
    {
        name: "2MAway",
        role: "Backend Developer",
        stacks: [HTML, JavasScript, GoogleMap, FireBase],
        image: TwoMAway,
        link: "https://devpost.com/software/2maway",
        desc:
            <Typography style={{ fontSize: 18 }}>
                - During the Covid-19 pandemic, distancing is the most vital needed action
                to keep the society safe as well as yourself. Therefore, 2MAway is a web
                application that created to alert users whether they had been in contact with
                a person who has been exposed to COVID-19 by calculating the distance between
                the users (less than 2 meters).
                <br />
                - This is the project that we created from scratch to compete at a Hackathon.
                Everything was built within 36 months.
            </Typography>,
        time: "May 2020",
        github: "https://github.com/nhd36/2MAway"
    },
    {
        name: "Skillrank",
        role: "Frontend Developer",
        stacks: [React, Mui, NextJS],
        image: SkillRank,
        link: "https://rapidsign.herokuapp.com/register",
        desc:
            <Typography style={{ fontSize: 18 }}>
                - An E-Learning platform that is built with the purposes of allowing the
                students to be able to access the courses and Instructors to be able to
                manage their contents via Web or Mobile Application.
                <br />
                - The Web Application is at the very beginning phase of the product without
                any actual layout or design.
            </Typography>,
        time: "April 2021 - Present",
        github: null
    },
    {
        name: "RapidSign",
        role: "Frontend Developer",
        stacks: [React, Mui],
        image: RapidSign,
        link: "https://rapidsign.herokuapp.com/",
        desc:
            <Typography style={{ fontSize: 18 }}>
                - RapidSign is a PDF sharing and signing platform online for the users to have
                a more productive way to have their required documents signed. Owner of the
                document will be able to share a unique URL of the document with all of the
                intended recipients. With those people who have the URL, They will be able to
                access, sign and push their signed document version into the cloud. All of the
                signed documents will be managed by the owner.
            </Typography>,
        time: "April 2021 - June 2021",
        github: "https://github.com/nhd36/rapid-signing"
    },
]

export const personal = [
    {
        name: "OCR Management",
        role: "Fullstack Developer",
        stacks: [Python, Flask, SQLite, SQLAlchemy, HTML],
        image: OCRManagement,
        link: "http://139.177.188.127:3001",
        desc:
            <Typography style={{ fontSize: 18 }}>
                - OCR Document is a small CRUD Web Application integrated with Computer Vision
                Technology using third-party API to scan and read text on the images. The
                in the image will be extracted into plain text, let the user edit the content
                and then saved them into the database.
                <br />
                - This is a solo project Web Application. I take in charge of both Frontend and
                Backend side
            </Typography>,
        time: "September 2020",
        github: "https://github.com/nhd36/OCR_Management"
    },
    {
        name: "SmartTravel",
        role: "Fullstack Developer",
        stacks: [Golang, MySQL, Docker, React, Mui],
        image: SmartTravel,
        link: "Coming Soon",
        desc: 
        <Typography style={{ fontSize: 18 }}>
            - In this Covid-19 pandemic, vaccine is required to enter some of the restricted
            regions or areas. Therefore, it is very hard to manage the number of people 
            who has been confirmed to have vaccinated before letting them to enter the areas.
            <br />
            - It would be very ideal if there would be an application that can manage all of 
            the users' information for the organizations to be able to access from anywhere 
            and quickly evaluate if the passengers will be able to access the regions.
        </Typography>,
        time: "June 2021 - Present"
    }
]