import React from "react";
import {
    HiOutlineBookmark,
    HiOutlineHeart,
    HiOutlineMinusSm,
} from "react-icons/hi";
import blogs from "../../json/blogs.json";
import { useNavigate } from "react-router-dom";
import formatDate from "../../utils/formatDate";

function Card({
    writter,
    title,
    content,
    postImage,
    category,
    onClick,
    createdAt,
}) {
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
                <span className="cursor-pointer text-sm text-light-gray hover:text-primary dark:text-gray dark:hover:text-primary">
                    {writter}
                </span>
                <span className="flex gap-4 text-2xl ">
                    <span className="text-yellow-500 dark:text-light">
                        <HiOutlineBookmark className="cursor-pointer fill-current" />
                    </span>
                    <span className="text-red-500 dark:text-light">
                        <HiOutlineHeart className="cursor-pointer fill-current" />
                    </span>
                </span>
            </div>
            <h3
                className="card-title cursor-pointer"
                onClick={() => {
                    onClick();
                    window.scrollTo({ top: 0 });
                }}
            >
                {title}
            </h3>
            <p className="content">{content}</p>
            <div className="flex items-center gap-1 text-sm text-light-gray">
                <span className="select-none">{formatDate(createdAt)}</span>
                <HiOutlineMinusSm />
                <span className="cursor-pointer  hover:text-primary dark:text-gray dark:hover:text-primary">
                    {category}
                </span>
            </div>
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
            createdAt={blog.createdAt}
        />
    ));
}
