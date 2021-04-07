import React from 'react'
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion'
import Card from "react-bootstrap/Card";

import L_ReactToDoList from "../../assets/img/projects/myportfolio.png";
import L_GetGitHubInfo from "../../assets/img/projects/get_github_info.webp";
import L_SmartBrain from "../../assets/img/projects/brain.webp";
import L_PYTHON_SELENIUM from "../../assets/img/projects/Instagram.png";
import L_DATA_ANALYSIS from "../../assets/img/projects/IPL.png";
import L_DL from "../../assets/img/projects/DL.png";



// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_PYTHON from "../../assets/img/skills/python.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";

import "./projects-timeline.styles.css";


const ProjectTimeLine = () => {
    return (

        <div id="projects">
        
        <h1  className="pt-3 text-center font-details pb-3">PROJECTS</h1>
        <Timeline>
          <Events>
          {/* Project: MyPortfolio*/}
                           {/* Project: 1*/}
        <ImageEvent
            date="20/01/2021"
            className="text-center"
            text="My Portfolio"
            src={L_ReactToDoList}
            alt="My Portfolio"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong> This is a My Portfolio  with React and Bootstrap 
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>See all my Projects and Experience</li>
                          <li>Powered by React and React-BootStrap</li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_HTML5}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              HTML5
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_CSS3}
                                alt="CSS 3"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              CSS3
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_REACT}
                                alt="React"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React
                            </span>
                          </li>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_BOOTSTRAP4}
                                alt="Material-UI"
                                rounded
                                className="image-style1 m-1"
                              ></Image>{" "}
                              React-BootStrap
                            </span>
                          </li>
                          
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href="https://akjha96.github.io/Todo-List-React/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}
                <UrlButton
                  href="https://github.com/Tarun1108/myPortfolio"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                {/* <UrlButton
                  href="https://www.linkedin.com/posts/anand-kumar-jha-745798a4_react-materialui-fun-activity-6716765686963826688-GIpZ"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>

        {/* Project: Data Analysis*/}
                           {/* Project: 2*/}
        <ImageEvent
            date="10/12/2020"
            className="text-center"
            text="Data Analysis"
            src={L_DATA_ANALYSIS}
            alt="Data Analysis"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                        In This we Analysis the data of IPL Matches .
                        
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>See all details about all Matches, Players and Teams</li>
                          <li>Powered by Data Analysis and Python </li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PYTHON
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href="https://akjha96.github.io/Todo-List-React/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}
                <UrlButton
                  href="https://github.com/Tarun1108/IPL-Data-Analysis/tree/main/IPL%20Data%20Analysis"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                <UrlButton
                  href="https://www.linkedin.com/in/tarun-rajpoot-81bbb7136/detail/recent-activity/shares/"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton>
              </div>
            </div>
          </ImageEvent>

      {/* Project: Instagram Bot*/}
            {/* Project: 3*/}
        <ImageEvent
            date="25/11/2020"
            className="text-center"
            text="Instagram Bot"
            src={L_PYTHON_SELENIUM}
            alt="Selenium Instagram Bot"
          >
            <div className="d-flex justify-content-between flex-column mt-1">
              <div>
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      eventKey="0"
                      className="p-2 text-center accordian-main"
                    >
                      PROJECT DETAILS
                    </Accordion.Toggle>

                    <Accordion.Collapse eventKey="0" className="text-left">
                      <Card.Body>
                        <strong>Description:</strong>
                          In This we use Selenium Automation with Python .
              
                        <hr />
                        <strong>Features:</strong>
                        <ul className="list-styles pt-1">
                          <li>This Automatically Like  Instagram posts. Use Selenium for Authentication and Automation </li>
                          <li>Powered by Selenium and Python </li>
                          <li>Respoisive Design</li>
                        </ul>
                        <hr />
                        <strong>Tech used:</strong>
                        <ul>
                          <li>
                            <span className="p-2">
                              <Image
                                src={L_PYTHON}
                                alt="HTML 5"
                                rounded
                                className="image-style m-1"
                              ></Image>{" "}
                              PYTHON
                            </span>
                          </li>
                        </ul>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </div>
              <div className="d-flex justify-content-between flex-nowrap text-center">
                {/* <UrlButton
                  href="https://akjha96.github.io/Todo-List-React/"
                  target="_blank"
                >
                  SEE LIVE
                </UrlButton> */}
                <UrlButton
                  href="https://github.com/Tarun1108/Selenium_Projects-/tree/main/Instagram_Automatic%20Liker%20Bot"
                  target="_blank"
                >
                  SOURCE CODE
                </UrlButton>
                {/* <UrlButton
                  href="https://www.linkedin.com/in/tarun-rajpoot-81bbb7136/detail/recent-activity/shares/"
                  target="_blank"
                >
                  WATCH VIDEO
                </UrlButton> */}
              </div>
            </div>
          </ImageEvent>
                
                          
                

          </Events>
        </Timeline>
      </div>
    )
}

export default ProjectTimeLine 
