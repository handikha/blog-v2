import React from "react";
import { HiOutlineBookmark } from "react-icons/hi";
import blogs from "../../json/blogs.json";
import { useNavigate } from "react-router-dom";

function Card({ writter, title, content, postImage, category, onClick }) {
  return (
    <div className="group flex h-fit w-full flex-col gap-3 rounded-xl p-4 duration-300 hover:scale-[102%] hover:bg-slate-200/60 hover:shadow-lg dark:hover:bg-slate-800/60">
      <div className="aspect-[2/1] w-full overflow-hidden rounded-lg">
        <img
          src={postImage}
          alt={title}
          className="h-full w-full object-cover duration-300 group-hover:scale-110"
        />
      </div>
      <div className="flex items-center justify-between">
        <p className="cursor-pointer text-sm text-light-gray hover:text-primary dark:text-gray dark:hover:text-primary">
          {category}
        </p>
        <span className="cursor-pointer text-2xl text-yellow-500 dark:text-yellow-600">
          <HiOutlineBookmark className="fill-current" />
        </span>
      </div>
      <h3 className="title cursor-pointer" onClick={onClick}>
        {title}
      </h3>
    </div>
  );
}

export default function RenderCards() {
  const navigate = useNavigate();

  return blogs.map((blog, index) => (
    <Card
      key={index}
      writter={blog.writer}
      title={blog.title}
      content={blog.content}
      postImage={blog.postImage}
      category={blog.category}
      onClick={() => navigate(`/article/${blog.id}`)}
    />
  ));
}
