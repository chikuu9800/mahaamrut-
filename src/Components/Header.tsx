import { useEffect, useState } from 'react';
import {
    Search, Sun, Moon, Plus, Minus, RotateCcw,
    Facebook, Twitter, Instagram, Youtube, ChevronDown, Menu, X
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants, Easing } from 'framer-motion';
import CircleSider from './Circlesider';
import { useLanguage } from "../Context/AuthContext.tsx";

interface SubDetail {
    title: string;
    subdetails: string[];
}

interface SubMenuItem {
    title: string;
    submenu: (string | SubDetail)[];
}

type SchemeItem = string | SubMenuItem;

interface MenuItem {
    name: string;
    link?: string;
    submenus?: SchemeItem[];
}

export default function AmrutHeader() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState(16);
    const [openMenu, setOpenMenu] = useState<number | null>(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileNestedSubmenu, setMobileNestedSubmenu] = useState<{ menuIdx: number | null, subIdx: number | null }>({ menuIdx: null, subIdx: null });
    const [mobileFinalSubmenu, setMobileFinalSubmenu] = useState<{ menuIdx: number | null, subIdx: number | null, nestedIdx: number | null }>({ menuIdx: null, subIdx: null, nestedIdx: null });
    const { isMarathi, toggleLanguage } = useLanguage();
    const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
    const increaseFontSize = () => setFontSize(prev => Math.min(prev + 2, 24));
    const decreaseFontSize = () => setFontSize(prev => Math.max(prev - 2, 12));
    const resetFontSize = () => setFontSize(16);
   


    // Type guards
    function isSubMenuItem(item: SchemeItem): item is SubMenuItem {
        return typeof item === 'object' && 'title' in item && 'submenu' in item;
    }

    function isSubDetail(item: string | SubDetail): item is SubDetail {
        return typeof item === 'object' && 'title' in item && 'subdetails' in item;
    }

    // Menu structure
    const menuStructure: MenuItem[] = [
        { name: isMarathi ? 'मुख्य पृष्ठ' : 'Home', link: '#' },
        { name: isMarathi ? 'परिपत्रक' : 'Circulars', link: '#' },
        { name: isMarathi ? 'गॅलरी' : 'Gallery', link: '#' },
        {
            name: isMarathi ? 'योजना' : 'Schemes',
            submenus: [
                "अमृत – MCED लघुउद्योजक, स्वयंरोजगार प्रोत्साहन व प्रशिक्षण योजना",
                "अमृत – विविध स्पर्धा परीक्षा पायाभूत प्रशिक्षण कार्यक्रम",
                "AIIMS, IIT, IIM, IIIT संस्थांमध्ये प्रवेश घेतलेल्या विद्यार्थ्यांना अर्थसहाय्य योजना",
                {
                    title: "UPSC स्पर्धा परीक्षा",
                    submenu: [
                        {
                            title: "अभियांत्रिकी सेवा",
                            subdetails: ["पूर्व परीक्षा उत्तीर्ण", "मुख्य परीक्षा उत्तीर्ण"]
                        },
                        {
                            title: "नागरी सेवा",
                            subdetails: ["पूर्व परीक्षा उत्तीर्ण", "मुख्य परीक्षा उत्तीर्ण"]
                        },
                        {
                            title: "वन सेवा",
                            subdetails: ["पूर्व परीक्षा उत्तीर्ण", "मुख्य परीक्षा उत्तीर्ण"]
                        }
                    ]
                },
                {
                    title: "MPSC च्या मुख्य परीक्षा",
                    submenu: [
                        "अन्न व औषध प्रशासकीय सेवा मुख्य परीक्षा",
                        "दिवाणी न्यायाधीश कनिष्ठ स्तर व न्याय दंडाधिकारी",
                        "निरीक्षक वैधमापन शास्त्र मुख्य परीक्षा",
                        "महाराष्ट्र अराजपत्रित गट-ब",
                        "महाराष्ट्र कृषी सेवा मुख्य परीक्षा",
                        "महाराष्ट्र तांत्रिक अभियंता सेवा मुख्य परीक्षा",
                        "महाराष्ट्र राज्यपत्रित नागरी सेवा संयुक्त पूर्व परीक्षा",
                        "महाराष्ट्र वन सेवा मुख्य परीक्षा",
                        "महाराष्ट्र विद्युत अभियांत्रिकी सेवा मुख्य परीक्षा",
                        "महाराष्ट्र विद्युत व यांत्रिकी अभियांत्रिकी सेवा मुख्य परीक्षा",
                        "महाराष्ट्र स्थापत्य अभियांत्रिकी सेवा मुख्य परीक्षा",
                        "राज्य सेवा मुख्य परीक्षा",
                    ],
                },
                "शासकीय संगणक टंकलेखन व लघुलेखन परीक्षा (GCC-TBC)",
                "कृषि उद्योग प्रशिक्षण योजना",
                "स्वरोजगार प्रोत्साहन व प्रशिक्षण योजना",
                "ड्रोन पायलट प्रशिक्षण योजना",
                "अमृत - CIPET कौशल्य विकास प्रशिक्षण",
                "अमृत - NIELIT कौशल्य विकास प्रशिक्षण",
                "आर्थिक साक्षरता प्रशिक्षण योजना",
                "अमृत सुवर्णिम प्रशिक्षण योजना",
                "अमृत आयात-निर्यात प्रशिक्षण योजना",
                "अमृत - बेकरी प्रशिक्षण योजना",
                "तांत्रिक रोजगार प्रशिक्षण (IGTR) योजना",
                "माहिती तंत्रज्ञान आणि इलेक्ट्रॉनिक्स तसेच उच्च कार्यक्षमता संगणक प्रशिक्षण (C-DAC)",
                "अमृत - BHAU Incubation Program",
                "अमृत - MSSU Incubation Program",
                "अमृत - कलश (MKCL) अमृत सॉफ्ट स्किल व संगणक कौशल्य विकास योजना",
                "वैक्तिक कर्ज व्याज परतावा योजना",
                "अमृत - स्वयं शिक्षण प्रोत्साहन योजना",
            ]
        },
        { name: isMarathi ? 'वार्ता' : 'News', link: '#' },
        { name: isMarathi ? 'अमृत दूरोत्सव २०२५' : 'Amrut Festival 2025', link: '#' },
        { name: isMarathi ? 'अमृत महाराष्ट्र' : 'Amrut Maharashtra', link: '#' },
        { name: isMarathi ? 'अमृत पथ' : 'Amrut Path', link: '#' },
        { name: isMarathi ? 'लाभार्थी' : 'Beneficiaries', link: '#' },
        { name: isMarathi ? 'ई-बुक' : 'E-Book', link: '#' },
        { name: isMarathi ? 'संपर्क साधा' : 'Contact Us', link: '#' }
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
        <div
            className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'} transition-colors duration-300 shadow-md fixed top-0 left-0 w-full z-50`}
            style={{ fontSize: `${fontSize}px` }}
        >
            {/* --- Sub Header --- */}
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-orange-50'} py-2 sm:py-3 px-2 sm:px-4 border-b ${isDarkMode ? 'border-gray-700' : 'border-orange-200'}`}>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-2 sm:gap-3">
                    {/* Logo & Title */}
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 md:gap-4 w-full lg:flex-1 lg:min-w-0">
                        <h1 className="text-sm sm:text-xl md:text-1xl lg:text-2xl font-bold text-orange-400 uppercase whitespace-nowrap flex-shrink-0">
                            AMRUT
                        </h1>
                        <div className="text-center sm:text-center w-full min-w-0 py-1 sm:py-2">
                            <h2 className="text-sm sm:text-base lg:text-[11px] font-bold text-orange-600 leading-tight break-words">
                                महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत)
                            </h2>
                            <h3 className={`text-xs sm:text-sm md:text-base lg:text-[11px] font-semibold ${isDarkMode ? 'text-gray-200' : 'text-black'} mt-1 leading-tight break-words`}>
                                ACADEMY OF MAHARASHTRA RESEARCH, UPLIFTMENT AND TRAINING (AMRUT)
                            </h3>
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="flex items-center gap-1 sm:gap-2 md:gap-3 flex-wrap justify-center lg:justify-end">
                        {/* Socials */}
                        <div className="hidden lg:flex gap-2">
                            <Facebook className="text-blue-600" size={18} />
                            <Twitter className="text-blue-400" size={18} />
                            <Instagram className="text-pink-600" size={18} />
                            <Youtube className="text-red-600" size={18} />
                        </div>

                        {/* Font size + dark mode + lang */}
                        <div className="hidden md:flex gap-1">
                            <button onClick={decreaseFontSize}><Minus size={16} /></button>
                            <button onClick={resetFontSize}><RotateCcw size={16} /></button>
                            <button onClick={increaseFontSize}><Plus size={16} /></button>
                        </div>

                        <button onClick={toggleDarkMode}>{isDarkMode ? <Sun size={16} /> : <Moon size={16} />}</button>
                        <button className="p-2"><Search size={16} /></button>

                        <button
                            onClick={toggleLanguage}
                            className="px-2 md:px-3 py-1 rounded bg-orange-600 text-white text-xs md:text-sm font-medium hover:bg-orange-700 transition-colors"
                        >
                            {isMarathi ? 'English' : 'मराठी'}
                        </button>

                        {/* <button className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded bg-orange-600 text-white text-xs md:text-sm font-medium hover:bg-orange-700">
                            <User size={14} />
                            <span>{translations.login}</span>
                        </button> */}

                    </div>
                    <CircleSider />
                </div>
            </div>

            {/* --- Main Navigation --- */}
            <nav className={`${isDarkMode ? 'bg-gray-800' : 'bg-orange-600'} shadow-lg`}>
                <div className="max-w-7xl mx-auto">
                    {/* Desktop Menu */}
                    <ul className="hidden lg:flex flex-wrap">
                        {menuStructure.map((menu, idx) => (
                            <li
                                key={idx}
                                className="relative group/menu"
                                onMouseEnter={() => setOpenMenu(idx)}
                                onMouseLeave={() => {
                                    setOpenMenu(null);
                                }}
                            >
                                <button
                                    className="flex items-center gap-1 px-4 py-3 text-white hover:bg-orange-700 transition-colors"
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
                                </button>

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
                                                className="fixed w-96 bg-gray-800 shadow-xl z-50 max-h-[200px] overflow-y-auto overflow-x-hidden rounded-sm"
                                                style={{
                                                    top: 'var(--menu-top)',
                                                    left: 'var(--menu-left)'
                                                }}
                                            >
                                                {menu.submenus.map((submenu, subIdx) => {
                                                    const isNested = isSubMenuItem(submenu);
                                                    const displayText = isNested ? submenu.title : submenu;

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
                                                            <a
                                                                href="#"
                                                                className="block px-5 py-3 text-gray-100 hover:bg-gray-700 transition-colors flex justify-between items-center break-words whitespace-normal border-b border-gray-700"
                                                            >
                                                                <span className="pr-2 text-[15px] font-medium">{displayText}</span>
                                                                {isNested && submenu.submenu && (
                                                                    <ChevronDown size={16} className="transform -rotate-90 flex-shrink-0 opacity-75" />
                                                                )}
                                                            </a>

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
                                                                                <a
                                                                                    href="#"
                                                                                    className="block px-5 py-3 text-gray-100 hover:bg-gray-700 transition-colors flex justify-between items-center break-words whitespace-normal border-b border-gray-700"
                                                                                >
                                                                                    <span className="pr-2 text-[15px] font-medium">{hasSubdetails ? nestedItem.title : nestedItem}</span>
                                                                                    {hasSubdetails && (
                                                                                        <ChevronDown size={16} className="transform -rotate-90 flex-shrink-0 opacity-75" />
                                                                                    )}
                                                                                </a>

                                                                                {/* Subdetails level */}
                                                                                {hasSubdetails && (
                                                                                    <div
                                                                                        className="fixed w-96 bg-gray-800 shadow-xl opacity-0 invisible group-hover/nested:opacity-100 group-hover/nested:visible transition-all duration-200 max-h-[200px] overflow-y-auto z-[52]"
                                                                                        style={{
                                                                                            top: 'var(--nested-top)',
                                                                                            left: 'var(--nested-left)'
                                                                                        }}
                                                                                    >
                                                                                        {nestedItem.subdetails.map((detail, detailIdx) => (
                                                                                            <a
                                                                                                key={detailIdx}
                                                                                                href="#"
                                                                                                className="block px-5 py-3 text-gray-100 hover:bg-gray-700 transition-colors break-words whitespace-normal text-[15px] font-medium border-b border-gray-700"
                                                                                            >
                                                                                                {detail}
                                                                                            </a>
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

                    {/* --- Mobile Menu --- */}
                    <div className="lg:hidden flex items-center justify-between px-4 py-3">
                        <span className="text-white font-medium">{isMarathi ? 'मेनू' : 'Menu'}</span>
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    <AnimatePresence>
                        {mobileMenuOpen && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className={`${isDarkMode ? 'bg-gray-700' : 'bg-orange-700'} overflow-hidden`}
                            >
                                {menuStructure.map((menu, idx) => (
                                    <div key={idx}>
                                        <div className="flex items-center justify-between">
                                            <a
                                                href={menu.link || '#'}
                                                className="flex-1 px-4 py-3 text-white border-b border-orange-600"
                                                onClick={(e) => {
                                                    if (menu.submenus) {
                                                        e.preventDefault();
                                                        setMobileNestedSubmenu(prev => ({
                                                            menuIdx: prev.menuIdx === idx ? null : idx,
                                                            subIdx: null
                                                        }));
                                                    }
                                                }}
                                            >
                                                {menu.name}
                                            </a>
                                            {menu.submenus && (
                                                <motion.button
                                                    onClick={() => setMobileNestedSubmenu(prev => ({
                                                        menuIdx: prev.menuIdx === idx ? null : idx,
                                                        subIdx: null
                                                    }))}
                                                    className="px-4 py-3 text-white border-b border-orange-600"
                                                    animate={{ rotate: mobileNestedSubmenu.menuIdx === idx ? 180 : 0 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <ChevronDown size={20} />
                                                </motion.button>
                                            )}
                                        </div>

                                        <AnimatePresence>
                                            {menu.submenus && mobileNestedSubmenu.menuIdx === idx && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: -10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: -10 }}
                                                    transition={{ duration: 0.25 }}
                                                    className={`${isDarkMode ? 'bg-gray-600' : 'bg-orange-600'}`}
                                                >
                                                    {menu.submenus.map((submenu, subIdx) => {
                                                        const isNested = isSubMenuItem(submenu);
                                                        const displayText = isNested ? submenu.title : submenu;

                                                        return (
                                                            <div key={subIdx}>
                                                                <div className="flex items-center justify-between">
                                                                    <a
                                                                        href="#"
                                                                        className="flex-1 px-6 py-2 text-white text-sm border-b border-orange-500 hover:bg-orange-500 transition-colors"
                                                                        onClick={(e) => {
                                                                            if (isNested && submenu.submenu) {
                                                                                e.preventDefault();
                                                                                setMobileNestedSubmenu(prev => ({
                                                                                    menuIdx: prev.menuIdx,
                                                                                    subIdx: prev.subIdx === subIdx ? null : subIdx
                                                                                }));
                                                                            }
                                                                        }}
                                                                    >
                                                                        {displayText}
                                                                    </a>
                                                                    {isNested && submenu.submenu && (
                                                                        <motion.button
                                                                            onClick={() => setMobileNestedSubmenu(prev => ({
                                                                                menuIdx: prev.menuIdx,
                                                                                subIdx: prev.subIdx === subIdx ? null : subIdx
                                                                            }))}
                                                                            className="px-4 py-2 text-white border-b border-orange-500"
                                                                            animate={{ rotate: mobileNestedSubmenu.subIdx === subIdx ? 180 : 0 }}
                                                                            transition={{ duration: 0.2 }}
                                                                        >
                                                                            <ChevronDown size={16} />
                                                                        </motion.button>
                                                                    )}
                                                                </div>

                                                                {/* Second Level Mobile Submenu */}
                                                                <AnimatePresence>
                                                                    {isNested && submenu.submenu && mobileNestedSubmenu.subIdx === subIdx && (
                                                                        <motion.div
                                                                            initial={{ opacity: 0, y: -10 }}
                                                                            animate={{ opacity: 1, y: 0 }}
                                                                            exit={{ opacity: 0, y: -10 }}
                                                                            transition={{ duration: 0.25 }}
                                                                            className={`${isDarkMode ? 'bg-gray-500' : 'bg-orange-500'}`}
                                                                        >
                                                                            {submenu.submenu.map((nestedItem, nestedIdx) => {
                                                                                const hasSubdetails = isSubDetail(nestedItem);
                                                                                const nestedText = hasSubdetails ? nestedItem.title : nestedItem;

                                                                                return (
                                                                                    <div key={nestedIdx}>
                                                                                        <div className="flex items-center justify-between">
                                                                                            <a
                                                                                                href="#"
                                                                                                className="flex-1 px-8 py-2 text-white text-sm border-b border-orange-400 hover:bg-orange-400 transition-colors"
                                                                                                onClick={(e) => {
                                                                                                    if (hasSubdetails) {
                                                                                                        e.preventDefault();
                                                                                                        setMobileFinalSubmenu(prev => ({
                                                                                                            menuIdx: prev.menuIdx,
                                                                                                            subIdx: prev.subIdx,
                                                                                                            nestedIdx: prev.nestedIdx === nestedIdx ? null : nestedIdx
                                                                                                        }));
                                                                                                    }
                                                                                                }}
                                                                                            >
                                                                                                {nestedText}
                                                                                            </a>
                                                                                            {hasSubdetails && (
                                                                                                <motion.button
                                                                                                    onClick={() => setMobileFinalSubmenu(prev => ({
                                                                                                        menuIdx: prev.menuIdx,
                                                                                                        subIdx: prev.subIdx,
                                                                                                        nestedIdx: prev.nestedIdx === nestedIdx ? null : nestedIdx
                                                                                                    }))}
                                                                                                    className="px-4 py-2 text-white border-b border-orange-400"
                                                                                                    animate={{ rotate: mobileFinalSubmenu.nestedIdx === nestedIdx ? 180 : 0 }}
                                                                                                    transition={{ duration: 0.2 }}
                                                                                                >
                                                                                                    <ChevronDown size={16} />
                                                                                                </motion.button>
                                                                                            )}
                                                                                        </div>

                                                                                        {/* Third Level Mobile Submenu */}
                                                                                        <AnimatePresence>
                                                                                            {hasSubdetails && mobileFinalSubmenu.nestedIdx === nestedIdx && (
                                                                                                <motion.div
                                                                                                    initial={{ opacity: 0, y: -10 }}
                                                                                                    animate={{ opacity: 1, y: 0 }}
                                                                                                    exit={{ opacity: 0, y: -10 }}
                                                                                                    transition={{ duration: 0.25 }}
                                                                                                    className={`${isDarkMode ? 'bg-gray-400' : 'bg-orange-400'}`}
                                                                                                >
                                                                                                    {nestedItem.subdetails.map((detail, detailIdx) => (
                                                                                                        <a
                                                                                                            key={detailIdx}
                                                                                                            href="#"
                                                                                                            className="block px-10 py-2 text-white text-sm border-b border-orange-300 hover:bg-orange-300 transition-colors"
                                                                                                        >
                                                                                                            {detail}
                                                                                                        </a>
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
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </nav>
        </div>
    );
}