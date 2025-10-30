import React, { useState } from "react";

// Conteúdo da seção
const heroContent = {
    title: "Desenvolvedor Full-Stack Jr.",
    subtitle: "tecnologia e comunicação estratégica transformando desafios em soluções web que entregam impacto real",
    body: "Sou um Desenvolvedor Full-Stack com mais de quatro anos de experiência em vendas, onde desenvolvi fortes habilidades de comunicação, negociação e resolução de problemas. Agora, aplico esse mesmo foco e motivação à minha carreira em tecnologia, com experiência prática em desenvolvimento de aplicativos web e mobile. Tenho um sólido conhecimento de todo o ciclo de vida do desenvolvimento de software e trabalho com tecnologias como PHP, C#, .NET, JavaScript, React Native e SQL. Também tenho familiaridade com metodologias ágeis (Scrum), arquitetura MVC e controle de versão com Git.",
    buttonText: "Saiba mais"
};

const HeroSection = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageSrc, setImageSrc] = useState("/images/profile-photo.jpg");
    const [debugInfo, setDebugInfo] = useState({ attempts: 0, errors: [] });

    // Função melhorada para carregar a imagem de perfil no hero
    const tryImagePaths = () => {
        const paths = [
            "/images/profile-photo.jpg",
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face",
            "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face",
            "https://picsum.photos/500/500?random=1",
            "https://picsum.photos/500/500?random=2",
            "https://picsum.photos/500/500?random=3"
        ];
        
        let currentIndex = 0;
        
        const tryNextPath = () => {
            if (currentIndex < paths.length - 1) {
                currentIndex++;
                const nextPath = paths[currentIndex];
                // console.log(`🔄 Tentativa ${currentIndex + 1}/${paths.length}: ${nextPath}`);
                setImageSrc(nextPath);
                setDebugInfo(prev => ({ 
                    ...prev, 
                    attempts: currentIndex + 1
                }));
            } else {
                // console.warn(`⚠️ Todas as ${paths.length} tentativas falharam. Usando placeholder profissional.`);
                setDebugInfo(prev => ({ 
                    ...prev, 
                    errors: [...prev.errors, 'Todos os caminhos falharam']
                }));
            }
        };
        
        return tryNextPath;
    };

    // Usar useEffect para debugging melhor
    // useEffect(() => {
    //     console.log('🚀 HeroSection montado - iniciando carregamento de imagem');
    //     console.log(`📁 Caminho inicial: ${imageSrc}`);
    // }, []);

    return (
        <section className="min-h-screen relative overflow-hidden font-sans flex items-center justify-center bg-dark-bg text-dark-text">
            {/* Background com gradiente sempre visível */}
            <div 
                className="absolute inset-0"
                style={{
                    background: `linear-gradient(135deg, #2B2A35 0%, #1a1a1a 50%, #2B2A35 100%)`,
                }}
            ></div>
            
            {/* Background Image Overlay - se carregar */}
            <div 
                className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: `url('/images/herosection-bg.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            ></div>
            
            {/* Container principal centralizado */}
            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
                
                {/* Título principal */}
                <div className="mb-8 sm:mb-12">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-dark-text mb-6">
                        {heroContent.title}
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-2xl text-primary-light leading-relaxed font-medium max-w-3xl mx-auto">
                        {heroContent.subtitle}
                    </p>
                </div>

                {/* Foto de perfil com hover effect */}
                <div className="mb-8 sm:mb-12 flex justify-center">
                    <div 
                        className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl cursor-pointer transform transition-all duration-500 hover:scale-105"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {/* Placeholder compacto para dar espaço ao texto no hover */}
                        <div className={`absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center transition-opacity duration-300 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}>
                            <div className="text-center text-white">
                                {/* Avatar menor para economizar espaço */}
                                <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 bg-gradient-to-br from-primary/30 to-primary-dark/30 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-primary/40 shadow-2xl backdrop-blur-sm">
                                    <svg className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                                    </svg>
                                </div>
                                
                                {/* Info compacta */}
                                <div className="space-y-1">
                                    <h4 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                                        Heitor Oliveiro
                                    </h4>
                                    <p className="text-xs sm:text-sm lg:text-base text-primary-light font-medium">
                                        Desenvolvedor FullStack Jr.
                                    </p>
                                    
                                    {/* Indicador sutil menor */}
                                    <div className="flex justify-center pt-2">
                                        <div className="w-6 h-0.5 bg-primary/60 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        {/* Imagem de perfil - multiple fallbacks */}
                        <img 
                            src={imageSrc}
                            alt="Heitor Oliveiro - Desenvolvedor Full-Stack"
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onError={(e) => {
                                console.log(`Falha ao carregar: ${e.target.src}`);
                                const tryNext = tryImagePaths();
                                tryNext();
                                // Se todas falharam, mantém placeholder
                                setImageLoaded(false);
                            }}
                            onLoad={(e) => {
                                // console.log(`✅ Imagem carregada: ${e.target.src}`);
                                setImageLoaded(true);
                            }}
                        />
                        
                        {/* Overlay que escurece MUITO no hover para melhor contraste */}
                        <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/60 transition-all duration-500 ${isHovered ? 'opacity-90' : 'opacity-0'}`}></div>
                        
                        {/* Texto completo que aparece no hover */}
                        <div className={`absolute inset-0 flex flex-col justify-center items-center p-4 sm:p-6 lg:p-8 text-white transform transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
                            <div className="space-y-6 text-center max-w-full h-full flex flex-col justify-center">
                                
                                {/* Texto principal longo */}
                                <div className="flex-1 flex items-center justify-center">
                                    <p className="text-xs sm:text-sm lg:text-base text-white leading-relaxed font-light max-w-md lg:max-w-lg text-justify px-2 font-sans">
                                        {heroContent.body}
                                    </p>
                                </div>
                                
                                {/* Tags de tecnologias na parte inferior */}
                                <div className="flex flex-wrap justify-center gap-2 pt-2">
                                    {['PHP','JavaScript', 'React'].map((tech, index) => (
                                        <span 
                                            key={tech}
                                            className={`bg-primary/40 backdrop-blur-sm text-primary-light px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium border border-primary/50 transition-all duration-300 ${isHovered ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}
                                            style={{ transitionDelay: `${index * 100}ms` }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Border decorativa */}
                        <div className={`absolute inset-0 border-3 rounded-3xl pointer-events-none transition-all duration-500 ${isHovered ? 'border-primary/60' : 'border-primary/20'}`}></div>
                    </div>
                </div>
            </div>
            

        </section>
    );
};

export default HeroSection;