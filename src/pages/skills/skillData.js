import Python from "../../assets/languages/python.svg"
import Javascript from "../../assets/languages/javascript.svg"
import Flask from "../../assets/languages/flask.svg"
import Golang from "../../assets/languages/golang.svg"
import MySQL from "../../assets/languages/mysql.svg"
import Ubuntu from "../../assets/languages/ubuntu.svg"
import React from "../../assets/languages/react.svg"



const skills = [
    {
        name: "Python",
        level: 100,
        logo: Python,
        experience: 
            `- Python is my most fluent language. I have been working with Python for 
            nearly 2 years. I am comfortable working with a lot of different concepts and
            fields in Python such as OOP, Web Crawler, Web Servers, API Requests, SQL, ... 
            During my first Coop, I was working on a Web Application with its Backend System
            is built fully using Python (Flask, SQLAlchemy, Celery)
            `
    },
    {
        name: "JavaScript",
        level: 95,
        logo: Javascript,
        experience: 
        `- I have a strong foundation in Javascript. I have been knowing Javascript for 1.5
        year and very comfortable building a simple CRUD application using HTML/CSS and 
        Vanilla Javascript. I have been exposed to most of the concepts in Javascript and 
        multiple libraries related to Web Development such as ExpressJS, ReactJS, NextJS,...
        `
    },
    {
        name: "Flask (Python)",
        level: 98,
        logo: Flask,
        experience: 
        `- I have been using Flask for most of my Web Project. I have 1 year experience in 
        Flask. During my first Coop, I was take in charge of bulding a Web Server. I chose 
        Flask as a Framework to help me developing a web server and APIs to communicate data
        with the client side.
        `
    },
    {
        name: "Golang",
        level: 80,
        logo: Golang,
        experience: 
        `- Golang would be my next favorite language. I am a beginner in Golang and still 
        learning the basics. As a person who is highly interested in Backend System, I 
        guarantee that Golang would be my best choice. Golang is a very powerful language 
        when it comes to concurrency. It was raised and released by Google to serve developing
        Google distributed system.
        `
    },
    {
        name: "MySQL",
        level: 90,
        logo: MySQL,
        experience: 
        `- I have a strong foundation in Structured Query Language. I understand the 
        simple concepts of CRUD operations as well as JOIN statement in SQL. I used SQL in
        most of my projects. Relational Database Management System that I am most familiar
        with is MySQL.
        `
    },
    {
        name: "ReactJS (Javascript)",
        level: 70,
        logo: React,
        experience: 
        `- I have started learning ReactJS a month ago. As a result, there are a lot more 
        concepts in ReactJS that I am not being exposed to. However, I have learned and 
        be able to understand the concepts of Components, how ReactJS works and how 
        to build a fully functioned Web Application with ReactJS.
        `
    },
    {
        name: "Linux (Ubuntu)",
        level: 85,
        logo: Ubuntu,
        experience: 
        `- During my first Coop, I was working the Ubuntu VPS to deploy my Web Server and 
        Client Server for the users to be able to access the Web Application on Cloud.
        I have some basic knowledge of how DNS and Domain Name works, how to open port and
        let the client access through HTTP. I also have some of the basic knowledge to 
        config NGINX with Ubuntu Server. I took a course to learn about shell and bash in
        my university course.
        `
    }
]

export default skills;