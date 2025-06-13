import { ParallaxProvider, ParallaxBanner, ParallaxBannerLayer } from "react-scroll-parallax";
import About from "./sections/About";
import Projects from "./sections/Projects";

function App() {
  return (
    <ParallaxProvider>
      <div>
        <div id="stars"></div>
        <div id="stars2"></div>
        <section className="h-screen w-fit flex flex-col justify-center text-white px-2 lg:px-52">
          <header className="absolute top-0 left-0 w-full flex items-center py-12 px-24 justify-end">
            <nav className="flex space-x-16 text-2xl">
              <a href="#about" className="group">
                About
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
              </a>
              <a href="#projects" className="group">
                Projects
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
              </a>
              <a href="#contact" className="group">
                Contact
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
              </a>
              <a href="#resume" className="group">
                Resume
                <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-white"></span>
              </a>
            </nav>
          </header>
          <div className="flex gap-8 items-center">
            <div className="w-52">
              <ParallaxBanner className="border-white border-2 w-52 h-52">
                <ParallaxBannerLayer
                  speed={-5}
                  image="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg"
                  className="w-52"
                />
              </ParallaxBanner>
            </div>
            <h1 className="text-7xl">
              Sebastien <br /> <span className="text-9xl">Kayrouz</span>
            </h1>
          </div>
          <div className="mt-8 border-t-2 border-white pt-8">
            <div className="flex justify-center">
              <a href="https://carleton.ca" target="_blank" rel="noopener noreferrer">
                <img src="logo-carleton.png" alt="Carleton University Logo" className="h-12 border-r pr-8 pl-8" />
              </a>
              <a href="https://cuonorbit.ca" target="_blank" rel="noopener noreferrer">
                <img src="logo-cuonorbit.png" alt="Carleton On Orbit Logo" className="h-12 border-r pr-8 pl-8" />
              </a>
              <a href="https://cuonorbit.ca" target="_blank" rel="noopener noreferrer">
                <img src="logo-cuonorbit.png" alt="Carleton On Orbit Logo" className="h-12 pr-8 pl-8" />
              </a>
            </div>
          </div>
        </section>
        <About />
        <Projects />
      </div>
    </ParallaxProvider>
  );
}

export default App;
