import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Search, ChevronDown, Menu, X,
    Facebook, Twitter, Instagram, Youtube
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants, Easing } from 'framer-motion';
import CircleSider from './Circlesider';
import { useLanguage } from "../Context/AuthContext";
import type { SchemeDetail, SubDetail, SubMenuItem, SchemeItem } from '../types';

interface MenuItem {
    name: string;
    link?: string;
    submenus?: SchemeItem[];
}

interface LanguageContext {
    isMarathi: boolean;
    toggleLanguage: () => void;
}

// Schemes array definition
const schemes: SchemeItem[] = [
    { name: "अमृत – MCED लघुउद्योजक, स्वयंरोजगार प्रोत्साहन व प्रशिक्षण योजना", link: `/scheme/1` },
    { name: "अमृत – विविध स्पर्धा परीक्षा पायाभूत प्रशिक्षण कार्यक्रम", link: `/scheme/2` },
    { name: "AIIMS, IIT, IIM, IIIT संस्थांमध्ये प्रवेश घेतलेल्या विद्यार्थ्यांना अर्थसहाय्य योजना", link: `/scheme/3` },
    {
        title: "UPSC स्पर्धा परीक्षा",
        submenu: [
            {
                title: "अभियांत्रिकी सेवा",
                subdetails: [
                    { name: "पूर्व परीक्षा उत्तीर्ण", link: `/scheme/4` },
                    { name: "मुख्य परीक्षा उत्तीर्ण", link: `/scheme/5` }
                ]
            },
            {
                title: "नागरी सेवा",
                subdetails: [
                    { name: "पूर्व परीक्षा उत्तीर्ण", link: `/scheme/6` },
                    { name: "मुख्य परीक्षा उत्तीर्ण", link: `/scheme/7` }
                ]
            },
            {
                title: "वन सेवा",
                subdetails: [
                    { name: "पूर्व परीक्षा उत्तीर्ण", link: `/scheme/8` },
                    { name: "मुख्य परीक्षा उत्तीर्ण", link: `/scheme/9` }
                ]
            }
        ]
    },
    { name: "शासकीय संगणक टंकलेखन व लघुलेखन परीक्षा (GCC-TBC)", link: `/scheme/10` },
    { name: "कृषि उद्योग प्रशिक्षण योजना", link: `/scheme/11` },
    { name: "स्वरोजगार प्रोत्साहन व प्रशिक्षण योजना", link: `/scheme/12` },
    { name: "ड्रोन पायलट प्रशिक्षण योजना", link: `/scheme/13` },
    { name: "अमृत - CIPET कौशल्य विकास प्रशिक्षण", link: `/scheme/14` },
    { name: "अमृत - NIELIT कौशल्य विकास प्रशिक्षण", link: `/scheme/15` },
    { name: "आर्थिक साक्षरता प्रशिक्षण योजना", link: `/scheme/16` },
    { name: "अमृत सुवर्णिम प्रशिक्षण योजना", link: `/scheme/17` },
    { name: "अमृत आयात-निर्यात प्रशिक्षण योजना", link: `/scheme/18` },
    { name: "अमृत - बेकरी प्रशिक्षण योजना", link: `/scheme/19` },
    { name: "तांत्रिक रोजगार प्रशिक्षण (IGTR) योजना", link: `/scheme/20` },
    { name: "माहिती तंत्रज्ञान आणि इलेक्ट्रॉनिक्स तसेच उच्च कार्यक्षमता संगणक प्रशिक्षण (C-DAC)", link: `/scheme/21` },
    { name: "अमृत - BHAU Incubation Program", link: `/scheme/22` },
    { name: "अमृत - MSSU Incubation Program", link: `/scheme/23` },
    { name: "अमृत - कलश (MKCL) अमृत सॉफ्ट स्किल व संगणक कौशल्य विकास योजना", link: `/scheme/24` },
    { name: "वैक्तिक कर्ज व्याज परतावा योजना", link: `/scheme/25` },
    { name: "अमृत - स्वयं शिक्षण प्रोत्साहन योजना", link: `/scheme/26` },
];

export default function AmrutHeader() {
    const fontSize = 16;
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<{
        menuIndex: number | null;
        submenuIndex: number | null;
        nestedIndex: number | null;
    }>({
        menuIndex: null,
        submenuIndex: null,
        nestedIndex: null
    });
    const { isMarathi, toggleLanguage } = useLanguage() as LanguageContext;

    // Type guards
    function isSubMenuItem(item: SchemeItem): item is SubMenuItem {
        return typeof item === 'object' && 'title' in item && 'submenu' in item;
    }

    function isSubDetail(item: SchemeDetail | SubDetail): item is SubDetail {
        return typeof item === 'object' && 'title' in item && 'subdetails' in item;
    }

    const handleMobileMenuClick = (menuIndex: number, hasSubmenus: boolean) => {
        if (hasSubmenus) {
            setActiveSubmenu(prev => ({
                menuIndex: prev.menuIndex === menuIndex ? null : menuIndex,
                submenuIndex: null,
                nestedIndex: null
            }));
        } else {
            setMobileMenuOpen(false);
        }
    };

    const handleSubmenuClick = (menuIndex: number, submenuIndex: number, hasNestedMenu: boolean) => {
        if (hasNestedMenu) {
            setActiveSubmenu(prev => ({
                menuIndex,
                submenuIndex: prev.submenuIndex === submenuIndex ? null : submenuIndex,
                nestedIndex: null
            }));
        }
    };

    const handleNestedMenuClick = (menuIndex: number, submenuIndex: number, nestedIndex: number) => {
        setActiveSubmenu(prev => ({
            menuIndex,
            submenuIndex,
            nestedIndex: prev.nestedIndex === nestedIndex ? null : nestedIndex
        }));
    };

    const renderMobileMenu = () => (
        <div className="lg:hidden">
            <div className="flex items-center justify-between px-4 py-3">
                <span className="text-white font-medium">{isMarathi ? 'मेनू' : 'Menu'}</span>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-white p-2 hover:bg-orange-700 rounded-md transition-colors"
                    aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="bg-orange-600 overflow-hidden"
                    >
                        <div className="divide-y divide-orange-500">
                            {menuStructure.map((menu, idx) => (
                                <div key={idx} className="relative">
                                    <div className="flex items-center">
                                        {menu.link && !menu.link.startsWith('http') ? (
                                            <Link
                                                to={menu.link}
                                                className="flex-1 px-4 py-3 text-white hover:bg-orange-700 transition-colors"
                                                onClick={() => !menu.submenus && setMobileMenuOpen(false)}
                                            >
                                                {menu.name}
                                            </Link>
                                        ) : (
                                            <a
                                                href={menu.link || '#'}
                                                className="flex-1 px-4 py-3 text-white hover:bg-orange-700 transition-colors"
                                                target={menu.link?.startsWith('http') ? "_blank" : undefined}
                                                rel={menu.link?.startsWith('http') ? "noopener noreferrer" : undefined}
                                            >
                                                {menu.name}
                                            </a>
                                        )}
                                        {menu.submenus && (
                                            <button
                                                onClick={() => handleMobileMenuClick(idx, true)}
                                                className="px-4 py-3 text-white hover:bg-orange-700 transition-colors"
                                            >
                                                <motion.span
                                                    animate={{ rotate: activeSubmenu.menuIndex === idx ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronDown size={20} />
                                                </motion.span>
                                            </button>
                                        )}
                                    </div>

                                    {/* First level submenu */}
                                    <AnimatePresence>
                                        {menu.submenus && activeSubmenu.menuIndex === idx && (
                                            <motion.div
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="bg-orange-700"
                                            >
                                                {menu.submenus.map((submenu, subIdx) => {
                                                    const isNested = isSubMenuItem(submenu);
                                                    const displayText = isNested ? submenu.title : submenu.name;
                                                    const link = !isNested ? submenu.link : undefined;

                                                    return (
                                                        <div key={subIdx} className="relative">
                                                            <div className="flex items-center">
                                                                {link ? (
                                                                    <Link
                                                                        to={link}
                                                                        className="flex-1 px-6 py-3 text-white hover:bg-orange-800 transition-colors text-sm"
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                    >
                                                                        {displayText}
                                                                    </Link>
                                                                ) : (
                                                                    <button
                                                                        className="flex-1 px-6 py-3 text-white hover:bg-orange-800 transition-colors text-sm text-left"
                                                                        onClick={() => handleSubmenuClick(idx, subIdx, isNested)}
                                                                    >
                                                                        {displayText}
                                                                    </button>
                                                                )}
                                                                {isNested && (
                                                                    <button
                                                                        onClick={() => handleSubmenuClick(idx, subIdx, true)}
                                                                        className="px-4 py-3 text-white hover:bg-orange-800 transition-colors"
                                                                    >
                                                                        <motion.span
                                                                            animate={{
                                                                                rotate: activeSubmenu.submenuIndex === subIdx ? 180 : 0
                                                                            }}
                                                                            transition={{ duration: 0.2 }}
                                                                        >
                                                                            <ChevronDown size={16} />
                                                                        </motion.span>
                                                                    </button>
                                                                )}
                                                            </div>

                                                            {/* Second level submenu */}
                                                            <AnimatePresence>
                                                                {isNested && activeSubmenu.submenuIndex === subIdx && (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, height: 0 }}
                                                                        animate={{ opacity: 1, height: 'auto' }}
                                                                        exit={{ opacity: 0, height: 0 }}
                                                                        transition={{ duration: 0.2 }}
                                                                        className="bg-orange-800"
                                                                    >
                                                                        {submenu.submenu.map((nestedItem, nestedIdx) => {
                                                                            const hasSubdetails = isSubDetail(nestedItem);
                                                                            const nestedText = hasSubdetails ? nestedItem.title : nestedItem.name;
                                                                            const nestedLink = !hasSubdetails ? nestedItem.link : undefined;

                                                                            return (
                                                                                <div key={nestedIdx} className="relative">
                                                                                    <div className="flex items-center">
                                                                                        {nestedLink ? (
                                                                                            <Link
                                                                                                to={nestedLink}
                                                                                                className="flex-1 px-8 py-3 text-white hover:bg-orange-900 transition-colors text-sm"
                                                                                                onClick={() => setMobileMenuOpen(false)}
                                                                                            >
                                                                                                {nestedText}
                                                                                            </Link>
                                                                                        ) : (
                                                                                            <button
                                                                                                className="flex-1 px-8 py-3 text-white hover:bg-orange-900 transition-colors text-sm text-left"
                                                                                                onClick={() => handleNestedMenuClick(idx, subIdx, nestedIdx)}
                                                                                            >
                                                                                                {nestedText}
                                                                                            </button>
                                                                                        )}
                                                                                        {hasSubdetails && (
                                                                                            <button
                                                                                                onClick={() => handleNestedMenuClick(idx, subIdx, nestedIdx)}
                                                                                                className="px-4 py-3 text-white hover:bg-orange-900 transition-colors"
                                                                                            >
                                                                                                <motion.span
                                                                                                    animate={{
                                                                                                        rotate: activeSubmenu.nestedIndex === nestedIdx ? 180 : 0
                                                                                                    }}
                                                                                                    transition={{ duration: 0.2 }}
                                                                                                >
                                                                                                    <ChevronDown size={16} />
                                                                                                </motion.span>
                                                                                            </button>
                                                                                        )}
                                                                                    </div>

                                                                                    {/* Third level submenu */}
                                                                                    <AnimatePresence>
                                                                                        {hasSubdetails && activeSubmenu.nestedIndex === nestedIdx && (
                                                                                            <motion.div
                                                                                                initial={{ opacity: 0, height: 0 }}
                                                                                                animate={{ opacity: 1, height: 'auto' }}
                                                                                                exit={{ opacity: 0, height: 0 }}
                                                                                                transition={{ duration: 0.2 }}
                                                                                                className="bg-orange-900"
                                                                                            >
                                                                                                {nestedItem.subdetails.map((detail, detailIdx) => (
                                                                                                    <Link
                                                                                                        key={detailIdx}
                                                                                                        to={detail.link}
                                                                                                        className="block px-10 py-3 text-white hover:bg-orange-950 transition-colors text-sm"
                                                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                                                    >
                                                                                                        {detail.name}
                                                                                                    </Link>
                                                                                                ))}
                                                                                            </motion.div>
                                                                                        )}
                                                                                    </AnimatePresence>
                                                                                </div>
                                                                            );
                                                                        })}
                                                                    </motion.div>
                                                                )}
                                                            </AnimatePresence>
                                                        </div>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}

                            {/* Mobile Social Media and Login Links */}
                            <div className="px-4 py-4 space-y-4">
                                <div className="flex justify-center gap-6">
                                    <a href="https://www.facebook.com/MahaAmrutOfficial" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="https://x.com/Maha_Amrut" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                                        <Twitter size={20} />
                                    </a>
                                    <a href="https://www.instagram.com/mahaamrut_official" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                                        <Instagram size={20} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/academy-of-maharashtra-research-upliftment-and-training-718924289" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-200 transition-colors">
                                        <Youtube size={20} />
                                    </a>
                                </div>
                                <div className="flex justify-center gap-4">
                                    <Link to="https://app.mahaamrut.org.in/amrut/choose-login" className="px-4 py-2 bg-white text-orange-600 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium">
                                        लॉगिन
                                    </Link>
                                    <Link to="https://app.mahaamrut.org.in/amrut/choose-login" className="px-4 py-2 bg-white text-orange-600 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium">
                                        नोंदणी
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    // Main menu structure
    const menuStructure: MenuItem[] = [
        { name: isMarathi ? 'मुख्य पृष्ठ' : 'Home', link: '/' },
        { name: isMarathi ? 'परिपत्रक' : 'Circulars', link: '/Circulars' },
        { name: isMarathi ? 'गॅलरी' : 'Gallery', link: '/Gallery' },
        { name: isMarathi ? 'योजना' : 'Schemes', submenus: schemes },
        { name: isMarathi ? 'वार्ता' : 'News', link: '/News' },
        { name: isMarathi ? 'अमृत दुर्गोत्सव २०२५' : 'Amrut Festival 2025', link: 'https://www.durgotsav.com/' },
        { name: isMarathi ? 'अमृत महाराष्ट्र' : 'Amrut Maharashtra', link: 'https://amrutmaharashtra.org/' },
        { name: isMarathi ? 'अमृत पथ' : 'Amrut Path', link: 'https://amrutpeth.com/' },
        { name: isMarathi ? 'लाभार्थी' : 'Beneficiaries', link: '/Beneficiaries' },
        { name: isMarathi ? 'ई-बुक' : 'E-Book', link: '/Book' },
        { name: isMarathi ? 'संपर्क साधा' : 'Contact Us', link: '/Contact' }
    ];

    // Framer motion variants for dropdowns
    const dropdownVariants: Variants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.25,
                ease: [0.4, 0, 0.2, 1] as Easing
            }
        },
        exit: {
            opacity: 0,
            y: -8,
            transition: {
                duration: 0.2,
                ease: [0.4, 0, 1, 1] as Easing
            }
        }
    };

    return (
        <div className="bg-white text-gray-900 transition-colors duration-300" style={{ fontSize: `${fontSize}px` }}>
            {/* --- Sub Header --- */}
            <div className="bg-orange-50 py-2 sm:py-3 px-2 sm:px-4 border-b border-orange-200">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-3">
                    {/* Logo & Title */}
                    <div className="flex flex-col sm:flex-row items-center  sm:gap-3 md:gap-4 w-full lg:flex-1 lg:min-w-0">
                        <h1 className="text-sm sm:text-xl md:text-1xl lg:text-3xl font-bold text-orange-400 uppercase whitespace-nowrap flex-shrink-0 font-playfair">
                            AMRUT
                        </h1>
                        <div className="text-center sm:text-center w-full min-w-0 ">
                            <h2 className="text-sm sm:text-base lg:text-[13px] font-bold text-orange-600 leading-tight break-words font-martel" style={{ fontFamily: 'poppins, serif' }}>
                                महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत)
                            </h2>
                            <h3 className="text-xs sm:text-sm md:text-base lg:text-[13px] text-black mt-1 leading-tight break-words font-playfair font-[600]">
                                ACADEMY OF MAHARASHTRA RESEARCH, UPLIFTMENT AND TRAINING (AMRUT)
                            </h3>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-wrap justify-center lg:justify-end">
                        <button className="p-2"><Search size={16} /></button>
                        <button
                            onClick={toggleLanguage}
                            className="px-2 md:px-3 py-1 rounded bg-orange-600 text-white text-xs md:text-sm font-medium hover:bg-orange-700 transition-colors"
                        >
                            {isMarathi ? 'English' : 'मराठी'}
                        </button>
                    </div>
                    <CircleSider />
                </div>
            </div>

            {/* --- Main Navigation --- */}
            <nav className="bg-orange-600 shadow-lg" style={{ fontFamily: 'poppins, serif' }}>
                <div className="max-w-8xl mx-auto flex justify-between items-center">
                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex flex-wrap font-martel">
                        {menuStructure.map((menu, idx) => (
                            <li
                                key={idx}
                                className="relative group/menu text-[14px]"
                                onMouseEnter={() => setOpenMenu(idx)}
                                onMouseLeave={() => {
                                    setOpenMenu(null);
                                }}
                            >
                                {menu.link && !menu.link.startsWith('http') ? (
                                    <Link
                                        to={menu.link}
                                        className="flex items-center gap-1 px-4 py-3 text-white hover:bg-orange-700 transition-colors font-martel"
                                    >
                                        {menu.name}
                                        {menu.submenus && (
                                            <motion.span
                                                animate={{ rotate: openMenu === idx ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDown size={16} />
                                            </motion.span>
                                        )}
                                    </Link>
                                ) : (
                                    <a
                                        href={menu.link}
                                        className="flex items-center gap-1 px-4 py-3 text-white hover:bg-orange-700 transition-colors font-martel"
                                        target={menu.link?.startsWith('http') ? "_blank" : undefined}
                                        rel={menu.link?.startsWith('http') ? "noopener noreferrer" : undefined}
                                    >
                                        {menu.name}
                                        {menu.submenus && (
                                            <motion.span
                                                animate={{ rotate: openMenu === idx ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <ChevronDown size={16} />
                                            </motion.span>
                                        )}
                                    </a>
                                )}
                                {/* Dropdown wrapper with position relative */}
                                <div className="absolute left-0 top-full">
                                    {/* Dropdown (1st Level) */}
                                    <AnimatePresence>
                                        {menu.submenus && openMenu === idx && (
                                            <motion.div
                                                variants={dropdownVariants}
                                                initial="hidden"
                                                animate="visible"
                                                exit="exit"
                                                className="fixed w-96 bg-gray-800 shadow-xl z-50 max-h-[200px] overflow-y-auto overflow-x-hidden rounded-sm "
                                                style={{
                                                    top: 'var(--menu-top)',
                                                    left: 'var(--menu-left)'
                                                }}
                                            >
                                                {menu.submenus.map((submenu, subIdx) => {
                                                    const isNested = isSubMenuItem(submenu);
                                                    const displayText = isNested ? submenu.title : submenu.name;
                                                    const link = !isNested ? submenu.link : undefined;

                                                    return (
                                                        <div
                                                            key={subIdx}
                                                            className="relative group/submenu"
                                                            onMouseEnter={(e) => {
                                                                const rect = e.currentTarget.getBoundingClientRect();
                                                                e.currentTarget.style.setProperty('--submenu-top', `${rect.top}px`);
                                                                e.currentTarget.style.setProperty('--submenu-left', `${rect.right}px`);
                                                            }}
                                                        >
                                                            {link ? (
                                                                <Link
                                                                    to={link}
                                                                    className="block px-5 py-3 text-gray-100 font-martel hover:bg-gray-700 transition-colors flex justify-between items-center break-words whitespace-normal border-b border-gray-700"
                                                                >
                                                                    <span className="pr-2 text-[15px] font-medium">{displayText}</span>
                                                                    {isNested && submenu.submenu && (
                                                                        <ChevronDown size={16} className="transform -rotate-90 flex-shrink-0 opacity-75" />
                                                                    )}
                                                                </Link>
                                                            ) : (
                                                                <a
                                                                    href="#"
                                                                    className="block px-5 py-3 text-gray-100 font-martel hover:bg-gray-700 transition-colors flex justify-between items-center break-words whitespace-normal border-b border-gray-700"
                                                                >
                                                                    <span className="pr-2 text-[15px] font-medium">{displayText}</span>
                                                                    {isNested && submenu.submenu && (
                                                                        <ChevronDown size={16} className="transform -rotate-90 flex-shrink-0 opacity-75" />
                                                                    )}
                                                                </a>
                                                            )}

                                                            {/* Nested submenu */}
                                                            {isNested && submenu.submenu && (
                                                                <div
                                                                    className="fixed w-96 bg-gray-800 shadow-xl opacity-0 invisible group-hover/submenu:opacity-100 group-hover/submenu:visible transition-all duration-200 max-h-[200px] overflow-y-auto z-[51]"
                                                                    style={{
                                                                        top: 'var(--submenu-top)',
                                                                        left: 'var(--submenu-left)'
                                                                    }}
                                                                >
                                                                    {submenu.submenu.map((nestedItem, nestedIdx) => {
                                                                        const hasSubdetails = isSubDetail(nestedItem);
                                                                        const nestedLink = !hasSubdetails ? nestedItem.link : undefined;

                                                                        return (
                                                                            <div
                                                                                key={nestedIdx}
                                                                                className="relative group/nested"
                                                                                onMouseEnter={(e) => {
                                                                                    const rect = e.currentTarget.getBoundingClientRect();
                                                                                    e.currentTarget.style.setProperty('--nested-top', `${rect.top}px`);
                                                                                    e.currentTarget.style.setProperty('--nested-left', `${rect.right}px`);
                                                                                }}
                                                                            >
                                                                                {nestedLink ? (
                                                                                    <Link
                                                                                        to={nestedLink}
                                                                                        className="block px-5 py-3 font-martel text-gray-100 hover:bg-gray-700 transition-colors flex justify-between items-center break-words whitespace-normal border-b border-gray-700"
                                                                                    >
                                                                                        <span className="pr-2 text-[15px] font-medium">
                                                                                            {hasSubdetails ? nestedItem.title : nestedItem.name}
                                                                                        </span>
                                                                                        {hasSubdetails && (
                                                                                            <ChevronDown size={16} className="transform -rotate-90 flex-shrink-0 opacity-75" />
                                                                                        )}
                                                                                    </Link>
                                                                                ) : (
                                                                                    <a
                                                                                        href="#"
                                                                                        className="block px-5 py-3 font-martel text-gray-100 hover:bg-gray-700 transition-colors flex justify-between items-center break-words whitespace-normal border-b border-gray-700"
                                                                                    >
                                                                                        <span className="pr-2 text-[15px] font-medium">
                                                                                            {hasSubdetails ? nestedItem.title : nestedItem.name}
                                                                                        </span>
                                                                                        {hasSubdetails && (
                                                                                            <ChevronDown size={16} className="transform -rotate-90 flex-shrink-0 opacity-75" />
                                                                                        )}
                                                                                    </a>
                                                                                )}

                                                                                {/* Subdetails level */}
                                                                                {hasSubdetails && (
                                                                                    <div
                                                                                        className="fixed w-96 bg-gray-800 shadow-xl opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 max-h-[300px] overflow-y-auto z-[52]"
                                                                                        style={{
                                                                                            top: 'var(--nested-top)',
                                                                                            left: 'var(--nested-left)'
                                                                                        }}
                                                                                    >
                                                                                        {nestedItem.subdetails.map((detail, detailIdx) => (
                                                                                            <Link
                                                                                                key={detailIdx}
                                                                                                to={detail.link}
                                                                                                className="block px-5 py-3 text-gray-100 font-martel hover:bg-gray-700 transition-colors break-words whitespace-normal text-[15px] font-medium border-b border-gray-700"
                                                                                            >
                                                                                                {detail.name}
                                                                                            </Link>
                                                                                        ))}
                                                                                    </div>
                                                                                )}
                                                                            </div>
                                                                        );
                                                                    })}
                                                                </div>
                                                            )}
                                                        </div>
                                                    );
                                                })}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </li>
                        ))}
                    </ul>

                    {/* Social Media Icons and Login - Desktop */}
                    <div className="hidden lg:flex items-center gap-4 px-4">
                        <div className="flex gap-3">
                            <a href="https://www.facebook.com/MahaAmrutOfficial?mibextid=wwXIfr&rdid=Pnccc3lUt3iYNi9W&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1PJ7NuAgnQ%2F%3Fmibextid%3DwwXIfr#" target='blank' className="text-white hover:text-gray-200 transition-colors">
                                <Facebook size={18} />
                            </a>
                            <a target='blank' href="https://x.com/Maha_Amrut" className="text-white hover:text-gray-200 transition-colors">
                                <Twitter size={18} />
                            </a>
                            <a target='blank' href="https://www.instagram.com/mahaamrut_official/?igsh=MThmbWpnYW5qNGdmNw%3D%3D#" className="text-white hover:text-gray-200 transition-colors">
                                <Instagram size={18} />
                            </a>
                            <a target='blank' href="https://www.linkedin.com/in/academy-of-maharashtra-research-upliftment-and-training-718924289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="text-white hover:text-gray-200 transition-colors">
                                <Youtube size={18} />
                            </a>
                        </div>
                        <Link to="https://app.mahaamrut.org.in/amrut/choose-login" className="px-2 py-2 bg-white text-orange-600 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium">
                            लॉगिन
                        </Link>
                        <Link to="https://app.mahaamrut.org.in/amrut/choose-login" className="px-2 py-2 bg-white text-orange-600 rounded-md hover:bg-gray-100 transition-colors text-sm font-medium">
                            नोंदणी
                        </Link>
                    </div>
                </div>

                {/* --- Mobile Menu --- */}
                {renderMobileMenu()}
            </nav>
        </div>
    );
}