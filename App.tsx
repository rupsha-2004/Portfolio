import React, { useEffect } from 'react';
import { Github, Linkedin, Mail, Code2, Globe, BookOpen } from 'lucide-react';

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80"
            alt="Background" 
            className="w-full h-full object-cover opacity-10 animate-fade-in"
          />
        </div>
        <div className="container mx-auto px-4 z-10">
          <div className="text-center space-y-6 animate-slide-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 animate-gradient">
              Rupsha Maity
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">Frontend Developer & Java Enthusiast</p>
            <div className="flex justify-center gap-4 animate-bounce-in">
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-all hover:scale-110">
                <Github size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-purple-400 transition-all hover:scale-110">
                <Linkedin size={24} />
              </a>
              <a href="mailto:contact@example.com" className="text-gray-300 hover:text-purple-400 transition-all hover:scale-110">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">
            <p>
              I'm a 20-year-old passionate developer with a strong foundation in both frontend and backend technologies.
              Currently focusing on creating beautiful and functional web experiences using modern technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-100">
              <SkillCard icon={<Code2 />} title="Frontend" skills={['HTML', 'CSS', 'JavaScript', 'React']} />
            </div>
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-200">
              <SkillCard icon={<Globe />} title="Backend" skills={['Java']} />
            </div>
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10 delay-300">
              <SkillCard icon={<BookOpen />} title="Learning" skills={['TypeScript', 'Node.js']} />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center animate-on-scroll opacity-0 transition-all duration-1000 translate-y-10">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-x-[-50px]">
              <ProjectCard 
                title="Project 1"
                description="A React-based web application"
                tags={['React', 'JavaScript', 'CSS']}
              />
            </div>
            <div className="animate-on-scroll opacity-0 transition-all duration-1000 translate-x-[50px]">
              <ProjectCard 
                title="Project 2"
                description="Java backend service"
                tags={['Java', 'Spring Boot']}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400 animate-fade-in">
          <p>© 2024 Rupsha Maity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, skills }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mb-4 mx-auto animate-bounce-slow">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-center mb-4">{title}</h3>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300 text-center">{skill}</li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ title, description, tags }) {
  return (
    <div className="p-6 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="px-3 py-1 bg-purple-500 bg-opacity-20 text-purple-300 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

export default App;