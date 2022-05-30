import React from 'react';
import react from "../images/react.png";
import js from "../images/js.png";
import css from "../images/css.png";
import college from "../images/college.jpg";
import html from "../images/html.png";
import school from "../images/school.png";
import skill from "../images/skill.png";
import SchoolIcon from '@mui/icons-material/School';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import code from "../images/code.png";
import mongodb from "../images/mongodb.png";
import nodejs from "../images/nodejs.png";
import tailwind from "../images/tailwind.png";
import express from "../images/express.png";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';

function About({ color }) {
  return (
    <div className="sm:grid min-h-screen flex flex-col pb-10" style={{ backgroundColor: color ? "#E8F9FD" : 'rgba(26, 32, 44, 0.8)', gridTemplateColumns: '25% 45% 30%' }}>
      <div></div>
      <ul className='mt-10'>
        <li><div className='mb-4 flex flex-col w-[90%] mx-auto'>
          <h1 style={{color: color ? 'rgba(26, 32, 44, 0.8)' : 'white'}} className='mb-4 text-xl font-bold'>Career <BusinessCenterIcon /></h1>
          <div className='flex justify-between bg-white px-2 items-center h-[100px]' style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }} >
              <div className='flex'>
                <img alt='' src={code} width="70px" height="100px" className='mr-2' />
                <div>
                  <h2 className='font-medium text-[16px]' >Web Developer</h2>
                  <p className='text-[12px] text-slate-600' >programming and coding</p>
                </div>
              </div>
              <p className='text-slate-500' >Present</p>
            </div>
        </div></li>
        <li>
          <div className='mb-4 flex flex-col w-[90%] mx-auto'>
            <h1 style={{color: color ? 'rgba(26, 32, 44, 0.8)' : 'white'}} className='mb-4 text-xl font-bold'>Education <SchoolIcon /></h1>
            <div className='flex justify-between bg-white px-2 items-center h-[100px]' style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }} >
              <div className='flex'>
                <img alt='' src={college} width="40px" height="40px" className='mr-2' />
                <div>
                  <h2 className='font-medium text-[16px]' >University Of Commerce College</h2>
                  <p className='text-[12px] text-slate-600' >Bachelor's of Business Administration</p>
                </div>
              </div>
              <p className='text-slate-500' >Present</p>
            </div>
            <div className='mt-4  flex justify-between bg-white px-2 items-center h-[100px]' style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }} >
              <div className='flex'>
                <img alt='' src={school} width="40px" height="40px" />
                <div>
                  <h2 className='font-medium text-[16px]'>Swami Vivekanand Gov. Model School</h2>
                  <p className='text-[12px] text-slate-600'>CBSE Board 12</p>
                </div>
              </div>
              <p className='text-slate-500' >2020-2021</p>
            </div>
          </div>
        </li>
        <li>
          <div className='flex flex-col w-[90%] mx-auto'>
            <h1 style={{color: color ? 'rgba(26, 32, 44, 0.8)' : 'white'}} className='mb-4 text-xl font-bold flex'>Tech Stacks <img alt='' width="30px" src={skill} /></h1>
            <div className='mx-auto p-4 rounded-[14px] grid grid-rows-8 grid-cols-1 w-[100%] sm:grid-rows-4 sm:grid-cols-2 bg-white' style={{ boxShadow: 'rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px' }} >
              <p className='flex justify-evenly font-medium text-[14px] w-[200px] items-center my-2 bg-white mx-auto h-[50px]' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px" }} ><img alt='' src={react} width="30px" height="30px" /> Reactjs</p>
              <p className='flex justify-evenly font-medium text-[14px] w-[200px] items-center my-2 bg-white mx-auto h-[50px]' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px" }} ><img alt='' src={js} className="w-[30px] h-[30px]" /> Javascript</p>
              <p className='flex justify-evenly font-medium text-[14px] w-[200px] items-center my-2 bg-white mx-auto h-[50px]' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px" }} ><img alt='' src={css} width="30px" height="30px" /> CSS</p>
              <p className='flex justify-evenly font-medium text-[14px] w-[200px] items-center my-2 bg-white mx-auto h-[50px]' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px" }} ><img alt='' src={html} width="30px" height="30px" /> HTML</p>
              <p className='flex justify-evenly font-medium text-[14px] w-[200px] items-center my-2 bg-white mx-auto h-[50px]' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px" }} ><img alt='' src={tailwind} width="30px" height="30px" /> Tailwind-css</p>
              <p className='flex justify-evenly font-medium text-[14px] w-[200px] items-center my-2 bg-white mx-auto h-[50px]' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px" }} ><img alt='' src={express} className="w-[30px] h-[30px]" /> expressjs</p>
              <p className='flex justify-evenly font-medium text-[14px] w-[200px] items-center my-2 bg-white mx-auto h-[50px]' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px" }} ><img alt='' src={nodejs} width="30px" height="30px" /> nodejs</p>
              <p className='flex justify-evenly font-medium text-[14px] w-[200px] items-center my-2 bg-white mx-auto h-[50px]' style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px" }} ><img alt='' src={mongodb} width="30px" height="30px" /> mongodb</p>
            </div>
          </div>
        </li>
      </ul>
      <div>
      <div className='sm:fixed sm:bottom-0 sm:mb-4 sm:float-right flex justify-evenly w-[200px] mt-4 sm:mt-10'>
          <a href='https://twitter.com/abhiwd'><TwitterIcon style={{ color: "#00acee", border: color ? '1px solid #1a202ccc' : '1px solid white', padding: '2px' }} /></a>
          <a href='https://www.instagram.com/abhijain.5/'><InstagramIcon style={{ color: "#e95950", border: color ? '1px solid #1a202ccc' : '1px solid white', padding: '2px' }} /></a>
          <a href='https://www.linkedin.com/in/abhi-jain-1b42421ba/'><LinkedInIcon style={{ color: "#0077b5", border: color ? '1px solid #1a202ccc' : '1px solid white', padding: '2px' }} /></a>
          <a href='https://github.com/abhijain2003'><GitHubIcon style={{ color: color ?"#171515" : 'white', border: color ? '1px solid #1a202ccc' : '1px solid white', padding: '2px' }} /></a>
          <a className="mailLink" href="mailto:abhijain5403@gmail.com"><EmailIcon style={{ color: "#FBBC05", border: color ? '1px solid #1a202ccc' : '1px solid white', padding: '2px' }} /></a>
        </div>
      </div>
    </div>
  )
}

export default About;