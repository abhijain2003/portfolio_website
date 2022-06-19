import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import disney from "../images/disney.png";
import tesla from "../images/tesla.png";
import LinkIcon from '@mui/icons-material/Link';
import web3 from "../images/web3.png";
import todo from "../images/todo.png";
import shopsy from "../images/shopsy.png";
import netflix from "../images/netflix.png";

function Project({ color }) {

  const project = [
    {
      img: todo,
      para: "Full stack todo webapp, create rooms for specific tasks, write tasks and be productive",
      repoLink: "https://github.com/abhijain2003/todo_frontend",
      webLink: "https://todo-bay-gamma.vercel.app/"
    },{
      img: web3,
      para: "This is the full stack blog website where I post blogs related to web3 and blockchains.",
      repoLink: "#",
      title: "full stack Blog Website",
      webLink: "http://www.web3talks.co"
    },
    {
      img: disney,
      para: "This is the frontend UI clone of disney website.",
      title: "Disney Clone",
      repoLink: "https://github.com/abhijain2003/disney-clone",
      webLink: "https://disneyclone-pi.vercel.app/",
    },
    {
      img: netflix,
      para: "This is the frontend UI clone of netflix website.",
      title: "Netflix Clone",
      repoLink: "https://github.com/abhijain2003/netflix-clone",
      webLink: "https://clone-netflix-orcin.vercel.app/"
    },
    {
      img: tesla,
      para: "This is the frontend UI clone of tesla website.",
      title: "Tesla Clone",
      repoLink: "https://github.com/abhijain2003/tesla-clone",
      webLink: "https://tesla-clone-ruby.vercel.app/"
    },
    {
      img: shopsy,
      para: "This is frontend UI clone of an ecommerce website to buy books online.",
      title: "Shopping Website",
      repoLink: "https://github.com/abhijain2003/booklet",
      webLink: "https://shopsy.vercel.app/"
    }
  ];

  return (
    <div className="sm:grid min-h-screen flex flex-col pb-10" style={{ backgroundColor: color ? "#E8F9FD" : 'rgba(26, 32, 44, 0.8)', gridTemplateColumns: '20% 60% 20%'}}>
      <div></div>
      <div className='flex flex-col'>
        <h1 style={{ fontSize: '22px' }} className='mt-4 mx-auto w-[90%] text-slate-400' >Welcome to my project library. Here, are top projects that I built on myself.</h1>
        <ul className='mt-4 w-[90%] mx-auto sm:w-full'>
          {project.map((web) => (
            <li className='mt-4'>
              <h1 className='mb-4 text-xl font-bold' style={{ color: color ? 'rgba(26, 32, 44, 0.8)' : 'white' }} >{web.title}</h1>
              <img alt='' src={web.img} className='w-[80%] rounded-[20px] mx-auto sm:w-full border-2 border-solid border-[#E8F9FD] hover:scale-105 ease-in duration-300 opacity-[60%] hover:opacity-[100%]' />
              <p style={{backgroundColor: color ? 'rgba(26, 32, 44, 0.8)' : "white", color: color ? 'white' : 'rgba(26, 32, 44, 0.8)'}} className='mt-4 w-[200px] p-2 rounded-xl relative bottom-[50px]'>{web.para}</p>
              <div><a href={web.webLink}><LinkIcon className='hover:scale-105' style={{ color: color ? "#171515" : 'white', border: color ? '1px solid #1a202ccc' : '1px solid white', padding: '2px' }} /></a> <a href={web.repoLink}> <GitHubIcon className='hover:scale-105' style={{ color: color ? "#171515" : 'white', border: color ? '1px solid #1a202ccc' : '1px solid white', padding: '2px' }} /></a></div>
            </li>
          ))}
        </ul>
      </div>
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

export default Project
