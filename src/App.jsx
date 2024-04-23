import Nav from "./Components/Nav"; // Changed 'nav' to 'Nav' to match the imported component's name
import Banner from "./Components/Banner";
import About from "./Components/About";
import Serivces from "./Components/Serivces";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
function App() {
  return (
    <div className="bg-slate-900">
      <Nav /> {/* Changed 'nav' to 'Nav' to use the imported component */}
      
      <Banner/>
      <About/>
      <Serivces />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
