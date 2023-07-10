import blogs from "../../json/blogs.json";
import { useParams } from "react-router-dom";
import formatDate from "../../utils/formatDate";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter,
} from "react-icons/fa6";
import { HiOutlineBookmark, HiOutlineHeart } from "react-icons/hi";

export default function Article() {
    const { id } = useParams();
    const article = blogs.filter((blog) => blog.id === +id)[0];
    console.log(article);
    return (
        <div className="container py-24 md:px-24">
            <div className=" grid grid-cols-4 px-6">
                <div className="col-span-full md:col-span-3">
                    <h3 className="title">{article.title}</h3>
                    <div className="mt-4 aspect-[2/1] w-full overflow-hidden rounded-2xl bg-primary">
                        <img
                            src={article.postImage}
                            className="h-full w-full object-cover"
                            alt=""
                        />
                    </div>
                </div>

                <p className="content col-span-full mt-4 h-[200vh] md:col-span-3">
                    {article.content}
                </p>

                <div className="top-24 col-span-full col-start-1 row-start-2 mt-4 flex h-fit items-center gap-2 md:sticky md:col-span-3 md:col-start-4 md:row-start-1 md:ml-12 md:mt-12 md:flex-col md:items-start md:gap-1">
                    <div className="aspect-square w-8 rounded-full bg-primary md:w-16 "></div>
                    <span>{article.writer}</span>
                    <span className="md:hidden">&#xB7;</span>
                    <span className="text-sm">
                        Updated on {formatDate(article.createdAt)}
                    </span>
                    <div className=" mt-2 hidden gap-4 text-xl md:flex">
                        <span className="icon-wrapper">
                            <FaInstagram />
                        </span>

                        <span className="icon-wrapper">
                            <FaFacebookF />
                        </span>

                        <span className="icon-wrapper">
                            <FaTwitter />
                        </span>

                        <span className="icon-wrapper">
                            <FaLinkedinIn />
                        </span>
                    </div>
                    <div className="ml-auto flex gap-4 md:ml-0 md:mt-8 md:flex-col">
                        <span className="flex cursor-pointer items-center gap-x-2">
                            <HiOutlineBookmark className=" text-2xl" />
                            <span className="hidden md:inline">
                                Save this article
                            </span>
                        </span>
                        <span className="flex cursor-pointer items-center gap-x-2">
                            <HiOutlineHeart className=" text-2xl" />
                            <span className="hidden md:inline">
                                Like this article
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
