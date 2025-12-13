import React, { useState } from "react";
import { Download, Code, Award, Layers, ExternalLink } from "lucide-react";

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const projects = [
    {
      title: "Modular Architecture",
      description: "Sistema backend escalable diseñado con principios SOLID.",
      tags: ["Java", "Spring Boot", "Architecture"],
      image: "/images/modular-arch.png",
      link: "https://github.com/Elion-hub/Spring-Boot-Lab/tree/main/Tienda_libros",
    },
    {
      title: "Task Manager",
      description: "Aplicación de gestión de tareas con persistencia de datos.",
      tags: ["Java", "MVC", "Desktop"],
      image: "/images/task-manager.png",
      link: "https://github.com/Elion-hub/Spring-Boot-Lab/tree/main/GestorTareas",
    },
    {
      title: "DevFinder",
      description: "Buscador de perfiles de GitHub en tiempo real.",
      tags: ["React", "GitHub API", "Tailwind"],
      image: "/images/devfinder.png",
      link: "https://github.com/Elion-hub/React/tree/main/dev-finder",
    },
  ];

  const techStack = [
    {
      name: "Java",
      iconClass: "devicon-java-plain colored",
      category: "Backend",
    },
    {
      name: "Spring Boot",
      iconClass: "devicon-spring-original colored",
      category: "Backend",
    },
    {
      name: "MySQL",
      iconClass: "devicon-mysql-plain colored",
      category: "Database",
    },
    {
      name: "JavaScript",
      iconClass: "devicon-javascript-plain colored",
      category: "Frontend",
    },
    {
      name: "HTML5",
      iconClass: "devicon-html5-plain-wordmark colored",
      category: "Frontend",
    },
    {
      name: "CSS3",
      iconClass: "devicon-css3-plain-wordmark colored",
      category: "Frontend",
    },
    {
      name: "React",
      iconClass: "devicon-react-original colored",
      category: "Frontend",
    },
    {
      name: "Astro",
      iconClass: "devicon-astro-plain colored",
      category: "Frontend",
    },
    {
      name: "Tailwind",
      iconClass: "devicon-tailwindcss-original colored",
      category: "Frontend",
    },
    {
      name: "Docker",
      iconClass: "devicon-docker-plain colored",
      category: "DevOps",
    },
    { name: "Git", iconClass: "devicon-git-plain colored", category: "Tools" },
    {
      name: "Postman",
      iconClass: "devicon-postman-plain colored",
      category: "Tools",
    },
  ];

  const certificates = [
    {
      title: "Java: Records, Genéricos y Colecciones",
      issuer: "OpenWebinars",
      date: "Dic 2025",
      link: "/images/java.png",
    },
    {
      title: "Fundamentos de React",
      issuer: "OpenWebinars",
      date: "Nov 2025",
      link: "/images/react.png",
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "Oct 2025",
      link: "/images/diseno-web-responsivo.png",
    },
    {
      title: "Spring Boot & Microservicios",
      issuer: "En curso",
      date: "Próximamente",
      link: "#",
    },
  ];

  return (
    <section className="w-full text-white py-20 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            Sobre Mi
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed text-base md:text-lg">
            Hola, soy{" "}
            <span className="text-white font-semibold">Jose Maria Garcia</span>,
            apasionado por crear aplicaciones webs y soluciones digitales.
          </p>

          <div className="flex justify-center mb-10">
            <a
              href="/JoseMariaGarciaCV.pdf"
              download="JoseMariaGarciaCV.pdf"
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2.5 rounded-lg transition-all font-medium shadow-[0_0_15px_rgba(147,51,234,0.3)] hover:shadow-[0_0_25px_rgba(147,51,234,0.5)] cursor-pointer"
            >
              <Download size={18} /> Descargar CV
            </a>
          </div>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-2 p-1.5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-md">
            <button
              onClick={() => setActiveTab("projects")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 text-sm md:text-base font-medium ${
                activeTab === "projects"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Code size={18} /> Proyectos
            </button>
            <button
              onClick={() => setActiveTab("certificates")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 text-sm md:text-base font-medium ${
                activeTab === "certificates"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Award size={18} /> Certificados
            </button>
            <button
              onClick={() => setActiveTab("stack")}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl transition-all duration-300 text-sm md:text-base font-medium ${
                activeTab === "stack"
                  ? "bg-purple-600 text-white shadow-lg"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              }`}
            >
              <Layers size={18} /> Tech Stack
            </button>
          </div>
        </div>

        <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
          {activeTab === "projects" && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#0f0f0f] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10 flex flex-col h-full cursor-pointer"
                >
                  <div className="relative h-48 overflow-hidden bg-gray-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="relative w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-60"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/50 backdrop-blur-sm p-3 rounded-full border border-white/20">
                        <ExternalLink className="text-white" size={24} />
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-2.5 py-1 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/20 font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}

          {activeTab === "certificates" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-purple-500/30 transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>

                  <div
                    className={`mt-1 mr-4 p-3 rounded-full group-hover:scale-110 transition-transform ${
                      cert.link === "#"
                        ? "bg-gray-800 text-gray-400"
                        : "bg-purple-500/10 text-purple-400"
                    }`}
                  >
                    <Award size={24} />
                  </div>

                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {cert.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-3">
                      {cert.issuer} •{" "}
                      <span
                        className={
                          cert.link === "#"
                            ? "text-yellow-500 font-medium"
                            : "text-gray-500"
                        }
                      >
                        {cert.date}
                      </span>
                    </p>

                    {cert.link !== "#" ? (
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-white/70 hover:text-white transition-colors border-b border-transparent hover:border-purple-400"
                      >
                        Ver Credencial <ExternalLink size={12} />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/40 cursor-default">
                        Pendiente de finalizar
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "stack" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center p-6 bg-[#111] border border-white/5 rounded-2xl hover:border-purple-500/30 hover:bg-white/5 transition-all duration-300 group"
                >
                  <div className="p-3 bg-white/5 rounded-full mb-3 group-hover:scale-110 transition-transform">
                    <i className={`${tech.iconClass} text-4xl`}></i>
                  </div>

                  <h3 className="font-semibold text-white mb-1">{tech.name}</h3>
                  <span className="text-xs text-gray-500">{tech.category}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default AboutTabs;
