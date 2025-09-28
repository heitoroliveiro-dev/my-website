import React from 'react';

const Stack = () => {
    // Dados das tecnologias na ordem: php, codeigniter, javascript, react, tailwindcss, mysql, github, docker
    const technologies = [
        {
            name: 'PHP',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
            color: '#777BB4',
            description: 'Backend Development'
        },
        {
            name: 'CodeIgniter',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg',
            color: '#EF4223',
            description: 'PHP Framework'
        },
        {
            name: 'JavaScript',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
            color: '#F7DF1E',
            description: 'Frontend & Backend'
        },
        {
            name: 'React',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
            color: '#61DAFB',
            description: 'Frontend Library'
        },
        {
            name: 'TailwindCSS',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
            color: '#06B6D4',
            description: 'Utility-First CSS'
        },
        {
            name: 'MySQL',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
            color: '#4479A1',
            description: 'Database Management'
        },
        {
            name: 'GitHub',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg',
            color: '#181717',
            description: 'Version Control'
        },
        {
            name: 'Docker',
            icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
            color: '#2496ED',
            description: 'Containerization'
        }
    ];

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
                        Tecnologias, Frameworks & Ferramentas
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
                </div>

                {/* Grid de tecnologias - 8 cards organizados */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4 lg:gap-6">
                    {technologies.map((tech, index) => (
                        <div
                            key={tech.name}
                            className="group relative bg-gray-800/60 backdrop-blur-sm rounded-xl p-4 sm:p-6 text-center hover:bg-gray-700/60 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20 border border-gray-600/50 hover:border-primary/50 h-32 sm:h-36 lg:h-40 flex flex-col justify-center items-center"
                            style={{
                                animationDelay: `${index * 100}ms`
                            }}
                        >
                            {/* Ícone da tecnologia - mais redondo */}
                            <div className="mb-3 flex justify-center">
                                <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20 group-hover:border-primary/30">
                                    <img
                                        src={tech.icon}
                                        alt={`${tech.name} icon`}
                                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 object-contain transition-all duration-300 group-hover:scale-110"
                                        onError={(e) => {
                                            // Fallback para ícone SVG simples se a imagem não carregar
                                            e.target.style.display = 'none';
                                            const fallback = e.target.nextElementSibling;
                                            fallback.style.display = 'flex';
                                        }}
                                    />
                                    {/* Fallback icon */}
                                    <div 
                                        className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 rounded-full items-center justify-center text-white font-bold text-xs sm:text-sm"
                                        style={{ backgroundColor: tech.color, display: 'none' }}
                                    >
                                        {tech.name.substring(0, 2).toUpperCase()}
                                    </div>
                                </div>
                            </div>

                            {/* Nome da tecnologia */}
                            <h3 className="text-xs sm:text-sm lg:text-base font-semibold text-dark-text mb-1 group-hover:text-primary-light transition-colors duration-300 text-center">
                                {tech.name}
                            </h3>

                            {/* Descrição mais compacta */}
                            <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-center leading-tight">
                                {tech.description}
                            </p>

                            {/* Glow effect no hover */}
                            <div 
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-15 transition-opacity duration-300 pointer-events-none"
                                style={{
                                    background: `radial-gradient(circle at center, ${tech.color}, transparent 70%)`
                                }}
                            ></div>

                            {/* Border highlight sutil */}
                            <div 
                                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2"
                                style={{
                                    borderColor: `${tech.color}40`
                                }}
                            ></div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Stack;
