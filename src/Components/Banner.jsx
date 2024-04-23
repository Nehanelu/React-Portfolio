import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {  FaEnvelope  } from "react-icons/fa";
import img from '../assets/Nehaphoto.jpeg';
import Skills from "../data/Skills.json"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
const banner =() =>{
  useEffect (() =>{
    AOS.init({
      easing :'ease-out-quart',
      delay : 0,
      duration :750
    })
  },[])
    return (
        <div  className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
          <div  className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
            <h1 data-aos ="fade-right" className="text-[52px] font-semibold mb-1 leading -normal uppercase">welcome To <span className="text-fuchsia-500">My profile</span></h1>
            <h1 data-aos ="fade-right" className="text-[22px]  mb-8 leading -normal">My name is <span className="text-fuchsia-500">Neha</span></h1>
            <p data-aos ="fade-left">A dedicated Web Developer and Designer.</p>
            <br/>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-9">
          {Skills.map((data) => (
            <>
              <div
                className="text-[15px] flex items-center justify-center font-semibold  text-fuchsia-800  h-10 w-20 border-2 border-fuchsia-800 b-glow "
                key={data.id}
                
              >
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
            
<div className="flex mt-8 gap-2">
 <div className="flex items-center justify-center">
<div className="flex space-x-10">
  
<a href="https://github.com/Nehanelu" className="text-fuchsia-600  hover:text-fuchsia-500 rounded-full   glow " target="_blank" rel="noopener noreferrer">
<AiFillGithub className ="text-[28px] "

/></a>
<a href="https://www.linkedin.com/in/neha-841273258/" className="text-fuchsia-600  hover:text-fuchsia-500 rounded-full   glow " target="_blank" rel="noopener noreferrer">
<FaLinkedinIn className =" text-[28px] "/>
</a>
<a href="https://www.instagram.com/" className="text-fuchsia-600  hover:text-fuchsia-500 rounded-full   glow " target="_blank" rel="noopener noreferrer">
<FaInstagram className =" text-[28px] "/>
</a>
<a href="https://mail.google.com/mail" className="text-fuchsia-600  hover:text-fuchsia-500 rounded-full   glow " target="_blank" rel="noopener noreferrer">
<FaEnvelope className =" text-[28px] "/>
</a>




</div> 
        </div>
      </div>
            </div>
            <img  data-aos ="fade-up"  src={img}width={290} height={290} className="rounded-full border-2 p-1 border-fuchsia-500 img_glow" alt=""/>
              </div>
    );
};
export default banner ;