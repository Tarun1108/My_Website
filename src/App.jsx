import  React  from  'react';
import './App.css';
import MyNavbar from "./components/my-navbar/my-navbar.component";
import MyCarousal from "./components/my-carousal/my-carousal.component";
import  TitleMessage from  "./components/title-message/title-message-component";
import About from './pages/about/about.component'
import Container from "react-bootstrap/Container";
import Skills from './pages/skills/skills.component';
import Experience from "./pages/experience/experience.component";
import ProjectTimeLine  from "./components/projects-timeline/projects-timeline.component";
import Contact from "./pages/contact-form/contact-form.component"
import  Footer from "./components/footer/footer.component";
//C:\Users\tarun\Desktop\portfolio)\myportfolio\src\components\projects-timeline\projects-timeline.componet.jsx
import Particles from "react-particles-js";
import { particlesOptions } from "./particlesOptions";

import { Parallax } from "react-parallax";
import Fade from "react-reveal/Fade";
import { skills } from './pages/skills/skills-data';

const App=()=> {
  return (
      <div className="App" style={{ position: "relative" }} >
        <MyNavbar />
        <MyCarousal/>
        <TitleMessage />

        <Particles
        className="particles particles-box"  params={particlesOptions}/>
        <div>
            <Parallax>
                    <Container className="container-box rounded">
                        <Fade duration={500}>
                                <About />
                        </Fade>    
                    </Container>         
            </Parallax>
          </div>
       {/*Skills*/}
       <div>
               <Container className="container-box rounded">
                        <Fade duration={500}>
                                    <hr/>
                                    <Skills />
                         </Fade>    
                </Container>         
        </div>
              {/*Experience*/}
        <div>
                    <Container className="container-box rounded">
                        <Fade duration={500}>
                                <Experience />
                        </Fade>    
                    </Container>         
          </div>

          <div>
               <Container className="container-box rounded">
                        <Fade duration={500}>
                                      <hr/>
                                    <ProjectTimeLine  />
                         </Fade>    
                </Container>         
        </div>

             {/*Contact*/}
             <div>
                    <Container className="container-box rounded">
                        <Fade duration={500}>
                              <hr/>
                                <Contact />
                        </Fade>    
                    </Container>         
          </div>
                  {/*Contact*/}
                  <hr/>
                  <Footer/>

        
  
        </div>
    );
};

export default App;
