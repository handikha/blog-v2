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

export default function Navbar() {
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

  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ translateY: -50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          animate={{ translateY: 0, opacity: 1 }}
          className={`nav ${
            isScrolled ? "border-b-[1px] dark:shadow-slate-800" : null
          }`}
        >
          <div className="navbar container">
            <h3 className="select-none tracking-tighter text-primary cursor-pointer">
              Ngeblog.
            </h3>

            <div className="nav-menu-wrapper">
              {theme === "light" ? (
                <span
                  className={`theme-button ${isLogin ? "md:-mr-4" : ""}`}
                  onClick={() => toggleDarkMode("dark")}
                >
                  <HiSun />
                </span>
              ) : (
                <span
                  className={`theme-button ${isLogin ? "md:-mr-4" : ""}`}
                  onClick={() => toggleDarkMode("light")}
                >
                  <HiMoon />
                </span>
              )}

              <div className="sidebar-button">
                {isNavActive ? (
                  <span onClick={closeNavMenu} className="text-light">
                    <HiX />
                  </span>
                ) : (
                  <span onClick={openNavMenu}>
                    <HiMenu />
                  </span>
                )}
              </div>

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
                className={`${isNavActive ? "left-0" : "-left-full"} nav-menu`}
              >
                <AnimatePresence>
                  {isNavActive && (
                    <motion.h3
                      initial={{ opacity: 0, translateX: -50 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                      animate={{ opacity: 1, translateX: 0 }}
                      exit={{ opacity: 0, delay: 0.5 }}
                      className="mb-4 h-fit select-none tracking-tighter text-primary md:hidden"
                    >
                      Ngeblog.
                    </motion.h3>
                  )}
                </AnimatePresence>

                <Button
                  path="/"
                  className={`nav-menu-item flex items-center gap-3 ${
                    isLogin ? "md:col-start-2 " : ""
                  }`}
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

                {isLogin && (
                  <div className="profile-img-wrapper row-start-2 mb-2 flex w-full items-center gap-4 py-4 md:col-start-4 md:row-start-1 md:w-fit md:p-0 ">
                    <div
                      className={`aspect-square w-12 cursor-pointer self-center rounded-full  bg-primary md:mb-0 md:block md:w-8`}
                    ></div>
                    <p className="md:hidden">User</p>
                  </div>
                )}
                {isLogin && (
                  <div className="profile-img-wrapper row-start-2 mb-2 flex w-full items-center gap-4 py-4 md:col-start-4 md:row-start-1 md:w-fit md:p-0 ">
                    <div
                      className={`aspect-square w-12 cursor-pointer self-center rounded-full  bg-primary md:mb-0 md:block md:w-8`}
                    ></div>
                    <p className="md:hidden">User</p>
                  </div>
                )}

                {!isLogin && (
                  <>
                    <Button
                      title="Login"
                      path="/asd"
                      className="nav-menu-item"
                      isLink
                      onClick={closeNavMenu}
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
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <ToTop
        className={
          isScrolled && !isNavActive ? "translate-y-0" : "translate-y-[150%]"
        }
      />
    </>
  );
}
