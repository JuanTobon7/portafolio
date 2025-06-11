import Footer from "./components/Footer.jsx";
import MachineTextGSAP from "./animation/MachineTextGSAP.jsx";
import { MasterTimelineProvider } from "./animation/TimeLineGSAP.jsx";
import Experience from "./components/Experience.jsx";
import CarouselGSAP from "./animation/CarouselGSAP.jsx";
import ArrowDown from "./animation/ArrowDown.jsx";
import Projects from "./components/Projects.jsx";
import { FaFolderOpen } from "react-icons/fa";
import NavBar from "./components/NavBar.jsx"
// Registrar el plugin de texto
function App() {
  return (
    <>
    <div
        className="absolute inset-0 -z-10 h-screen w-full bg-white dark:bg-gray-950
        bg-[radial-gradient(ellipse_80%_110%_at_50%_-10%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
        ></div>
    <NavBar/>
    <MasterTimelineProvider>
      <section className="container mx-auto px-8 sm:max-w-2xl md:max-w-7xl">
        <main className="h-screen flex flex-col items-center justify-center gap-10">
          <MachineTextGSAP text="Desarrollador Web Full Stack" color="text-gray-700 dark:text-gray-300" speed={0.03}/>
          <MachineTextGSAP text="Juan Carlos Tobón Montoya" speed={0.02} size="medium" color="text-yellow-500"/>
        </main>
      </section>
      <section id="projects" className="container mx-auto px-8 sm:max-w-2xl md:max-w-7xl py-10 mb-14">
        <Experience/>
      </section>
      <section id="skills" className="container mx-auto px-8 sm:max-w-2xl md:max-w-7xl py-10 mb-14">
        <h2 className="text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Skills</h2>
        <CarouselGSAP/>
      </section>
       <section id='projects' className="mb-14 container mx-auto px-8 sm:max-w-2xl md:max-w-7xl py-10">
          <div className="flex items-center text-3xl font-semibold mb-2 text-gray-700 dark:text-gray-300 gap-3">
            <FaFolderOpen />
            <h2>Mis Proyectos</h2>
          </div>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Aquí puedes encontrar algunos de los proyectos en los que he trabajado, aplicando mis conocimientos en desarrollo Full Stack.
          </p>
          <Projects />
        </section>
    </MasterTimelineProvider>
    <ArrowDown />
    <section className="container mx-auto px-8 sm:max-w-2xl md:max-w-7xl py-10 mb-14">
      <Footer />
    </section>
    </>
  );
}

export default App;
