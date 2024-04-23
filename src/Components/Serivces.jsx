import Skills from "../data/Skills.json"
const serivces =() =>{
    return (
        <div   id ="services"className="p-20 flex flex-col items-center justify-center">
        <h1 data-aos ="fade-right" className="text-[52px] font-semibold mb-20 leading-normal uppercase text-fuchsia-800">SKILLS   </h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-around gap-20">
          {Skills.map((data) => (
            <>
              <div
                className="text-[26px] flex items-center justify-center font-semibold  text-fuchsia-800 rounded-3xl h-36 w-44 border-2 border-fuchsia-800 b-glow "
                key={data.id}
                data-aos="flip-left"
                
                data-aos-duration="1000"
              >
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    );
};
export default serivces ;