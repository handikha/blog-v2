import { AnimatePresence, motion } from "framer-motion";
import Button from "../Button";
import { useEffect, useState } from "react";
import { HiMenu, HiMoon, HiSun, HiX } from "react-icons/hi";

import {
    HiOutlineArrowRightOnRectangle,
    HiOutlineCog6Tooth,
    HiOutlineHome,
} from "react-icons/hi2";
import ToTop from "../ToTop";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    const navigate = useNavigate();
    // LOGIN HANDLER
    const [isLogin, setIsLogin] = useState(true);

    // THEME HANDLER
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );

    const element = document.documentElement;

    const toggleDarkMode = (theme) => {
        setTheme(theme);
    };

    useEffect(() => {
        switch (theme) {
            case "dark":
                element.classList.add("dark");
                localStorage.setItem("theme", theme);
                break;

            case "light":
                element.classList.remove("dark");
                localStorage.removeItem("theme");
                break;

            default:
                element.classList.remove("dark");
                localStorage.removeItem("theme");
                break;
        }
    }, [theme, element.classList]);

    useEffect(() => {
        if (localStorage.theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [element.classList]);

    // SCROLL AND RESIZE HANDLER
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;
            setIsScrolled(scrollTop > 40);
        };

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", () => {
            setIsNavActive(false);
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", () => {
                setIsNavActive(false);
            });
        };
    }, [isLogin]);

    // NAV MENU HANDLER
    const [isNavActive, setIsNavActive] = useState(false);
    const openNavMenu = () => {
        setIsNavActive(true);
    };

    const closeNavMenu = () => {
        setIsNavActive(false);
    };

    useEffect(() => {
        if (isNavActive) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [isNavActive]);

    // PROFILE MENU HANDLER
    const [isProfileActive, setIsProfileActive] = useState(false);
    const openProfileMenu = () => {
        setIsProfileActive(true);
    };
    const closeProfileMenu = () => {
        setIsProfileActive(false);
    };

    return (
        <>
            <AnimatePresence>
                <motion.div
                    initial={{ translateY: -50, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    className={`nav ${
                        isScrolled
                            ? "border-b-[1px] dark:shadow-slate-800"
                            : null
                    }`}
                >
                    <div className="navbar container">
                        <a href="/">
                            <h3 className="cursor-pointer select-none tracking-tighter text-primary">
                                Ngeblog.
                            </h3>
                        </a>

                        <div className="nav-menu-wrapper">
                            {theme === "light" ? (
                                <span
                                    className={`theme-button`}
                                    onClick={() => toggleDarkMode("dark")}
                                >
                                    <HiSun />
                                </span>
                            ) : (
                                <span
                                    className={`theme-button`}
                                    onClick={() => toggleDarkMode("light")}
                                >
                                    <HiMoon />
                                </span>
                            )}

                            <AnimatePresence>
                                {isNavActive && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="sidebar-bg"
                                        onClick={closeNavMenu}
                                    />
                                )}
                            </AnimatePresence>

                            <div
                                className={`${
                                    isNavActive ? "left-0" : "-left-full"
                                } nav-menu`}
                            >
                                <AnimatePresence>
                                    {isNavActive && (
                                        <motion.h3
                                            initial={{
                                                opacity: 0,
                                                translateX: -50,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                                delay: 0.3,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                translateX: 0,
                                            }}
                                            exit={{ opacity: 0, delay: 0.5 }}
                                            className="mb-4 h-fit select-none tracking-tighter text-primary md:hidden"
                                        >
                                            Ngeblog.
                                        </motion.h3>
                                    )}
                                </AnimatePresence>

                                <Button
                                    path="/"
                                    className={`nav-menu-item flex items-center gap-3`}
                                    isLink
                                    onClick={closeNavMenu}
                                >
                                    <HiOutlineHome className="text-xl md:hidden" />
                                    Home
                                </Button>

                                <Button
                                    path="/"
                                    className={`nav-menu-item flex items-center gap-3 md:hidden ${
                                        isLogin ? "md:col-start-2 " : ""
                                    }`}
                                    isLink
                                    onClick={closeNavMenu}
                                >
                                    <HiOutlineCog6Tooth className="text-xl" />
                                    Preferences
                                </Button>
                                <Button
                                    path="/"
                                    className={`nav-menu-item flex items-center gap-3 md:hidden ${
                                        isLogin ? "md:col-start-2 " : ""
                                    }`}
                                    isLink
                                    onClick={closeNavMenu}
                                >
                                    <HiOutlineArrowRightOnRectangle className="text-xl" />
                                    Logout
                                </Button>

                                {!isLogin && (
                                    <>
                                        <Button
                                            title="Login"
                                            path="/"
                                            className="nav-menu-item"
                                            isLink
                                            onClick={() => {
                                                closeNavMenu();
                                                setIsLogin(true);
                                            }}
                                        />

                                        <Button
                                            title="Get Started"
                                            isPrimary
                                            className="mt-4 w-full md:col-span-2 md:mt-0 md:w-fit"
                                            onClick={closeNavMenu}
                                        />
                                    </>
                                )}
                            </div>

                            <div
                                className={`flex items-center gap-6 ${
                                    !isLogin && "md:hidden"
                                }`}
                            >
                                {isLogin && (
                                    <div className="profile-img-wrapper relative row-start-2 flex w-full items-center gap-4">
                                        <div
                                            className={`aspect-square w-8 cursor-pointer self-center rounded-full  bg-primary md:mb-0 md:block ${
                                                isNavActive && "-z-10"
                                            }`}
                                            onClick={() => {
                                                closeNavMenu();
                                                if (isProfileActive) {
                                                    return closeProfileMenu();
                                                }
                                                openProfileMenu();
                                            }}
                                        />

                                        <AnimatePresence>
                                            {isProfileActive && (
                                                <motion.div
                                                    initial={{
                                                        opacity: 0,
                                                        scale: 0,
                                                        originY: 0,
                                                        originX: 1,
                                                    }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        scale: 1,
                                                    }}
                                                    exit={{
                                                        opacity: 0,
                                                        scale: 0,
                                                        originY: 0,
                                                        originX: 1,
                                                    }}
                                                    className="absolute right-[50%] top-[110%] w-40 rounded-lg bg-slate-100 p-4 shadow-lg dark:bg-slate-800"
                                                >
                                                    <div className="flex select-none flex-col gap-2">
                                                        <p className="cursor-pointer py-1 duration-300 hover:pl-2">
                                                            Profile
                                                        </p>
                                                        <p
                                                            className="cursor-pointer py-1 duration-300 hover:pl-2"
                                                            onClick={() => {
                                                                setIsLogin(
                                                                    false
                                                                );
                                                                setIsProfileActive(
                                                                    false
                                                                );
                                                            }}
                                                        >
                                                            Logout
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                )}

                                <div className="sidebar-button">
                                    {isNavActive ? (
                                        <span
                                            onClick={closeNavMenu}
                                            className="text-light"
                                        >
                                            <HiX />
                                        </span>
                                    ) : (
                                        <span onClick={openNavMenu}>
                                            <HiMenu />
                                        </span>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
            <ToTop
                className={
                    isScrolled && !isNavActive
                        ? "translate-y-0"
                        : "translate-y-[150%]"
                }
            />
        </>
    );
}
