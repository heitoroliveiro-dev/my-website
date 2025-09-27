import React from "react";
import {useLocation} from 'react-router-dom';

const Footer = () =>{
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    const footerBaseClasses = 'w-full';
    const homeThemeClasses = 'bg-dark-bg text-dark-text';
    const colabSuitThemeClasses = 'bg-light-bg text-light-text border-t border-gray-200';

    // Classes para textos secundários
    const secondaryTextClasses = isHomePage ? 'text-gray-400' : 'text-gray-600';

    // Classes para bordas
    const borderClasses = isHomePage ? 'border-gray-800' : 'border-gray-300';

    // Para hover nos links
    const linkHoverClasses = 'hover:text-primary transition-colors';

    return (
        <footer className={`${footerBaseClasses} ${isHomePage ? homeThemeClasses : colabSuitThemeClasses} font-sans`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Links Rápidos */}
                    <div className="text-center lg:text-left">
                        <h3 className="text-lg font-medium mb-4 sm:mb-6 uppercase tracking-wide font-sans">LINKS RÁPIDOS</h3>
                        <div className="space-y-2 sm:space-y-3">
                            <a
                                href="https://linkedin.com/in/heitoroliveiro"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block ${linkHoverClasses} font-sans`}
                            >
                                linkedin
                            </a>
                            <a
                                href="https://github.com/heitoroliveiro-dev"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`block ${linkHoverClasses} font-sans`}
                            >
                                github
                            </a>
                            <a
                                href="/colabsuit"
                                className={`block ${linkHoverClasses} font-sans`}
                            >
                                colabsuit
                            </a>
                        </div>
                    </div>

                    {/* Contato */}
                    <div className="text-center lg:text-left mt-8 lg:mt-0">
                        <h3 className="text-lg font-medium mb-4 sm:mb-6 uppercase tracking-wide font-sans">CONTATO</h3>
                        <div className="space-y-2 sm:space-y-3">
                            <p className="text-sm sm:text-base">
                                <span className="block font-sans">whatsapp: (31) 995214736</span>
                            </p>
                            <p className="text-sm sm:text-base">
                                <span className="block font-sans">E-mail: heitoroliveiro.dev@outlook.com</span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 sm:mt-10 lg:mt-12 pt-6 sm:pt-8 text-center">
                    <p className={`text-sm ${secondaryTextClasses} font-sans`}>
                        © 2025 por Heitor Oliveiro. Todos os direitos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;