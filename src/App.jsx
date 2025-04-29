import {
  FaLinkedin,
  FaGithub,
  FaCode,
  FaFolderOpen,
  FaHtml5,
  FaCss3Alt,
  FaVuejs,
  FaNodeJs,
  FaChalkboardTeacher,
  FaGitAlt,
  FaUser,
  FaAws,
} from "react-icons/fa";
import {
  SiGmail,
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiTailwindcss,
  SiGithub,
  SiRedis,
  SiLaravel,
  SiPhp,
} from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import Projects from "./components/Projects";
import Education from "./components/Education";
import NavBar from './components/NavBar.jsx'
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <NavBar />    
      <div
        className="absolute inset-0 -z-10 h-screen w-full bg-gray-950
          bg-[radial-gradient(ellipse_80%_120%_at_50%_-10%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"
      ></div>
      <section className="@container mx-auto px-8 sm:max-w-2xl mt-16 md:mt-34 mb-8 md:max-w-4xl">

        <section className="mb-16">
          <div className="flex items-center space-y-4 mb-4 gap-4">
            <img
              src="/JuanT.jpeg"
              alt="Juan Tobon"
              className="rounded-full w-16 h-16"
            />
            <button className="flex items-center">
              <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
                <span
                  className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"
                ></span>
                <div className="inline-flex items-center justify-center w-full px-3 py-1 rounded-full cursor-pointer bg-gray-800 text-white/80 backdrop-blur-3xl whitespace-nowrap">
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/in/juan-carlos-tobon-montoya"
                  >
                    Contactarme para trabajar juntos
                  </a>
                  <slot />
                </div>
              </span>
            </button>
          </div>

          <div className="text-center md:text-left text-white">
            <h1 className="font-bold text-4xl mb-4">Hola, soy Juan Tobón</h1>
            <p className="text-xl text-gray-50 mb-4 w-full md:w-3/4">
              +1 año de experiencia. <strong className="text-2xl text-yellow-400">Desarrollador Full Stack</strong> con énfasis en el desarrollo de aplicaciones web de Villavicencio - Colombia en busca siempre de nuevos retos y oportunidades de crecimiento.
            </p>
            <div className="flex items-center justify-center @md:justify-start gap-4">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/juan-carlos-tobon-montoya"
                className="text-3xl hover:text-gray-200 hover:scale-110 duration-300 ease-in-out transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                target="_blank"
                href="https://github.com/JuanTobon7"
                className="text-3xl hover:text-gray-200 hover:scale-110 duration-300 ease-in-out transition-colors"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:jctobon11.2@gmail.com?subject=Propuesta de Trabajo."
                className="text-3xl hover:text-gray-200 hover:scale-110 duration-300 ease-in-out transition-colors"
                target="_blank"
              >
                <SiGmail />
              </a>
            </div>
          </div>
        </section>

        <section id='projects' className="mb-16">
          <div className="flex items-center text-3xl font-semibold mb-2 text-white gap-3">
            <FaFolderOpen />
            <h2>Mis Proyectos</h2>
          </div>
          <p className="text-white mb-6">
            Aquí puedes encontrar algunos de los proyectos en los que he trabajado, aplicando mis conocimientos en desarrollo Full Stack.
          </p>
          <Projects />
        </section>

        <section id='skills' className="mb-16">
          <div className="flex items-center text-3xl font-semibold mb-2 text-white gap-3">
            <FaCode />
            <h2>Skills</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-orange-500 text-white">
              <FaHtml5 /> HTML
            </span>
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-blue-500 text-white">
              <FaCss3Alt /> CSS
            </span>
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-yellow-500 text-white">
              <SiJavascript /> JavaScript
            </span>
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-green-400 text-white">
              <FaVuejs /> Vue
            </span>
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-green-500 text-white">
              <FaNodeJs /> Node.js
            </span>
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-gray-500 text-white">
              <SiExpress /> Express.js
            </span>
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-blue-700 text-white">
              <SiPostgresql /> PostgreSQL
            </span>
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-cyan-500 text-white">
              <SiTailwindcss /> Tailwind CSS
            </span>
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-orange-600 text-white">
              <FaGitAlt /> Git
            </span>
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-gray-700 text-white">
              <SiGithub /> GitHub
            </span>
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-red-600 text-white">
              <SiRedis /> Redis
            </span>
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-orange-400 text-white">
              <FaAws /> AWS
            </span>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center text-3xl font-semibold mb-2 text-white gap-3">
            <FaChalkboardTeacher />
            <h2>Aprendiendo</h2>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-purple-700 text-white">
              <SiPhp /> PHP
            </span>
            <span className="flex items-center gap-2 px-2 py-1 rounded-md bg-red-500 text-white">
              <SiLaravel /> Laravel
            </span>
          </div>
        </section>
        <section id='education' className="mb-16">
          <div className="flex items-center text-3xl font-semibold mb-2 text-white gap-3">
            <GiTeacher />
            <h2>Educacion Certificada</h2>
          </div>
          <Education />          
        </section>
        <section id='about' className="mb-16">

          <div className="flex items-center text-3xl font-semibold mb-2 text-white gap-3">
            <FaUser />
            <h2>Sobre Mi</h2>
          </div>
          <div  className="grid grid-cols-4 gap-8 text-white">
            <div className="col-span-4 md:col-span-3 space-y-3 font-mono text-pretty text-left">
              <p>
                Soy Juan Carlos Tobón Montoya, desarrollador Full Stack con experiencia en Vue.js, Node.js, Express.js y PostgreSQL. Me apasiona crear soluciones escalables y eficientes.
              </p>
              <p>
                <strong className="text-yellow-300">Lideré el desarrollo de Viddefe</strong>, aplicando JWT, OAuth 2.0, Redis, desplegada en S3 y EC2. Domino metodologías ágiles y optimización de backend.
              </p>
              <p>
                Tengo sólidos conocimientos en estructuras de datos y POO, adquiridos en la universidad. Actualmente, sigo perfeccionando mis habilidades con PHP y Laravel.
              </p>
            </div>
            <div className="flex justify-center items-center col-span-1 w-64 h-64">
              <div className="rotate-4 border border-gray-500 p-2 rounded-md flex items-center justify-center">
                <img src="/JuanT.jpeg" className="rounded-md" />
              </div>
            </div>
          </div>
        </section>
        <Footer/>
      </section>
    </>
  );
}

export default App;
