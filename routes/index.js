const express = require('express');
const router = express.Router();

const glossaryTerms = [
  
  { ID:'1' ,Term: 'DevOps',  Description: 'DevOps is a methodology in the software development and IT industry.', Reference: 'Wikipedia Contributors, “DevOps,” Wikipedia, Dec. 01, 2019. https://en.wikipedia.org/wiki/DevOps' },
  { ID:'2' ,Term: 'Microservices',  Description: 'an architectural style that structures an application as a collection of services ', Reference: 'C. Richardson, “Microservices.io,” microservices.io, 2017. https://microservices.io/' },
  { ID:'3' ,Term: 'Version Control',  Description: 'Version control helps developers track and manage changes to a software project’s code. As a software project grows, version control becomes essentia', Reference: 'B. Jackson, “What Is GitHub? A Beginner’s Introduction to...,” Kinsta Managed WordPress Hosting, Apr. 20, 2018. https://kinsta.com/knowledgebase/what-is-github/' },
  { ID:'4' ,Term: 'Azure',  Description: 'Microsoft Azure, often referred to as Azure, is a cloud computing platform run by Microsoft, which offers access, management, and development of applications and services through global data centers.', Reference: 'Wikipedia Contributors, “Microsoft Azure,” Wikipedia, Oct. 12, 2019. https://en.wikipedia.org/wiki/Microsoft_Azure' },
  { ID:'5' ,Term: 'Google Cloud',  Description: 'Google Cloud Platform, offered by Google, is a suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products, such as Google Search, Gmail, Google Drive, and YouTube', Reference:'Wikipedia Contributors, “Google Cloud Platform,” Wikipedia, Oct. 11, 2019. https://en.wikipedia.org/wiki/Google_Cloud_Platform'},
  { ID:'6' ,Term: 'Node JS',  Description: 'Node.js allows developers to create both front-end and back-end applications using JavaScript. It was released in 2009 by Ryan Dahl', Reference: 'B. Semah, “What Exactly is Node.js? Explained for Beginners,” freeCodeCamp.org, Dec. 05, 2022. https://www.freecodecamp.org/news/what-is-node-js/' },
  { ID:'7' ,Term: 'Git',  Description: 'Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers who are collaboratively developing source code during software development', Reference: 'Wikipedia Contributors, “Git,” Wikipedia, May 12, 2019. https://en.wikipedia.org/wiki/Git' },
  { ID:'8' ,Term: 'VSCode',  Description: 'Visual Studio Code, also commonly referred to as VS Code, is a source-code editor made by Microsoft with the Electron Framework, for Windows, Linux and macOS.', Reference: 'Wikipedia Contributors, “Visual Studio Code,” Wikipedia, Mar. 21, 2019. https://en.wikipedia.org/wiki/Visual_Studio_Code' },
  { ID:'9' ,Term: 'DevOps Cycle',  Description: 'The DevOps lifecycle is a continuous software development process that employs DevOps best practices to plan, build, integrate, deploy, monitor, operate, and offer continuous feedback throughout the softwares lifecycle',Reference:'Wikipedia Contributors, “DevOps,” Wikipedia, Dec. 01, 2019. https://en.wikipedia.org/wiki/DevOps'},
  { ID:'10' ,Term: 'Containers',  Description: 'TesContainers are packages of software that contain all of the necessary elements to run in any environment. In this way, containers virtualize the operating system and run anywhere, from a private data center to the public cloud or even on a developer’s personal laptopt', Reference: 'https://cloud.google.com/learn/what-are-containers' }
];

router.get('/', (req, res, next) => {
  res.render('index', { title: 'DevOps Glossary', glossaryTerms });
});

module.exports = router;
