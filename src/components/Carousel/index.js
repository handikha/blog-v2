import React, { useEffect, useRef, useState } from "react";
import blogs from "../../json/blogs.json";
import {
  HiOutlineChevronDoubleLeft,
  HiOutlineChevronDoubleRight,
} from "react-icons/hi";

export default function Carousel() {
  const newBlogs = blogs.slice(0, 3);
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevState) => (prevState + 1) % newBlogs.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [newBlogs.length]);

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setActiveIndex((prevState) => (prevState + 1) % newBlogs.length);
    }, 3000);
  };

  const handleNextButton = () => {
    setActiveIndex((prevState) => (prevState + 1) % newBlogs.length);
  };

  const handlePrevButton = () => {
    setActiveIndex(
      (prevState) => (prevState - 1 + newBlogs.length) % newBlogs.length
    );
  };

  return (
    <>
      <div
        className="absolute left-0 right-0 top-16 col-span-2 md:static md:p-4"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className={` relative aspect-[2/1] overflow-hidden bg-cover bg-center p-4 duration-300 md:rounded-xl`}
          style={{
            backgroundImage: `url("${newBlogs[activeIndex].postImage}")`,
          }}
        >
          <div className="absolute inset-0 flex items-center justify-center bg-black/60 md:px-8">
            <h3 className="cursor-pointer text-lg text-slate-50 hover:text-primary md:text-2xl ">
              {newBlogs[activeIndex].title}
            </h3>
          </div>
          <div
            className="absolute left-0 top-0 flex h-full cursor-pointer items-center bg-gradient-to-r from-black/30 px-4 text-light md:text-2xl"
            onClick={handlePrevButton}
          >
            <HiOutlineChevronDoubleLeft />
          </div>
          <div
            className="absolute right-0 top-0 flex h-full cursor-pointer items-center bg-gradient-to-l from-black/30 px-4 text-light md:text-2xl"
            onClick={handleNextButton}
          >
            <HiOutlineChevronDoubleRight />
          </div>
        </div>

        <div className="mt-4 flex justify-center gap-2">
          {newBlogs.map((item, index) => (
            <div
              key={index}
              className={`hidden h-2 w-2 cursor-pointer rounded-full md:block ${
                activeIndex === index
                  ? "bg-primary"
                  : "bg-slate-400 dark:bg-slate-700"
              } `}
              onClick={() => setActiveIndex(index)}
            ></div>
          ))}
        </div>
      </div>
    </>
  );
}
