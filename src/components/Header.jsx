import { useLocation, Link } from "react-router-dom";
import logoColabSuit from '../assets/img/logo-light.png'
import React from "react";

function Header(){
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    // Tema base
    const headerBaseClasses = 'w-full h-16 px-35 flex items-center transition-colors duration-300';
    
    // Tema home
    const homeThemeClasses = 'bg-dark-bg text-dark-text';
    
    // Tema colab
    const colabSuitThemeClasses = 'bg-light-bg text-light-text border-b border-gray-100'; 

    // O link ativo é um pouco mais escuro para o tema escuro e Primary para o claro.
    const getLinkClasses = (path) => {
        const base = 'text-base font-medium hover:text-primary transition duration-200';
        
        if (isHomePage) {
        // Estilo para links na Home (fundo escuro)
        return `${base} ${location.pathname === path ? 'text-primary' : 'text-dark-text'}`;
        } else {
        // Estilo para links em ColabSuit (fundo claro)
        return `${base} ${location.pathname === path ? 'text-primary font-semibold' : 'text-light-text'}`;
        }
    };

    const menuItems = (
        <nav className="flex items-center space-x-6">
        <Link to="/" className={getLinkClasses('/')}>
            home
        </Link>
        
        <Link to="/colabsuit" className={getLinkClasses('/colabsuit')}>
            colabsuit
        </Link>
        </nav>
    );


    return (
        <header className={`${headerBaseClasses} ${isHomePage ? homeThemeClasses : colabSuitThemeClasses}`}>
            {
                isHomePage ? (
                    // Se estiver na home
                    <div className="flex items-center justify-between w-full">
                        {/* Itens de menu à esquerda */}
                        <div className="flex-1 min-w-[150px]">
                            {menuItems}
                        </div>

                        {/* Nome centralizado */}
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <span className="text-white font-sans text-xl font-medium">
                                Heitor Oliveiro
                            </span>
                        </div>
                        
                        {/* Espaço vazio à direita para balanceamento */}
                        <div className="flex-1 min-w-[150px]">
                        </div>
                    </div>
                ) : ( 
                    // Se não estiver na home
                    <div className="flex items-center justify-between w-full">
                        {/* Ve itens de menu */}
                        <div className="flex-1 min-w-[150px]">
                            {menuItems}
                        </div>

                        {/* Logo */}
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <img 
                                src={logoColabSuit} 
                                alt="ColabSuit Logo" 
                                className="h-8 w-auto" 
                            />
                        </div>
                        
                        {/* Botão de login */}
                        <div className="flex-1 flex justify-end min-w-[150px]">
                            <button className="btn-primary py-2 px-4 text-sm">
                                Login
                            </button>
                        </div>
                    </div>
                )
            }
        </header>
    );
}

export default Header;