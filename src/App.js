import React from 'react';
import { Button } from '@mui/material';
import GlitchText from 'react-glitch-effect/core/GlitchText';
import GlitchClip from 'react-glitch-effect/core/GlitchClip';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css"

function App() {

  AOS.init();

  window.scrollTo(0, 0);

  const StyledButton = (props) => (

    <GlitchText onHover={true}>
      <Button
        disableRipple={true}
        disableTouchRipple={true}
        type='text'
        sx={{
          '&:hover': { backgroundColor: '#20202090' },
          color: '#696969',
          width: "100%",
          textAlign: "left",
          textTransform: "none",
          height: "12vh"
        }}
        style={{
          fontSize: '7vmin'
        }}
        href={props.href}
      >
        {props.children}
      </Button>
    </GlitchText>

  );

  return (
    <>
      <div className="App">
        <div className='Top'>
          <header className="header" style={{ userSelect: "none" }}>
            <GlitchText duration={1000}>
              <GlitchClip onHover={true}>
                <h1 data-aos="fade-down">tamer alkım tokuç</h1>
              </GlitchClip>
              <h6 data-aos="fade-down" data-aos-delay="400">ted university 4<sup>th</sup> grade computer engineering student</h6>
            </GlitchText>
          </header>

          <div className='Body-buttons' data-aos="fade-down" data-aos-delay="700" data-aos-duration="1000">

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

        <div className='Page'>
          <div className="section" id='personal'>

            <h3>Personal info</h3>

            <h4>who am i?</h4>

            <p>I am Tamer Alkım Tokuç, a student from Turkey, Ankara. I like to design stuff, build stuff, and try to make them work.</p>
            <p>I am playing drums since 2016. Art plays a big role in my life and I like it to reflect it on my work as well.</p>
            <p>Motorsports are my passion and I volunteer as marshall in TOSFED/FIA.</p>

            <h4>what do i do?</h4>

            <div>
              <p><a href="../public/Tamer Alkım TOKUÇ - CV.pdf" download>My CV</a></p>

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
            <h4>school</h4>
            <h5>TED University</h5>
            <p>
              Currently studying in computer engineering department.
              I will graduate this summer. My current GPA is 3.32.
              I took "Data Structures and Algorithms" courses on Java.
              In addition, I learned C Programming, RDBMS, Computer Graphics, Introduction to Machine Learning, and R Programming
            </p>
          </div>

          <hr color="#404040" />

          <div className='section' id="experience">
            <h3>Experience</h3>
            <h4>internship</h4>

            <h5>WiNK SRL</h5>
            <h6>rome / italy - 27/06/2022 - 02/09/2022</h6>

            <p>Added elements and improved UX of a commercial project. </p>
            <p>Built recruiting website using React and Node.js.</p>
            <p>Optimized existing company website to reduce load time and backup size.</p>
            <p>Built recquitment management system using Keystone 6.</p>

            <hr width="80%" />

            <h5>infomedya ajans</h5>
            <h6>ankara / turkey - 25/07/2022 - 20/08/2022</h6>

            <p>Created a Java program to check MX, DNS, and A addresses of websites owned by the company.</p>
            <p>Created a multiple page website using HTML and CSS.</p>
            <p>Performed presentations to engineer branch about "clean coding" and "refactoring".</p>

            <h4>projects</h4>
            <h5>THIS WEBSITE!</h5>
            <p>HOW COOL IS IT TO BUILD YOUR OWN WEBSITE, USE REACT DEV TOOLS TO SEE MY SHITTY CODE!</p>

            <hr width="80%" />

            <h5>pianissimo</h5>
            <h6>senior project</h6>
            <p>A Python 3 program using wave analysis and AI to create sheet music from audio files. Working with group of 4.</p>

            <hr width="80%" />

            <h5>the last stand</h5>
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
