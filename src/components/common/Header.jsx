import { useLocation, Link } from "react-router-dom";
import logoColabSuit from '../../assets/img/logo-light.png'
import React, { useState } from "react";

function Header(){
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Tema base
    const headerBaseClasses = 'w-full h-16 px-4 sm:px-6 lg:px-8 flex items-center transition-colors duration-300';
    
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

    // Componente do Menu Hambúrguer
    const HamburgerButton = () => (
        <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`p-2 rounded-md ${isHomePage ? 'text-dark-text hover:text-primary' : 'text-light-text hover:text-primary'} transition-colors duration-200`}
            aria-label="Menu"
        >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                    // X icon quando menu está aberto
                    <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </>
                ) : (
                    // Hambúrguer quando menu está fechado
                    <>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </>
                )}
            </svg>
        </button>
    );

    // Menu Items para reutilizar
    const menuItems = [
        { to: '/', label: 'home' },
        // { to: '/colabsuit', label: 'colabsuit' } // Comentado durante desenvolvimento
    ];

    // Mobile Menu Dropdown
    const MobileMenuDropdown = () => (
        <div className={`absolute top-full left-0 right-0 ${isHomePage ? 'bg-dark-bg border-dark-subtitle' : 'bg-light-bg border-gray-200'} border-t shadow-lg md:hidden z-50`}>
            <div className="px-4 py-3 space-y-3">
                {menuItems.map((item) => (
                    <Link
                        key={item.to}
                        to={item.to}
                        className={`block py-2 px-3 rounded-md ${getLinkClasses(item.to)}`}
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {item.label}
                    </Link>
                ))}
            </div>
        </div>
    );

    return (
        <header className={`${headerBaseClasses} ${isHomePage ? homeThemeClasses : colabSuitThemeClasses} relative`}>
            {/* Desktop Layout */}
            <div className="hidden md:flex items-center justify-between w-full">
                {isHomePage ? (
                    // Home Desktop: menu items + nome centralizado + espaço vazio
                    <>
                        <div className="flex-1 min-w-[150px]">
                            <nav className="flex items-center space-x-6">
                                {menuItems.map((item) => (
                                    <Link key={item.to} to={item.to} className={getLinkClasses(item.to)}>
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <span className="text-white font-sans text-xl font-medium">
                                Heitor Oliveiro
                            </span>
                        </div>
                        <div className="flex-1 min-w-[150px]"></div>
                    </>
                ) : (
                    // ColabSuit Desktop: menu items + logo + botão login
                    <>
                        <div className="flex-1 min-w-[150px]">
                            <nav className="flex items-center space-x-6">
                                {menuItems.map((item) => (
                                    <Link key={item.to} to={item.to} className={getLinkClasses(item.to)}>
                                        {item.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <img 
                                src={logoColabSuit} 
                                alt="ColabSuit Logo" 
                                className="h-8 w-auto" 
                            />
                        </div>
                        <div className="flex-1 flex justify-end min-w-[150px]">
                            <button className="btn-primary h-10 px-4 text-sm flex items-center">
                                Login
                            </button>
                        </div>
                    </>
                )}
            </div>

            {/* Mobile Layout */}
            <div className="flex md:hidden items-center justify-between w-full">
                {isHomePage ? (
                    // Home Mobile: hambúrguer + nome à direita
                    <>
                        <HamburgerButton />
                        <span className="text-white font-sans text-lg font-medium">
                            Heitor Oliveiro
                        </span>
                    </>
                ) : (
                    // ColabSuit Mobile: hambúrguer + logo centralizado + botão login
                    <>
                        <HamburgerButton />
                        <div className="absolute left-1/2 transform -translate-x-1/2">
                            <img 
                                src={logoColabSuit} 
                                alt="ColabSuit Logo" 
                                className="h-7 w-auto" 
                            />
                        </div>
                        <button className="btn-primary h-8 px-3 text-xs flex items-center">
                            Login
                        </button>
                    </>
                )}
            </div>

            {/* Mobile Menu Dropdown */}
            {isMobileMenuOpen && <MobileMenuDropdown />}
        </header>
    );
}

export default Header;