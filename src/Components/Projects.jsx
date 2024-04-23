import Project from "../data/Project"

const projects =() =>{
    return (
        <div  id ="Projects" className="p-20 flex flex-col items-center justify-center">
        <h1 className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800">PROJECTS</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-around gap-20">
          {Project.map((data) => (
            <>
              <div
                key={data.id}
                className="text-[15px]  flex items-center justify-center font-semibold  text-fuchsia-800 rounded-3xl  border-2 border-fuchsia-800 b-glow "
                style={{
                    width: "350px",
                    height: "350px",
                   
                  
                  }}
              >
                <div
                  className="card" 
                  
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  <div className="img d-flex justify-content-center align-content-center p-3">
                    <img
                      src={data.imageSrc}
                      className="card-img-top"
                      alt="..."
                      style={{
                        width: "250px",
                        height: "200px",
                        border: "2px solid  rgb(206, 71, 193)",
                        borderRadius: "10px"
                      
                      }}
                    />
                  </div>
                  <div className="card-body text-center">
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                <br/>
                    <a href={data.demo} className="neno-button shadow-xl hover:shadow-fuchsia-800/50 text-rgb(206, 71, 193) border-2
                     hover:bg-fuchsia-800  border-fuchsia-800 rounded-lg py-3 px-6 uppercase relative overflow-hidden " >
                      View Project
                    </a>
                
                  
                    
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    
    );
};
export default projects ;