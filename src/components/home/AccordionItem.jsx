import React from 'react';

function AccordionItem({ project, isOpen, handleToggle }) {
  const { title, imageSrc, imageAlt, description, technologies, link } = project;

  return (
    <div className="border-b border-gray-600/50">
      {/* O cabeçalho clicável do accordion */}
      <button
        onClick={handleToggle}
        className="w-full flex justify-between items-center text-left py-6 px-4 hover:bg-gray-700/30 transition-colors duration-300 focus:outline-none focus:bg-gray-700/30"
      >
        <h3 className="text-xl md:text-2xl font-medium text-primary-light pr-4">
          {title}
        </h3>
        {/* Ícone de seta que gira quando o item está aberto */}
        <span className={`transform transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              d="M6 9L12 15L18 9" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
              className="text-primary"
            />
          </svg>
        </span>
      </button>

      {/* O conteúdo que expande com animação suave */}
      <div
        className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] pb-8' : 'grid-rows-[0fr]'
        }`}
      >
        <div className="min-h-0">
          {/* Layout interno com a imagem e a descrição */}
          <div className="px-4 flex flex-col gap-6 lg:gap-8">
            
            {/* Grid responsivo para imagem e conteúdo */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              
              {/* Imagem do projeto */}
              <div className="order-2 lg:order-1">
                <img 
                  src={imageSrc} 
                  alt={imageAlt} 
                  className="rounded-lg object-cover w-full h-48 sm:h-64 lg:h-72 shadow-lg border border-gray-600/30"
                  onError={(e) => {
                    // Fallback para imagem não encontrada
                    e.target.src = '/images/project-placeholder.jpg';
                    e.target.onerror = null;
                  }}
                />
              </div>
              
              {/* Conteúdo do projeto */}
              <div className="order-1 lg:order-2 space-y-4">
                
                {/* Descrição */}
                <p className="text-gray-300 text-base leading-relaxed font-light">
                  {description}
                </p>
                
                {/* Tecnologias utilizadas */}
                <div>
                  <h4 className="font-semibold text-primary-light mb-3">Tecnologias:</h4>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="bg-primary/20 text-primary-light text-sm font-medium py-1.5 px-3 rounded-full border border-primary/30 hover:bg-primary/30 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Link do projeto */}
                {link && (
                  <div className="pt-2">
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 btn-primary text-sm px-4 py-2"
                    >
                      Ver Projeto
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;