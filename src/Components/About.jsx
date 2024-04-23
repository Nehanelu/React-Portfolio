
import img from '../assets/Nehaphoto.jpeg';
const about =() =>{
    return (
        <div  id = "About" className="lg:px-56 px-10 lg:py-0 py-20 text-center gap-5 lg-text start flex lg:flex-row flex-col-reverse justify-between lg:gap-28 items-center">
                 <img data-aos ="fade-down" src={img}width={290} height={290} className="rounded border-2 p-1 border-fuchsia-500 img_glow" alt=""/>
       
          <div  data-aos ="fade-right" className="h-full lg:py-40 flex flex-col justify-center lg:items-start items-center text-white">
            <h1 data-aos ="fade-left" className="text-[52px] font-semibold mb-8 leading-normal text-fuchsia-500 uppercase">About Me</h1>
            <p 
            style={{
              textAlign: "justify",
          }}
          
            >
    I'm Neha, a web developer and UI/UX designer with a knack for creating awesome online experiences. I graduated with a degree in Computer Science and Engineering, and I'm passionate about coding and design.

    I've worked on some cool projects, like designing websites and improving user interfaces. During my internship, I made a hotel management system super easy to navigate and pleasing to the eye.

    My projects, like Edu Learn and Music Store, show my skills in making websites that are not only functional but also fun to use. I'm a good communicator and always make sure to meet deadlines.

    With me on your team, you'll get someone who's enthusiastic, creative, and ready to take on any challenge!
</p>

<div className="flex mt-8 gap-2">
 <div className="flex items-center justify-center">
<div className="flex space-x-2">
<a class="neno-button shadow-xl
 hover:shadow-fuchsia-800/50 text-white border-2
  hover:bg-fuchsia-800  border-fuchsia-800 rounded-lg
   py-4 px-8 uppercase relative overflow-hidden
   " href="https://drive.google.com/file/d/1KuC7TFccNKZV-brz0KjHIaViWPsmYFgc/view">Resume</a>


</div> 
        </div>
      </div>
            </div>
    
              </div>
       
    );
};
export default about ;