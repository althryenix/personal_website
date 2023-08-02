import React from 'react';
import { Button} from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css"

function App() {

  AOS.init();

  const StyledButton = (props) => (
    <Button
      disableRipple={true}
      disableTouchRipple={true}
      type='text'
      sx={{
        '&:hover': { backgroundColor: '#35353590',
                      color: '#bababa' },
        color: '#696969',
        width: "100%",
        textAlign: "left",
        textTransform: "none",
        height: "15vh"
      }}
      style={{
        fontSize: '7vmin'
      }}
      href={props.href}
    >
      {props.children}
    </Button>
  );


  return (
    <>
      <div className="App">
        <div className='Top'>

          <header className="header" style={{ userSelect: "none" }}>
            <h1 data-aos="fade-down">tamer alkım tokuç</h1>
            <h6 data-aos="fade-down" data-aos-delay="400">web developer</h6>
          </header>

          <div id='Body-buttons' data-aos="fade-down" data-aos-delay="700" data-aos-duration="1000">

            <StyledButton href="#personal">personal info</StyledButton>
            <br />

            <StyledButton href="#education">education</StyledButton>
            <br />

            <StyledButton href="#experience">experience</StyledButton>
            <br />

            <StyledButton href="#contact">contact</StyledButton>
            <br />

            <StyledButton href="#links">links</StyledButton>
            <br />
          </div>

          <hr color="#404040" />
        </div>

        <div id='Page'>
          <div className="section" id='personal'>

            <h3>Personal info</h3>

            <h4>Who am I?</h4>

            <p>I am Tamer Alkım Tokuç, a student from Turkey, Ankara. I like to design stuff, build stuff, and try to make them work.</p>
            <p>I am playing drums since 2016. Art plays a big role in my life and I like it to reflect it on my work as well.</p>
            <p>Motorsports are my passion and I volunteer as marshall in TOSFED/FIA.</p>

            <h4>What do I do?</h4>

            <div>
              <p><a id="cv-link" href="./Tamer Alkım TOKUÇ - CV.pdf" download>My CV</a></p>

              <p>
                I started learning HTML and CSS for my first internship and continued my frontend web developer
                career path by learning JavaScript and React. I used both technologies in my second
                internship and now I am pursuing career in the field.
              </p>

              <p>
                I can use Java to develop anything.
                I started learning it in university and
                improved myself by taking external courses and building projects.
              </p>

              <p>
                I learned Python from external resources to improve my career options and
                general knowledge. I am still learning advanced technologies, such as web scraping,
                Selenium, NumPy, and Pandas.
              </p>
            </div>

          </div>

          <hr color="#404040" />

          <div className='section' id="education">
            <h3>Education</h3>
            <h4>School</h4>
            <h5>TED University</h5>
            <p>
              I graduated from computer engineering department.
              I will graduate this summer. My current GPA is 3.32.
              During my education, I studied Data Structures and Algorithms, C Programming, RDBMS, Computer Graphics, Machine Learning, and R Programming
            </p>

            <h4>Certificates</h4>
            <h5>BTK Akademi</h5>
            <p>REACT İle Web Programcılığı <br/> (Web programming with REACT)</p>

          </div>

          <hr color="#404040" />

          <div className='section' id="experience">
            <h3>Experience</h3>
            <h4>Internship</h4>

            <h5>WiNK SRL</h5>
            <h6>Rome / Italy - 27/06/2022 - 02/09/2022</h6>

            <p>Added elements and improved UX of a commercial project. </p>
            <p>Built recruiting website using React and Node.js.</p>
            <p>Built recquitment management system using Keystone 6 and GraphQL.</p>
            <p>Optimized existing company website to reduce load time and backup size.</p>


            <hr width="80%" />

            <h5>Infomedya Ajans</h5>
            <h6>Ankara / Turkey - 25/07/2022 - 20/08/2022</h6>

            <p>Created a Java program to check MX, DNS, and A addresses of websites owned by the company.</p>
            <p>Created a multiple page website using HTML and CSS.</p>
            <p>Performed presentations to engineer branch about "clean coding" and "refactoring".</p>

            <h4>Projects</h4>
            <h5>This Website</h5>
            <p>Inspired by old VHS tape boxes in design. I created this website to give more information about me.</p>

            <hr width="80%" />

            <h5>Pianissimo</h5>
            <h6>senior project</h6>
            <p>A Python 3 program using wave analysis to create sheet music from audio files. Working with group of 4.</p>

            <hr width="80%" />

            <h5>The Last Stand</h5>
            <p>Game developed using Unity with group of 2 for Game Developing class. Built a 3D FPS game with enemy AI, minigames, and multiple scenes.</p>
          </div>

          <hr color="#404040" />

          <div className='section' id="contact">
            <h3>Contact</h3>
            <p><a href="mailto:tameralkim@gmail.com">Send email</a></p>
            <p><a href="tel:+905356402398">Phone</a></p>
          </div>

          <hr color="#404040" />

          <div className='section' id="links">
            <h3>Links</h3>
            <a href="https://github.com/althryenix" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/tmralkim" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://www.hackerrank.com/tameralkim" target="_blank" rel="noreferrer">HackerRank</a>
            <a href="https://code.golf/golfers/althryenix" target="_blank" rel="noreferrer">Code golf</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
