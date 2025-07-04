import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, Code, File, Building2, FolderGit2, Zap, User, ArrowRight } from 'lucide-react';
import cvRuta from '../../../public/CV-Aguilera-Braian-Alejandro.pdf'


const navLinks = [
    { id: 'hero', label: 'Inicio', href: '#hero', icon: <Code className="h-4 w-4" /> },
    { id: 'experience', label: 'Experiencia', href: '#experience', icon: <Building2 className="h-4 w-4" /> },
    { id: 'projects', label: 'Proyectos', href: '#projects', icon: <FolderGit2 className="h-4 w-4" /> },
    { id: 'skills', label: 'Habilidades', href: '#skills', icon: <Zap className="h-4 w-4" /> },
    { id: 'about', label: 'Sobre mí', href: '#about', icon: <User className="h-4 w-4" /> },
    { id: 'contact', label: 'Contacto', href: '#contact', icon: <Mail className="h-4 w-4" /> },
];

const socialLinks = [
    { id: 'github', icon: Github, href: 'https://github.com/braguilera', boxIcon: 'bx bxl-github' },
    { id: 'linkedin', icon: Linkedin, href: 'https://www.linkedin.com/in/braianalejandroaguilera1/', boxIcon: 'bx bxl-linkedin' },
    { id: 'mail', icon: Mail, href: 'mailto:braaguileraa@gmail.com', boxIcon: 'bx bx-envelope' },
];

const Nav = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [showLabels, setShowLabels] = useState(true);
    const navRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
                setShowLabels(false);
            } else {
                setIsScrolled(false);
                setShowLabels(true);
            }

            const sections = navLinks.map(link => document.getElementById(link.id));
            let currentSection = 'hero';

            sections.forEach(section => {
                if (section) {
                    const sectionTop = section.offsetTop - 100;
                    const sectionHeight = section.offsetHeight;
                    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                        currentSection = section.id;
                    }
                }
            });

            setActiveSection(currentSection);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavLinkClick = (href) => {
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const navVariants = {
        hidden: { y: -50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20
            }
        }
    };

    const menuItemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.05,
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        }),
        exit: { opacity: 0, y: -10 }
    };

    const scrolledMenuItemVariants = {
        hidden: { opacity: 0, scale: 1.2 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 24
            }
        },
        exit: { opacity: 0, scale: 1.2 }
    };

    return (
        <motion.nav
            ref={navRef}
            className={isScrolled
                ? 'fixed top-0 left-0 w-full z-50 transition-all duration-300'
                : 'fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-transparent'
            }
            initial="hidden"
            animate="visible"
            variants={navVariants}
        >
            <div className="container mx-auto px-4 py-3 flex items-center justify-between z-50">
                <motion.a
                    href="#hero"
                    className="group flex items-center gap-2"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavLinkClick('#hero');
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                >
                    <motion.div
                        className="h-9 w-9 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center shadow-sm"
                        whileHover={{ rotate: 5 }}
                    >
                        <Code className="h-5 w-5 text-purple-600" />
                    </motion.div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-slate-800">BAA</span>
                        <span className="text-xs text-purple-500">Portfolio</span>
                    </div>
                </motion.a>

                <div className={isScrolled ? "hidden md:flex items-center gap-1" : "hidden md:flex items-center gap-1 "}>
                    <div className={isScrolled ? "bg-white rounded-full p-1 flex items-center" : "bg-white rounded-full p-1 flex items-center"}>
                        <AnimatePresence>
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.id}
                                    href={link.href}
                                    className={
                                        activeSection === link.id
                                            ? "text-white bg-purple-600 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 shadow-sm flex items-center gap-2"
                                            : "text-slate-600 hover:text-purple-700 px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2"
                                    }
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleNavLinkClick(link.href);
                                    }}
                                    custom={i}
                                    variants={isScrolled ? scrolledMenuItemVariants : menuItemVariants}
                                    initial="hidden"
                                    animate="visible"
                                    exit="exit"
                                    whileHover={{ scale: isScrolled? 1.01 : 1.01 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <AnimatePresence>
                                        {showLabels ? (
                                            <>
                                                {link.icon}
                                                <span>{link.label}</span>
                                            </>
                                        ) : (
                                            <motion.span
                                                initial={{ scale: 1.2, opacity: 0 }}
                                                animate={{ scale: 1, opacity: 1 }}
                                                exit={{ scale: 1.2, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {link.icon}
                                            </motion.span>
                                        )}
                                    </AnimatePresence>
                                </motion.a>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                <div className="hidden md:flex items-center">
                    <a
                    href={cvRuta}
                    target="_blank"
                    rel="noopener noreferrer"
                    >
                    <motion.button
                        className="group flex w-fit cursor-pointer text-sm md:text-lg items-center space-x-2 rounded-full border border-purple-800/20 bg-purple-600 px-4 py-2 backdrop-blur-sm transition-all hover:bg-purple-700 text-white"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <File className="h-4 w-4" />
                        <span>Descargar CV</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </motion.button>
                    </a>
                </div>

                <motion.button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden h-9 w-9 rounded-full flex items-center justify-center bg-purple-50 border border-purple-100 text-purple-600 shadow-sm"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {isMobileMenuOpen ? (
                        <X className="h-5 w-5" />
                    ) : (
                        <Menu className="h-5 w-5" />
                    )}
                </motion.button>
            </div>

            <motion.div
                className="md:hidden fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 border-l border-purple-100"
                initial={{ x: '100%' }}
                animate={{ x: isMobileMenuOpen ? '0%' : '100%' }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30
                }}
            >
                <div className="p-6 flex flex-col justify-between h-full">
                    <div>
                        <div className="flex items-center justify-between mb-6">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-2"
                            >
                                <div className="h-8 w-8 rounded-lg bg-purple-50 border border-purple-100 flex items-center justify-center">
                                    <Code className="h-4 w-4 text-purple-600" />
                                </div>
                                <span className="font-bold text-slate-800">BAA</span>
                            </motion.div>

                            <motion.button
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-slate-500 hover:text-purple-700 h-8 w-8 rounded-full flex items-center justify-center hover:bg-purple-50"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <X className="h-5 w-5" />
                            </motion.button>
                        </div>

                        <motion.div
                            className="h-px w-full bg-purple-100 mb-6"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.3 }}
                        />

                        <div className="flex flex-col gap-1">
                            <AnimatePresence>
                                {navLinks.map((link, i) => (
                                    <motion.a
                                        key={link.id}
                                        href={link.href}
                                        className={
                                            activeSection === link.id
                                                ? "text-purple-800 bg-purple-50 px-4 py-2.5 rounded-lg font-medium border-l-4 border-purple-400 flex items-center gap-2"
                                                : "text-slate-600 hover:text-purple-700 px-4 py-2.5 rounded-lg font-medium hover:bg-purple-50 border-l-4 border-transparent flex items-center gap-2"
                                        }
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleNavLinkClick(link.href);
                                        }}
                                        custom={i}
                                        variants={menuItemVariants}
                                        initial="hidden"
                                        animate="visible"
                                        exit="exit"
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        {link.icon}
                                        {link.label}
                                    </motion.a>
                                ))}
                            </AnimatePresence>
                        </div>
                    </div>

                    <div>
                        <motion.div
                            className="h-px w-full bg-purple-100 mb-6"
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ delay: 0.4 }}
                        />

                        <motion.div
                            className="flex justify-center gap-4"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            {socialLinks.map((social, i) => (
                                <motion.a
                                    key={social.id}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-slate-500 hover:text-purple-700 h-10 w-10 rounded-full flex items-center justify-center bg-purple-50 hover:bg-purple-100 transition-colors duration-200"
                                    aria-label={social.id}
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    custom={i}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: { delay: 0.6 + i * 0.1 }
                                    }}
                                >
                                    <i className={`${social.boxIcon} text-xl`}></i>
                                </motion.a>
                            ))}
                        </motion.div>

                        <motion.div
                            className="text-center text-xs text-slate-400 mt-6"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            © 2025 BAA
                        </motion.div>
                    </div>
                </div>
            </motion.div>
        </motion.nav>
    );
};

export default Nav;
