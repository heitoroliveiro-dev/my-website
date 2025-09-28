import React, { useState } from 'react';
import { projects } from '../../data/projectsData';
import AccordionItem from './AccordionItem';

function ProjectsSection() {
  // Estado para controlar qual projeto está aberto
  const [openId, setOpenId] = useState(null);

  // Função para alternar entre abrir/fechar projetos
  const handleToggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-dark-bg relative overflow-hidden">
      {/* Background com imagem de cubos futurísticos bem escura */}
      <div className="absolute inset-0">
        {/* Background futurístico com gradientes apenas */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              radial-gradient(circle at 20% 30%, #1e293b 0%, transparent 50%), 
              radial-gradient(circle at 80% 70%, #0f172a 0%, transparent 50%), 
              radial-gradient(circle at 40% 80%, #334155 0%, transparent 40%)
            `
          }}
        ></div>
        
        {/* Gradientes futurísticos sobrepostos para manter o tom escuro */}
        <div className="absolute inset-0 opacity-8">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 30%, #1e293b 0%, transparent 50%), radial-gradient(circle at 80% 70%, #0f172a 0%, transparent 50%), radial-gradient(circle at 40% 80%, #334155 0%, transparent 40%)`,
              backgroundSize: '600px 600px, 400px 400px, 800px 800px'
            }}
          ></div>
        </div>
        
        {/* Overlay final para garantir a cor de fundo */}
        <div className="absolute inset-0 bg-dark-bg/80"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Título da seção */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark-text mb-4">
            Projetos em Destaque
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </div>

        {/* Container do accordion */}
        <div className="bg-gray-800/40 backdrop-blur-sm rounded-2xl border border-gray-600/30 overflow-hidden shadow-2xl">
          {projects.map((project) => (
            <AccordionItem
              key={project.id}
              project={project}
              isOpen={openId === project.id}
              handleToggle={() => handleToggle(project.id)}
            />
          ))}
        </div>

        {/* Call to action */}

      </div>
    </section>
  );
}

export default ProjectsSection;