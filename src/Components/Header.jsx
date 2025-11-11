import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Menu, X, ChevronDown, Search
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Team members data
const teamMembers = [
    { name: 'श्री आचार्य देवव्रत', title: 'मा. राज्यपाल, महाराष्ट्र राज्य', image: '/images/HeaderSlider/1.png' },
    { name: 'श्री. देवेंद्र फडणवीस', title: 'मा. मुख्यमंत्री, महाराष्ट्र राज्य', image: '/images/HeaderSlider/2.png' },
    { name: 'श्री. एकनाथ शिंदे', title: 'मा. उपमुख्यमंत्री, महाराष्ट्र राज्य', image: '/images/HeaderSlider/3.png' },
    { name: 'श्री. अजित पवार', title: 'मा. उपमुख्यमंत्री, महाराष्ट्र राज्य', image: '/images/HeaderSlider/4.png' },
    { name: 'श्री.अतुल सावे', title: 'मा. मंत्री  बहुजन कल्याण, महाराष्ट्र राज्य', image: '/images/HeaderSlider/5.png' }
];

const schemes = [
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

export default function Header() {
    const [openMenu, setOpenMenu] = useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState({
        menuIndex: null,
        submenuIndex: null,
        nestedIndex: null
    });
    const [searchQuery, setSearchQuery] = useState('');
    useEffect(() => {
        const handleHover = () => {
            document.querySelectorAll(".group/submenu, .group/nested").forEach((el) => {
                const rect = el.getBoundingClientRect();
                const sub = el.querySelector(".absolute");
                if (sub) {
                    if (rect.right + 400 > window.innerWidth) {
                        sub.style.left = "auto";
                        sub.style.right = "100%";
                    } else {
                        sub.style.left = "100%";
                        sub.style.right = "auto";
                    }
                }
            });
        };
        window.addEventListener("mousemove", handleHover);
        return () => window.removeEventListener("mousemove", handleHover);
    }, []);
    function isSubMenuItem(item) {
        return typeof item === 'object' && 'title' in item && 'submenu' in item;
    }

    function isSubDetail(item) {
        return typeof item === 'object' && 'title' in item && 'subdetails' in item;
    }

    const handleMobileMenuClick = (menuIndex, hasSubmenus) => {
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

    const handleSubmenuClick = (menuIndex, submenuIndex, hasNestedMenu) => {
        if (hasNestedMenu) {
            setActiveSubmenu(prev => ({
                menuIndex,
                submenuIndex: prev.submenuIndex === submenuIndex ? null : submenuIndex,
                nestedIndex: null
            }));
        }
    };

    const handleNestedMenuClick = (menuIndex, submenuIndex, nestedIndex) => {
        setActiveSubmenu(prev => ({
            menuIndex,
            submenuIndex,
            nestedIndex: prev.nestedIndex === nestedIndex ? null : nestedIndex
        }));
    };

    const renderMobileMenu = () => (
        <div className="lg:hidden ">
            <div className="flex items-center justify-between px-4 py-3 w-[100%] ">
                <span className="text-[#ff671f] text-base align-left">मेनू</span>
                <button
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    className="text-[#ff671f] p-2 hover:bg-white/10 rounded-md transition-colors align-right"
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
                        className="bg-white border-t border-orange-200 w-full mb-4"
                    >
                        <div className="divide-y divide-orange-200">
                            {menuStructure.map((menu, idx) => (
                                <div key={idx} className="relative">
                                    <div className="flex items-center">
                                        {menu.link && !menu.link.startsWith('http') ? (
                                            <Link
                                                to={menu.link}
                                                className="flex-1 px-4 py-3 text-orange-600 hover:bg-orange-50 transition-colors"
                                                onClick={() => !menu.submenus && setMobileMenuOpen(false)}
                                                style={{ fontFamily: 'baloo, serif', fontWeight: 600 }}
                                            >
                                                {menu.name}
                                            </Link>
                                        ) : (
                                            <a
                                                href={menu.link || '#'}
                                                className="flex-1 px-4 py-3 text-orange-600 hover:bg-orange-50 transition-colors"
                                                target={menu.link?.startsWith('http') ? "_blank" : undefined}
                                                rel={menu.link?.startsWith('http') ? "noopener noreferrer" : undefined}
                                                style={{ fontFamily: 'baloo, serif', fontWeight: 600 }}
                                            >
                                                {menu.name}
                                            </a>
                                        )}
                                        {menu.submenus && (
                                            <button
                                                onClick={() => handleMobileMenuClick(idx, true)}
                                                className="px-4 py-3 text-orange-600 hover:bg-orange-50 transition-colors"
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
                                                className="bg-orange-50"
                                                style={{ fontFamily: 'baloo, serif', fontWeight: 600 }}
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
                                                                        className="flex-1 px-6 py-3 text-orange-600 hover:bg-orange-100 transition-colors text-sm"
                                                                        onClick={() => setMobileMenuOpen(false)}
                                                                        style={{ fontFamily: 'baloo, serif', fontWeight: 600 }}
                                                                    >
                                                                        {displayText}
                                                                    </Link>
                                                                ) : (
                                                                    <button
                                                                        className="flex-1 px-6 py-3 text-orange-600 hover:bg-orange-100 transition-colors text-sm text-left"
                                                                        onClick={() => handleSubmenuClick(idx, subIdx, isNested)}
                                                                        style={{ fontFamily: 'poppins, serif' }}
                                                                    >
                                                                        {displayText}
                                                                    </button>
                                                                )}
                                                                {isNested && (
                                                                    <button
                                                                        onClick={() => handleSubmenuClick(idx, subIdx, true)}
                                                                        className="px-4 py-3 text-orange-600 hover:bg-orange-100 transition-colors"
                                                                        style={{ fontFamily: 'poppins, serif' }}
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
                                                                        className="bg-orange-100"
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
                                                                                                className="flex-1 px-8 py-3 text-orange-600 hover:bg-orange-200 transition-colors text-sm"
                                                                                                onClick={() => setMobileMenuOpen(false)}
                                                                                            >
                                                                                                {nestedText}
                                                                                            </Link>
                                                                                        ) : (
                                                                                            <button
                                                                                                className="flex-1 px-8 py-3 text-orange-600 hover:bg-orange-200 transition-colors text-sm text-left"
                                                                                                onClick={() => handleNestedMenuClick(idx, subIdx, nestedIdx)}
                                                                                            >
                                                                                                {nestedText}
                                                                                            </button>
                                                                                        )}
                                                                                        {hasSubdetails && (
                                                                                            <button
                                                                                                onClick={() => handleNestedMenuClick(idx, subIdx, nestedIdx)}
                                                                                                className="px-4 py-3 text-orange-600 hover:bg-orange-200 transition-colors"
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
                                                                                                className="bg-orange-200"
                                                                                            >
                                                                                                {nestedItem.subdetails.map((detail, detailIdx) => (
                                                                                                    <Link
                                                                                                        key={detailIdx}
                                                                                                        to={detail.link}
                                                                                                        className="block px-10 py-3 text-orange-600 hover:bg-orange-300 transition-colors text-sm"
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
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    // Main menu structure
    const menuStructure = [
        { name: 'मुख्य पृष्ठ', link: '/' },
        { name: 'परिपत्रक', link: 'paripatra' },
        { name: 'गॅलरी', link: '/Gallery' },
        { name: 'योजना', submenus: schemes },
        { name: 'वार्ता', link: '/News' },
        { name: 'अमृत दुर्गोत्सव २०२५', link: 'https://www.durgotsav.com/' },
        { name: 'अमृत महाराष्ट्र', link: 'https://amrutmaharashtra.org/' },
        { name: 'अमृत पथ', link: 'https://amrutpeth.com/' },
        { name: 'लाभार्थी', link: '/Beneficiaries' },
        { name: 'ई-बुक', link: '/Book' },
        { name: 'संपर्क साधा', link: '/Contact' }
    ];

    // Framer motion variants for dropdowns
    const dropdownVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.25,
                ease: [0.4, 0, 0.2, 1]
            }
        },
        exit: {
            opacity: 0, y: -8,
            transition: {
                duration: 0.2,
                ease: [0.4, 0, 1, 1]
            }
        }
    };

    return (
        <div className="bg-white">
            {/* Sub Header - Made static */}
            {/* Sub Header - One-line Responsive Left/Right Layout */}
            <div className="bg-white z-50 w-full">
                <div className="max-w-7xl mx-auto px-2 sm:px-4 py-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                        {/* === Left Section === */}
                        <div className="flex items-center gap-4  md:justify-start flex-shrink-0 text-left md:text-left">
                            <h1 className="text-[#ff671f] font-bold text-lg sm:text-xl md:text-3xl font-playfair">
                                AMRUT
                            </h1>
                            <div className="leading-tight">
                                <h2
                                    className="text-[10px] sm:text-sm md:text-lg font-bold text-orange-600"
                                    style={{ fontFamily: "baloo, sans-serif" }}
                                >
                                    महाराष्ट्र संशोधन, उन्नती व प्रशिक्षण प्रवोधिनी (अमृत)
                                </h2>
                                <p className="text-[8px] sm:text-[10px] md:text-xs text-black font-playfair">
                                    ACADEMY OF MAHARASHTRA RESEARCH, UPLIFTMENT AND TRAINING (AMRUT)
                                </p>
                            </div>
                        </div>

                        {/* === Right Section (Team Members) === */}
                        <div className="flex items-center justify-start md:justify-end gap-2 sm:gap-3 md:gap-4 overflow-x-auto scrollbar-hide w-full md:w-auto px-1 sm:px-0">
                            {teamMembers.map((member, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center justify-start w-[55px] sm:w-[75px] md:w-[100px] flex-shrink-0 cursor-pointer group"
                                >
                                    {/* Circle Image */}
                                    <div className="relative">
                                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-md overflow-hidden group-hover:scale-105 transition-transform duration-300">
                                            <img
                                                src={member.image}
                                                alt={member.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>

                                    {/* Text */}
                                    <div className="text-center mt-1 w-full">
                                        <p
                                            className="text-[7px] sm:text-[9px] md:text-[11px] font-semibold text-[#ff671f] leading-tight"
                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                        >
                                            {member.name}
                                        </p>
                                        <p
                                            className="text-[6px] sm:text-[8px] md:text-[9px] text-gray-700 font-medium leading-snug"
                                            style={{ fontFamily: "Poppins, sans-serif" }}
                                        >
                                            {member.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>



            {/* Main Navigation - Made static */}
            <nav
                className="bg-white z-40 border-b border-orange-100 font-700 text-sm  "
                style={{ fontFamily: 'baloo, serif', fontWeight: 600 }}
            >
                <div className="bg-white">
                    <div className="max-w-12xl text-sm mx-auto flex justify-between items-center">
                        {/* Desktop Menu */}
                        <ul className="hidden lg:flex flex-wrap mx-10">
                            {menuStructure.map((menu, idx) => (
                                <li
                                    key={idx}
                                    className="relative group/menu text-left" // 👈 keeps all text left-aligned
                                    onMouseEnter={() => setOpenMenu(idx)} // 👈 hover opens main dropdown
                                    onMouseLeave={() => {
                                        setOpenMenu(null);
                                        setActiveSubmenu({ submenuIndex: null, nestedIndex: null });
                                    }}
                                    style={{ fontFamily: 'baloo, serif', fontWeight: 600 }}
                                >
                                    {/* === MAIN MENU BUTTON === */}
                                    {menu.submenus ? (
                                        <button
                                            className="flex items-center justify-between gap-1 px-4 py-3 bg-white text-base text-[#ff671f] hover:bg-orange-50 transition-all w-full text-left"
                                            style={{ fontFamily: "baloo, serif" }}
                                        >
                                            {menu.name}
                                            <motion.span
                                                animate={{ rotate: openMenu === idx ? 180 : 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="text-[#ff671f]"
                                            >
                                                <ChevronDown size={16} />
                                            </motion.span>
                                        </button>
                                    ) : (
                                        <Link
                                            to={menu.link}
                                            className="flex items-center gap-1 px-4 py-3 bg-white text-base text-[#ff671f] hover:bg-orange-50 transition-all text-left"
                                            style={{ fontFamily: "baloo, serif" }}
                                        >
                                            {menu.name}
                                        </Link>
                                    )}

                                    {/* === MAIN DROPDOWN (opens on hover) === */}
                                    <AnimatePresence>
                                        {menu.submenus && openMenu === idx && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -8 }}
                                                transition={{ duration: 0.25 }}
                                                className="absolute left-0 top-full mt-[2px] w-[360px] bg-white shadow-lg border border-orange-400 rounded-md z-[9999] overflow-hidden text-left"
                                            >
                                                <div
                                                    className="max-h-[320px] overflow-y-auto"
                                                    style={{
                                                        scrollbarWidth: "thin",
                                                        scrollbarColor: "#ff671f transparent",
                                                        fontFamily: "baloo, serif",
                                                    }}
                                                >
                                                    {menu.submenus.map((submenu, subIdx) => {
                                                        const isNested =
                                                            typeof submenu === "object" && "submenu" in submenu;
                                                        const isSubOpen =
                                                            activeSubmenu.submenuIndex === subIdx && openMenu === idx;

                                                        return (
                                                            <div key={subIdx} className="border-b border-orange-100">
                                                                {/* === LEVEL 1 === */}
                                                                <button
                                                                    onClick={() =>
                                                                        setActiveSubmenu((prev) => ({
                                                                            submenuIndex:
                                                                                prev.submenuIndex === subIdx ? null : subIdx,
                                                                            nestedIndex: null,
                                                                        }))
                                                                    }
                                                                    className="flex justify-between w-full items-center px-5 py-3 text-[#ff671f] hover:bg-orange-50 cursor-pointer text-sm text-left"
                                                                >
                                                                    <span>{isNested ? submenu.title : submenu.name}</span>
                                                                    {isNested && (
                                                                        <motion.span
                                                                            animate={{ rotate: isSubOpen ? 180 : 0 }}
                                                                            transition={{ duration: 0.2 }}
                                                                        >
                                                                            <ChevronDown size={14} />
                                                                        </motion.span>
                                                                    )}
                                                                </button>

                                                                {/* === LEVEL 2 (Click to open) === */}
                                                                <AnimatePresence>
                                                                    {isNested && isSubOpen && (
                                                                        <motion.div
                                                                            initial={{ opacity: 0, height: 0 }}
                                                                            animate={{ opacity: 1, height: "auto" }}
                                                                            exit={{ opacity: 0, height: 0 }}
                                                                            transition={{ duration: 0.25 }}
                                                                            className="bg-orange-50 text-left"
                                                                        >
                                                                            {submenu.submenu.map((nestedItem, nIdx) => {
                                                                                const hasSubdetails =
                                                                                    typeof nestedItem === "object" &&
                                                                                    "subdetails" in nestedItem;
                                                                                const isNestedOpen =
                                                                                    activeSubmenu.nestedIndex === nIdx &&
                                                                                    isSubOpen;

                                                                                return (
                                                                                    <div key={nIdx} className="border-b border-orange-100">
                                                                                        <button
                                                                                            onClick={() =>
                                                                                                setActiveSubmenu((prev) => ({
                                                                                                    ...prev,
                                                                                                    nestedIndex:
                                                                                                        prev.nestedIndex === nIdx ? null : nIdx,
                                                                                                }))
                                                                                            }
                                                                                            className="flex justify-between w-full items-center px-8 py-3 text-[#ff671f] hover:bg-orange-100 cursor-pointer text-sm text-left"
                                                                                        >
                                                                                            <span>
                                                                                                {hasSubdetails
                                                                                                    ? nestedItem.title
                                                                                                    : nestedItem.name}
                                                                                            </span>
                                                                                            {hasSubdetails && (
                                                                                                <motion.span
                                                                                                    animate={{
                                                                                                        rotate: isNestedOpen ? 180 : 0,
                                                                                                    }}
                                                                                                    transition={{ duration: 0.2 }}
                                                                                                >
                                                                                                    <ChevronDown size={12} />
                                                                                                </motion.span>
                                                                                            )}
                                                                                        </button>

                                                                                        {/* === LEVEL 3 === */}
                                                                                        <AnimatePresence>
                                                                                            {hasSubdetails && isNestedOpen && (
                                                                                                <motion.div
                                                                                                    initial={{ opacity: 0, height: 0 }}
                                                                                                    animate={{ opacity: 1, height: "auto" }}
                                                                                                    exit={{ opacity: 0, height: 0 }}
                                                                                                    transition={{ duration: 0.25 }}
                                                                                                    className="bg-orange-100 text-left"
                                                                                                >
                                                                                                    {nestedItem.subdetails.map(
                                                                                                        (detail, dIdx) => (
                                                                                                            <Link
                                                                                                                key={dIdx}
                                                                                                                to={detail.link}
                                                                                                                className="block px-10 py-2 text-[#ff671f] hover:bg-orange-200 transition-colors text-sm text-left"
                                                                                                            >
                                                                                                                {detail.name}
                                                                                                            </Link>
                                                                                                        )
                                                                                                    )}
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
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                            ))}
                        </ul>



                        {/* Mobile Menu */}

                    </div>
                </div>
                {renderMobileMenu()}
            </nav>
        </div>
    );
}