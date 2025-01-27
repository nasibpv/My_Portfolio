import React, { useEffect, useState } from 'react';
import Projects from '../Project/Projects';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Experience from '../Experience/Experience';
import './style.css';
import NavBar from '../navbar/NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosArrowUp } from "react-icons/io";
import { restList } from '../../action/restaction';
import PreviousProject from './PreviousProject';

function Home() {
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const { dataList } = useSelector((state) => state.dataReducers);

  // Scroll to top functionality
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // Toggle visibility of the scroll-to-top button
  const handleScroll = () => {
    setIsVisible(window.pageYOffset > 0);
  };

  useEffect(() => {
    dispatch(restList());
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [dispatch]);

  return (
    <div className="home text-white">
      <NavBar />

      <div className="section-hero container mx-auto">
        <div className="section p-2 pt-4">
          <div className="section-content">
            <h2>{dataList.name}</h2>
            <p className="section-field">FULL STACK<br />SOFTWARE<br />DEVELOPER.</p>
          </div>
          <PreviousProject />
        </div>

        <button
          onClick={handleClick}
          style={{ display: isVisible ? 'flex' : 'none' }}
          className="scroll-button"
        >
          <IoIosArrowUp />
        </button>
      </div>

      <AboutMe />
      <Projects />
      <Experience experience={dataList.experience} />
      <Contact />
    </div>
  );
}

export default Home;
