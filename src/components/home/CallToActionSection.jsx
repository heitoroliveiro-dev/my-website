import React from 'react';

const CallToActionSection = () => {
    return (
        <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-100 via-gray-50 to-white relative overflow-hidden">
            {/* Background pattern sutil */}
            <div className="absolute inset-0">
                <div 
                    className="absolute inset-0 opacity-5"
                    style={{
                        background: `
                            radial-gradient(circle at 10% 20%, #8A4AF3 0%, transparent 20%),
                            radial-gradient(circle at 90% 80%, #6C3BE0 0%, transparent 25%),
                            radial-gradient(circle at 50% 50%, #B9B5E7 0%, transparent 15%)
                        `
                    }}
                ></div>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                {/* Container principal com layout em duas colunas */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    
                    {/* Lado esquerdo - Título principal */}
                    <div className="text-left lg:text-left">
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Vamos conversar
                        </h2>
                    </div>
                    
                    {/* Lado direito - Texto e botão */}
                    <div className="space-y-6 lg:space-y-8">
                        
                        {/* Texto descritivo */}
                        <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed font-medium text-left">
                            Se você busca um profissional capaz de simplificar processos e trabalhar 
                            em equipe para entregar resultados, estou pronto para o desafio.
                        </p>
                        
                        {/* Botão CTA */}
                        <div className="flex justify-center lg:justify-start">
                            <a 
                                href="https://wa.me/5531995214736/?text=Olá! Vi seu portfólio e gostaria de conversar sobre uma oportunidade"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center space-x-3 bg-gray-800 hover:bg-gray-900 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-800/20"
                            >
                                <span>Entrar em contato</span>
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                
                {/* Elementos decorativos */}
                <div className="mt-16 sm:mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8">
                    
                    {/* Card 1 */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Soluções Eficazes</h3>
                        <p className="text-gray-600 text-sm">Desenvolvimento focado em resultados práticos e mensuráveis</p>
                    </div>
                    
                    {/* Card 2 */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Trabalho em Equipe</h3>
                        <p className="text-gray-600 text-sm">Colaboração efetiva para alcançar objetivos comuns</p>
                    </div>
                    
                    {/* Card 3 */}
                    <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 hover:shadow-lg transition-all duration-300">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                            <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Resultados Rápidos</h3>
                        <p className="text-gray-600 text-sm">Entregas ágeis sem comprometer a qualidade</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;