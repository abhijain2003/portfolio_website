import React from 'react';
import { NavLink } from "react-router-dom";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import abhi from "../images/abhi.png";

function Home({ color }) {


  return (
    <div className="sm:grid h-[100vh] flex flex-col" style={{ backgroundColor: color ? "#E8F9FD" : 'rgba(26, 32, 44, 0.8)', gridTemplateColumns: '25% 45% 30%' }}>
      <div></div>
      <div className='lg:grid lg:grid-cols-2 capitalized relative w-full relative top-[50px]' style={{ color: color ? '#1a202ccc' : 'white' }} >
        <div>
          <div className='w-[205px] mx-auto hover:scale-105 ease-in duration-300 h-[205px] rounded-[50%] flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500'>
            <img alt='' src={abhi} style={{ width: '200px', height: '200px', borderRadius: '50%' }} />
          </div>
        </div>
        <div>
          <div className='w-[80%] sm:w-full sm:mt-0 mx-auto mt-8'>
            <h1 className='text-3xl font-bold text-center mb-4' >Hello👋</h1>
            <h3 className='font-medium'>I am Abhi Jain. A Full Stack Web Developer and A Tech Blogger. I write blogs on web3 and blockchains.</h3>
            <h3 className='font-medium mt-4'>I code and build frontend UI, node server, Rest API, data for Database for websites.</h3>
            <h3 className='font-medium mt-4'>This is my personal website where I will be sharing my learnings and things I have done.</h3>
          </div>
          <div className='flex justify-evenly w-[200px] mt-4 mx-auto sm:mt-24'>
            <a href='https://twitter.com/abhiwd'><TwitterIcon style={{ color: "#00acee", border: color ? '1px solid #1a202ccc' : '1px solid white', padding: '2px' }} /></a>
            <a href='https://www.instagram.com/abhijain.5/'><InstagramIcon style={{ color: "#e95950", border: color ? '1px solid #1a202ccc' : '1px solid white', padding: '2px' }} /></a>
            <a href='https://www.linkedin.com/in/abhi-jain-1b42421ba/'><LinkedInIcon style={{ color: "#0077b5", border: color ? '1px solid #1a202ccc' : '1px solid white', padding: '2px' }} /></a>
            <a href='https://github.com/abhijain2003'><GitHubIcon style={{ color: color ? "#171515" : 'white', border: color ? '1px solid #1a202ccc' : '1px solid white', padding: '2px' }} /></a>
            <a className="mailLink" href="mailto:abhijain5403@gmail.com"><EmailIcon style={{ color: "#FBBC05", border: color ? '1px solid #1a202ccc' : '1px solid white', padding: '2px' }} /></a>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Home

