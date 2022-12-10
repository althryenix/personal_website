import React from 'react';
import { Button } from '@mui/material';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./App.css"

function App() {

  AOS.init();

  if (performance.navigation.type === 1) {
    window.location.href = "./";
  }

  window.scrollTo(0, 0);

  const StyledButton = (props) => (

    <Button
      disableRipple={true}
      disableTouchRipple={true}
      type='text'
      sx={{
        '&:hover': { backgroundColor: '#20202090' },
        fontSize: '7vmin', color: '#696969',
        width: "100%",
        textAlign: "left",
        textTransform: "none",
        height: "14vh"
      }}
      style={{
        fontSize: '7vmin',
        // eslint-disable-next-line no-useless-computed-key
        ['@media (minWidth:600px)']: {
          fontSize: '10px'
        }
      }}
      href={props.href}
    >
      {props.children}
    </Button>
  );

  return (
    <>
      <div>
        <div className="App">
          <header className="App-header" style={{ userSelect: "none" }}>
            <h1 data-aos="fade-up" >tamer alkım tokuç</h1>
            <h6 data-aos="fade-up" data-aos-delay="400">ted university 4<sup>th</sup> grade computer engineering student</h6>
          </header>
        </div>


        <div className='Body-buttons' data-aos="fade-down" data-aos-delay="700" data-aos-duration="1000">

          <StyledButton href="#personal">personal info</StyledButton>
          <br />

          <StyledButton href="#education">education</StyledButton>
          <br />

          <StyledButton href="#experience">experience</StyledButton>
          <br />

          <StyledButton href="#test">test</StyledButton>
          <br />

          <StyledButton href="#links">links</StyledButton>
          <br />
        </div>

        <hr color="#404040" />
      </div>

      <div>
        <div className="section" id='personal'>

          <h3>Personal info</h3>

          <h4>who am i?</h4>

          <p>I am Tamer Alkım Tokuç, a student from Turkey, Ankara. I like to design stuff, build stuff, and try to make them work.</p>
          <p>I am playing drums since 2016. Art plays a big role in my life and I like it to reflect it on my work as well.</p>
          <p>Motorsports are my passion and I volunteer as marshall in TOSFED/FIA.</p>

          <h4>what do i do?</h4>

          <p>
            I can use Java to develop anything.
            I started learning it in university and
            improved myself by taking external courses and building projects.
          </p>
          <p>
            I learned Python to improve my career 
          </p>
          <p>Frontend development</p>

        </div>

        <hr color="#404040" />

        <div className='section' id="education">
          <h3>Education</h3>
          <h4>school</h4>
          <p>
            currently studying in ted university, computer engineering department
          </p>
        </div>

        <hr color="#404040" />

        <div className='section' id="experience">
          <h3>Experience</h3>
          <h4>internship</h4>
          <h5>infomedya ajans - ankara / turkey</h5>

          <p>
            lorem ipsum
          </p>
        </div>

        <hr color="#404040" />

        <div className='section' id="test">
          <h3>Test</h3>
          <p>lorem</p>
        </div>

        <hr color="#404040" />

        <div className='section' id="links">
          <h3>Links</h3>
          <h4>-----github link------</h4>
          <h4>-----linkedin link------</h4>
          <h4>-----hackerrank link------</h4>
          <h4>-----codegolf link------</h4>
          <h4>-----stack link------</h4>

        </div>
      </div>
    </>
  );
}

export default App;
