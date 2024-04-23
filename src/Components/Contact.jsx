import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import {  FaEnvelope  } from "react-icons/fa";
const contact =() =>{
    return (
        <div   id ="Contact" className="p-4 lg:p-20  flex flex-col items-center justify-center ">
<h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800">Contact Me </h1>

<form action ="flex flex-col gap-2 lg:w-1/2">
    <div className=" lg:flex gap-6">
        <input className="w-full my-3 rounded-lg bg-slate-800 p-4  border-2 border-fuchsia-800  b-glow text-xl text-slate-500" placeholder ="Enter Your Name" type="text"/>
        <input className="w-full my-3 rounded-lg bg-slate-800 p-4  border-2 border-fuchsia-800 b-glow text-xl text-slate-500" placeholder ="Enter Your Email "type="text"/>
    </div>
    <textarea className="w-full my-3 rounded-lg bg-slate-800 p-4  border-2 border-fuchsia-800 b-glow text-xl text-slate-500"placeholder ="Write Your Message...." name="" id="" cols="30" rows="10"></textarea>
 <button className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-white border-2  bg-fuchsia-800  border-fuchsia-800 hover:bg-slate-900 rounded-lg w-full py-4 px-8 uppercase relative overflow-hidden b-glow text-xl text-bold" type="Submit"> Submit</button>
</form>
<h1 data-aos ="fade-right" className="text-[20px]    text-white">nehanelu26@gmail.com</h1>        
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
    );
};
export default contact ;