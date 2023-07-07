import React from "react";
import RenderCards from "../../components/Card";
import Carousel from "../../components/Carousel";
import blogs from "../../json/blogs.json";

export default function HomePage() {
  return (
    <div className="container py-24">
      <div className="grid grid-cols-1 gap-x-2 gap-y-8 px-6 duration-300 sm:grid-cols-2 lg:grid-cols-3">
        <Carousel />
        <div className="hidden p-4 lg:block">
          <div className="h-full w-full rounded-xl px-4 py-4 duration-300 hover:bg-slate-200/50 hover:shadow-sm">
            <h3 className="select-none pb-4 text-lg font-bold text-title dark:text-title-dark md:text-xl">
              Top Post
            </h3>
            <div className="h-80 overflow-hidden pr-4 hover:overflow-y-auto">
              {blogs.map((blog, index) => (
                <p className="cursor-pointer py-4 font-semibold hover:text-primary md:text-lg">
                  {blog.title}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
      <h3 className="card-container title px-10 md:mt-4">Latest Post</h3>
      <div className=" grid grid-cols-1 gap-x-2 gap-y-8 px-6 duration-300 sm:grid-cols-2 md:mt-2 lg:grid-cols-3">
        <RenderCards />
      </div>
    </div>
  );
}
