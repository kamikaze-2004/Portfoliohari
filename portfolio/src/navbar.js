import React, { useState } from 'react';
import myImage from './hariprof.jpg';
import scimg  from './srv.jpg';
import college from './ceg.jpg';
import std from './images (4).png';
import contact from './images (2).png';
import webdev from './webdev.png';
import re from './react.png';
import php from './php.png';
import './nav.css'; 

const NavBar = () => {
  const [activeSection, setActiveSection] = useState('about');

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className="Main">
        <nav className="nv">
          <div className="navbar">
            <ul className="nb">
              <li className={activeSection === 'about' ? 'about active' : 'about'}>
                <button id="abt" onClick={() => handleSectionClick('about')}>
                  About
                </button>
              </li>
              <li className={activeSection === 'education' ? 'Edu active' : 'Edu'}>
                <button id="ed" onClick={() => handleSectionClick('education')}>
                  Education
                </button>
              </li>
              <li className={activeSection === 'skills' ? 'skills active' : 'skills'}>
                <button id="sk" onClick={() => handleSectionClick('skills')}>
                  Skills
                </button>
              </li>
              <li className={activeSection === 'contact' ? 'contacts active' : 'contacts'}>
                <button id="ct" onClick={() => handleSectionClick('contact')}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div className='cont'>
          <img className='image' src={myImage} alt="Self" />
          <div className='am'>
            <strong>Hariguru</strong>
            <br></br>
            <span id="sp">COMPUTER SCIENCE SOPHOMORE</span>
          </div>
          <div className='actcont' style={{ background: activeSection === 'about' ? '#000000' : activeSection === 'education' ? '#ffffff' : activeSection === 'skills' ? '	#c0c0c0' : activeSection === 'contact' ? '#ffffff' : '#f0f0f0' }}>
            {activeSection === 'about' && (
               <p>
               Computer science sophomore with a passion for problem-solving
               through programming. Eager to contribute coding skills and adapt to
               new technologies in collaborative environments.
               <br></br>
               <br></br> 
               As a computer science sophomore, enthusiasm permeates every aspect of my academic journey. The thrill of solving intricate coding challenges and unraveling the complexities of algorithms fuels my passion for the field. Each line of code written becomes a canvas for innovation, and every debugging session transforms into a learning opportunity.
               <br></br>
               <br></br>
               Despite occasional setbacks, the perseverance to conquer programming obstacles remains unwavering. The constant evolution of technology inspires me to stay abreast of industry trends, pushing me to cultivate a dynamic skill set that aligns with the ever-changing landscape of computer science.
               
               <br>
               </br>
               <span>
 
               </span></p>
            )}
            {activeSection === 'education' && (
              <div className='e'>
                  2020-2022
                  Higher secondary education -"SRV BOYS"
                  <br></br>
                  graduated with 99.33%
                  <br></br>
                  <img
                  className='school'
                  src={scimg}
                  alt='school'/>
                   <img
                  className='std'
                  src={std}
                  alt='study'/>
                  <br>
                  </br>
                  2020-present
                  BE-CSE:"CEG-Anna university"
                  <br></br>
                  <img
                  className='school'
                  src={college}
                  alt='college'/>
                  <br>
                  </br>
                  

                </div>
            )}
            {activeSection === 'skills' && (
              <p className='ski'>
               <strong >
                Languages
               </strong>
               <ul className='liele'>
                <li>Tamil</li>
                <li>English</li>
                <li>Telugu</li>
               </ul>
               <br></br>
               <img
               className='webd'
               src={webdev}
               />
                <img
               className='webd2'
               src={re}
               />
                <img
               className='php'
               src={php}
               />

               <strong>Relevent skills</strong>
               <ul className='liele'>
                <li>
                  C
                </li>
                <li>CSS,HTML,JAVASCRIPT</li>
                <li>ReactJS</li>
                <li>PHP</li>
                <li>MYSQL</li>
               </ul>
                

              </p>
            )}
            {activeSection === 'contact' && (
              <p class="conta">
                 <img
                  className='std'
                  src={contact}
                  alt='contact'/>
               <p class='contdet'>  Phone no:7418224810</p>
               
               <p class='mail'> 
               G-mail:hariguru20040909@gmail.com </p>
              
              <p class='add'> Address:8/32-2,Senthur nagar,Erikadu,Mallsamudram,Namakkal,637503</p>
               
               
               <br></br>
               <a  className='linked' href='https://www.linkedin.com/in/hariguru-undefined-99979b290/'>  Linkedin</a>
               <br></br>
               <br></br>
               <a  className='git' href='https://github.com/kamikaze-2004'> Github</a>
              
              
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
